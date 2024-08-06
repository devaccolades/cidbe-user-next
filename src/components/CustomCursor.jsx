// 'use client';
// import { useEffect, useRef, useState } from 'react';
// import styles from './cursor.module.css';

// const ConditionalContentWithCursor = () => {
//   const cursorRef = useRef(null);
//   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
//   const [showCursor, setShowCursor] = useState(true); // State to toggle the cursor

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setCursorPos({ x: e.pageX, y: e.pageY });
//     };

//     document.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   useEffect(() => {
//     if (showCursor && cursorRef.current) {
//       cursorRef.current.style.transform = `translate(${cursorPos.x}px, ${cursorPos.y}px)`;
//     }
//   }, [cursorPos, showCursor]);

//   return (
//     <div>
//       {showCursor && (
//         <div className={styles.customCursor} ref={cursorRef} />
//       )}
      
//       {showCursor ? (
//         <img
//           src="/path-to-your-image.jpg" 
//           alt="Continuous Image"
//           style={{ width: '100%', height: 'auto', zIndex: 1 }} // Ensure image stays below cursor
//         />
//       ) : (
//         <p>Your text content here</p>
//       )}

//       {/* Toggle buttons for demonstration */}
//       <button onClick={() => setShowCursor(!showCursor)}>
//         Toggle Cursor Visibility
//       </button>
//       <button onClick={() => setShowCursor(true)}>
//         Show Image and Cursor
//       </button>
//       <button onClick={() => setShowCursor(false)}>
//         {/* Show Text Only (Hide Cursor) */}
//       </button>
//     </div>
//   );
// };

// export default ConditionalContentWithCursor;
