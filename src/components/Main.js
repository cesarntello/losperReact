import React, { useEffect, useRef } from 'react'
import { Carroussell } from './Carroussell'
import { Section } from './Section'
import { Products } from './Products'
import {Form} from './Form'
import {Video} from './Video'
export const Main = () => {

const styleMain = {
  marginTop: '10px'
}

const containerRef = useRef(null);
useEffect(() => {
  const scrollButton = document.getElementById('scroll-btn');

  const handleClick = () => {
    containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  scrollButton.addEventListener('click', handleClick);

  return () => {
    scrollButton.removeEventListener('click', handleClick);
  };
}, []);

  return (
    <div >
      <div style={styleMain}>
        <Section />
        <Video />
        {/* <Carroussell/> */}
        <div ref={containerRef}>
          <Products />
        </div>
        <Form/>
       </div>
    </div>
  )
}
