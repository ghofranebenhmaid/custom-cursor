import React, { useRef, useEffect } from 'react';

import './Cursor.scss';

const Cursor = () => {
   const cursorRef = useRef();

   useEffect(() => {
      document.addEventListener('mousemove', (e) => {
         const { clientX, clientY } = e;
         const mouseX = clientX - cursorRef.current.clientWidth / 2;
         const mouseY = clientY - cursorRef.current.clientHeight / 2;

         cursorRef.current.setAttribute(
            'style',
            `top:${mouseY}px; left:${mouseX}px;`
         );
      });
   }, []);

   useEffect(() =>
   {

      let Square = document.querySelectorAll('.square');
      let Rectangle = document.querySelectorAll('.rectangle');
      let Cercle = document.querySelectorAll('.cercle');
      let Triangle = document.querySelectorAll('.triangle');
      let Star = document.querySelectorAll('.star');
      let Heart = document.querySelectorAll('.heart');

      Square.forEach((link) => {
         link.addEventListener('mouseleave', () => {
            cursorRef.current.classList.remove('link-square');
         });
         link.addEventListener('mouseover', () => {
            cursorRef.current.classList.add('link-square');
         });
      });
      Rectangle.forEach((link) => {
         link.addEventListener('mouseleave', () => {
            cursorRef.current.classList.remove('link-rectangle');
         });
         link.addEventListener('mouseover', () => {
            cursorRef.current.classList.add('link-rectangle');
         });
      });
      Cercle.forEach((link) => {
         link.addEventListener('mouseleave', () => {
            cursorRef.current.classList.remove('link-cercle');
         });
         link.addEventListener('mouseover', () => {
            cursorRef.current.classList.add('link-cercle');
         });
      });
      Triangle.forEach((link) => {
         link.addEventListener('mouseleave', () => {
            cursorRef.current.classList.remove('link-triangle');
         });
         link.addEventListener('mouseover', () => {
            cursorRef.current.classList.add('link-triangle');
         });
      });
      Star.forEach((link) => {
         link.addEventListener('mouseleave', () => {
            cursorRef.current.classList.remove('link-star');
         });
         link.addEventListener('mouseover', () => {
            cursorRef.current.classList.add('link-star');
         });
      });
      Heart.forEach((link) => {
         link.addEventListener('mouseleave', () => {
            cursorRef.current.classList.remove('link-heart');
         });
         link.addEventListener('mouseover', () => {
            cursorRef.current.classList.add('link-heart');
         });
      });
   }, []);

   return <div className='cursor' ref={cursorRef}></div>;
};

export default Cursor;
