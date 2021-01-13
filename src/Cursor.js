import React, { useRef, useEffect } from 'react';

import './Cursor.scss';

const Cursor = () =>
{
    const cursorRef = useRef();

     useEffect(() => {
      document.addEventListener('mousemove', (e) => {
         const { clientX, clientY } = e;
         const mouseX = clientX - cursorRef.current.clientWidth / 2;
         const mouseY = clientY - cursorRef.current.clientHeight / 2;

         // cursorRef.current.style.transform = `translate3d(${ mouseX }px, ${ mouseY }px, 0)`;
         cursorRef.current.setAttribute(
            'style',
            `top:${mouseY}px; left:${mouseX}px;`
         );
      });
     }, []);
    
     useEffect(() => {
      let navLinks = document.querySelectorAll('.nav-links');
      navLinks.forEach((link) => {
         link.addEventListener('mouseleave', () => {
            cursorRef.current.classList.remove('link-grow');
            
         });
         link.addEventListener('mouseover', () => {
            cursorRef.current.classList.add('link-grow');
         });
      });
     }, []);
    
   return <div className='cursor' ref={cursorRef}></div>;
}

export default Cursor
