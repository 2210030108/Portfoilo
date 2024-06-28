"use client"; // Mark this as a client component

import { useEffect, useRef } from 'react';

const TrailingCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorDotOutlineRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorDotOutline = cursorDotOutlineRef.current;

    const moveCursor = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const animateCursor = () => {
      cursorPosition.current.x += (mousePosition.current.x - cursorPosition.current.x) * 0.1;
      cursorPosition.current.y += (mousePosition.current.y - cursorPosition.current.y) * 0.1;

      cursorDot.style.left = `${cursorPosition.current.x}px`;
      cursorDot.style.top = `${cursorPosition.current.y}px`;
      cursorDotOutline.style.left = `${cursorPosition.current.x}px`;
      cursorDotOutline.style.top = `${cursorPosition.current.y}px`;

      requestAnimationFrame(animateCursor);
    };

    const clickCursor = () => {
      cursorDot.style.width = '16px';
      cursorDot.style.height = '16px';
      cursorDotOutline.style.width = '32px';
      cursorDotOutline.style.height = '32px';

      setTimeout(() => {
        cursorDot.style.width = '8px';
        cursorDot.style.height = '8px';
        cursorDotOutline.style.width = '16px';
        cursorDotOutline.style.height = '16px';
      }, 150); // Duration for the click effect
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', clickCursor);
    document.addEventListener('mouseup', clickCursor);

    animateCursor(); // Start the animation

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', clickCursor);
      document.removeEventListener('mouseup', clickCursor);
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" ref={cursorDotRef}></div>
      <div id="cursor-dot-outline" ref={cursorDotOutlineRef}></div>
    </>
  );
};

export default TrailingCursor;
