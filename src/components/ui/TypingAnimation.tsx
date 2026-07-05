"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingAnimationProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  startDelay?: number;
}

export function TypingAnimation({
  text,
  className = '',
  typingSpeed = 100,
  startDelay = 0
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    // startDelay applies once, then one character per typingSpeed tick
    const start = setTimeout(() => {
      let i = 0;
      interval = setInterval(() => {
        i += 1;
        setDisplayedText(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, typingSpeed);
    }, startDelay);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, typingSpeed, startDelay]);

  // Renders a span (not a heading) so it can live inside the caller's <h1>
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`inline-block ${className}`}
    >
      {displayedText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block w-0.5 h-[0.9em] bg-primary ml-1 align-middle"
        />
      )}
    </motion.span>
  );
}
