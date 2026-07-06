'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false });

/** Full-viewport fixed 3D background. Renders nothing on the server or when
 *  WebGL is unavailable. */
export function Background3D() {
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      setSupported(!!(canvas.getContext('webgl2') || canvas.getContext('webgl')));
    } catch {
      setSupported(false);
    }
  }, []);

  if (!supported) return null;

  return (
    <div className="fixed inset-0 -z-20 pointer-events-none" aria-hidden>
      <Scene3D />
    </div>
  );
}
