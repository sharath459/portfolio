'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useMemo, useRef, useEffect, useState, MutableRefObject } from 'react';

const COLORS = ['#8b5cf6', '#3b82f6', '#10b981'];

type Mouse = MutableRefObject<{ x: number; y: number }>;

/** Thousands of colored points distributed in a hollow sphere, slowly rotating,
 *  drifting upward with scroll for a depth-parallax effect. */
function ParticleField({ count, reduced }: { count: number; reduced: boolean }) {
  const points = useRef<THREE.Points>(null);

  // Soft radial sprite so points render as glowing dots instead of hard squares
  const sprite = useMemo(() => {
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext('2d')!;
    const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.4, 'rgba(255,255,255,0.5)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
    return new THREE.CanvasTexture(canvas);
  }, []);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const color = new THREE.Color();
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi) - 4;
      color.set(COLORS[i % COLORS.length]);
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (!points.current) return;
    if (!reduced) {
      points.current.rotation.y += delta * 0.02;
      points.current.rotation.x += delta * 0.004;
    }
    points.current.position.y = window.scrollY * 0.0012;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.09}
        map={sprite}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/** Glowing distorted sphere wrapped in a rotating wireframe icosahedron.
 *  Anchored to the hero: scrolls up and out of view with the page. */
function DataCore({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const wire = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    if (!reduced && wire.current) {
      wire.current.rotation.y += delta * 0.15;
      wire.current.rotation.z += delta * 0.05;
    }
    group.current.position.y =
      1.6 + (reduced ? 0 : Math.sin(t * 0.6) * 0.15) + window.scrollY * 0.004;
  });

  return (
    <group ref={group} position={[0, 1.6, -2.5]}>
      <mesh ref={wire} scale={1.9}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial wireframe color="#8b5cf6" transparent opacity={0.14} />
      </mesh>
      <mesh scale={0.95}>
        <icosahedronGeometry args={[1, 6]} />
        <MeshDistortMaterial
          color="#4c1d95"
          emissive={new THREE.Color('#8b5cf6')}
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
          distort={reduced ? 0 : 0.35}
          speed={2}
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}

/** Eases the camera toward the pointer for a subtle parallax. */
function CameraRig({ mouse, reduced }: { mouse: Mouse; reduced: boolean }) {
  useFrame(({ camera }) => {
    if (reduced) return;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.current.x * 0.8, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, -mouse.current.y * 0.5, 0.05);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Scene3D() {
  const mouse = useRef({ x: 0, y: 0 });
  const [reduced, setReduced] = useState(false);
  const [particleCount, setParticleCount] = useState<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', onChange);

    setParticleCount(window.innerWidth < 768 ? 1200 : 2600);

    const onMove = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove);

    return () => {
      mq.removeEventListener('change', onChange);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  // Wait for the client-side measurement so particle density matches the viewport
  if (particleCount === null) return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 55 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[6, 6, 6]} intensity={40} color="#8b5cf6" />
      <pointLight position={[-6, -4, 4]} intensity={25} color="#3b82f6" />
      <ParticleField count={particleCount} reduced={reduced} />
      <DataCore reduced={reduced} />
      <CameraRig mouse={mouse} reduced={reduced} />
    </Canvas>
  );
}
