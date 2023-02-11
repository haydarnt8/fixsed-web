import React from 'react'
import {useEffect, useState, useCallback , useRef} from 'react';
import logo from '../image/logo1.png'

const Headar = () => {
  
  const Scroll = useRef(0)
  const [Class , setClass] = useState(true)
  
  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget;
      if (Scroll.current  > window.scrollY) {
        setClass(true)
        console.log("worktrue")
      } else if (Scroll.current  < window.scrollY) {
        setClass(false) 
        console.log("workfalse")
      }
      Scroll.current=window.scrollY;
    }, [Scroll]
  );
  useEffect(() => {
    console.log("work")
    window.addEventListener("scroll", handleNavigation);
    
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);
    
  return (
    <>
      <div className='nav w-full flex justify-around items-center h-24'
      style={Class ? {top:0} : {top:-96} } >
          <div className='pb-1 flex m-3'>
              <div className='w-32 p-2'>
                  <img src={logo} alt={logo} />
              </div>
              <div>
                  <p>
                      DRONE UNDER <br/>
                      INTERNATIONAL <br/>
                      HUMANITARIAN 
                  </p>
              </div>
          </div>
          <div className=' w-3/5'>
              <div className='flex justify-around'>
                  <a  href="#home">Home</a>
                  <a  href="#home">contery</a>
                  <a  href="#home">International</a>
                  <a  href="#about">About</a>
                  <a  href="#contact">Contact</a>
              </div>
          </div>
      </div>
    </>
  );
};

export default Headar;

// const Header = () => {
//     const [scrollTop, setScrollTop] = useState(0);
//     const [theEnd, setTheEnd] = useState(0);
    
//     const handleScroll = () => {
//       setScrollTop(window.pageXOffset || document.documentElement.scrollTop);
//     };
//     useEffect(() => {
//       window.addEventListener('scroll', handleScroll);
  
//       return () => {
//         window.removeEventListener('scroll', handleScroll);
//       };
//     }, []);
  
  
//     const style = {
//       top: scrollTop > theEnd ? '-79px' : 0,
//     };
  
//     useEffect(() => {
//       setTheEnd(scrollTop);
//     }, [scrollTop]);
  
//     return (
  //     <>
  //     <div className={style+' header w-full border-2 border-black flex justify-around items-center h-20 bg-slate-400 '}  >
  //         <div className='pb-1 flex m-3 border-2 border-black'>
  //             <div className='w-32 p-2'>
  //                 <img src={logo} alt={logo} />
  //             </div>
  //             <div>
  //                 <p>
  //                     DRONE UNDER <br/>
  //                     INTERNATIONAL <br/>
  //                     HUMANITARIAN 
  //                 </p>
  //             </div>
  //         </div>
  //         <div className=' w-3/5 border-2 border-black'>
  //             <div className='flex justify-around'>
  //                 <a  href="#home">Home</a>
  //                 <a  href="#home">contery</a>
  //                 <a  href="#home">International</a>
  //                 <a  href="#about">About</a>
  //                 <a  href="#contact">Contact</a>
  //             </div>
  //         </div>
  //     </div>
  // </>
//     );
//   };


// export default Header;
// import React, { useState, useEffect } from 'react';
