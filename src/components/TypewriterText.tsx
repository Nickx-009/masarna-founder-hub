
import React, { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  className = "",
  typingSpeed = 80,
  deletingSpeed = 50, 
  delayBetweenTexts = 1000,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const cursorRef = useRef<HTMLSpanElement>(null);

  // Effect for handling the typewriter animation
  useEffect(() => {
    const currentText = texts[textIndex];
    
    // Typing forward
    if (isTyping) {
      if (charIndex < currentText.length) {
        const timeout = setTimeout(() => {
          // Variable typing speed - slightly slower on punctuation
          const char = currentText[charIndex];
          const isPunctuation = ['.', ',', '!', '?', '-', ';'].includes(char);
          const randomVariation = Math.random() * 50; // Add some randomness
          
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
          
          // Longer pauses after punctuation to mimic natural typing
          if (isPunctuation) {
            clearTimeout(timeout);
            setTimeout(() => {
              setCharIndex(charIndex + 1);
            }, typingSpeed * 3 + randomVariation);
          }
        }, typingSpeed + (Math.random() * 40)); // Add slight randomness to typing speed
        
        return () => clearTimeout(timeout);
      } else {
        // Finished typing current text, pause before deleting
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, delayBetweenTexts);
        return () => clearTimeout(timeout);
      }
    } 
    // Deleting
    else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next text
        const timeout = setTimeout(() => {
          const nextIndex = (textIndex + 1) % texts.length;
          setTextIndex(nextIndex);
          setIsTyping(true);
        }, 500); // Short pause before starting the next word
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, delayBetweenTexts, deletingSpeed, isTyping, textIndex, texts, typingSpeed]);

  // Effect for the cursor animation
  useEffect(() => {
    if (!cursorRef.current) return;
    
    // Natural cursor blink - faster when typing, slower when paused
    const blinkInterval = isTyping ? 500 : 800;
    
    const blinkCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = cursorRef.current.style.opacity === '0' ? '1' : '0';
      }
    };
    
    const blinkTimer = setInterval(blinkCursor, blinkInterval);
    return () => clearInterval(blinkTimer);
  }, [isTyping]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{displayText}</span>
      <span 
        ref={cursorRef} 
        className="inline-block h-[1.2em] w-0.5 ml-0.5 bg-current animate-pulse"
      ></span>
    </span>
  );
};

export default TypewriterText;
