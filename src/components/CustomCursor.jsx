'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './cursor.module.css';

const ConditionalContentWithCursor = () => {
  const cursorRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursors] = useState(true); 

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.pageX, y: e.pageY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (showCursor && cursorRef.current) {
      cursorRef.current.style.transform = `translate(${cursorPos.x}px, ${cursorPos.y}px)`;
    }
  }, [cursorPos, showCursor]);

  return (
    <div>
      {showCursor && (
        <div className={styles.customCursor} ref={cursorRef} />
      )}
      
      {showCursor ? (
        <img
          src="/path-to-your-image.jpg" 
          alt="flats in Thrissur"
          style={{ width: '100%', height: 'auto', zIndex: 2 }} 
        />
      ) : (
        <p>Your text content here</p>
      )}

      <button onClick={() => setShowCursors(!showCursor)}>
        Toggle Cursor Visibility
      </button>
      <button onClick={() => setShowCursors(true)}>
        Show Image and Cursor
      </button>
      <button onClick={() => setShowCursors(false)}>
      </button>
    </div>
  );
};

export default ConditionalContentWithCursor; 


