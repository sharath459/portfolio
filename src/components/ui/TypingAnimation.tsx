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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Start delay before typing begins
    const startTimeout = setTimeout(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, typingSpeed);

        return () => clearTimeout(timeout);
      } else if (!isComplete) {
        setIsComplete(true);
      }
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [currentIndex, text, typingSpeed, startDelay, isComplete]);

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {displayedText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block w-0.5 h-[0.9em] bg-primary ml-1 align-middle"
        />
      )}
    </motion.h1>
  );
}
