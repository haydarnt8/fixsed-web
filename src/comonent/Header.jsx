import React from 'react'
import {useEffect, useState, useCallback , useRef} from 'react';
import logo from '../image/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'

const Headar = () => {
  
  const Scroll = useRef(0)
  const [Class , setClass] = useState(true)
  const [color, setColor] = useState(false)
  const [click, setClick] = useState(false)

  
  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)


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

  const changeColor =useCallback(
    e => {
    const window = e.currentTarget;
    if (window.scrollY >= 250) {
      setColor(true)
    }
    else {
      setColor(false)
    }
  },[]
  );

  useEffect(() => {
    console.log("work")
    window.addEventListener("scroll", handleNavigation );
    window.addEventListener('scroll',changeColor)
    
    return () => {
      window.removeEventListener("scroll", handleNavigation );
      window.removeEventListener('scroll',changeColor)
    };
  }, [handleNavigation , changeColor]);
  window.addEventListener('scroll',changeColor)

  return (
    <>
            <div className={color ? 'header header-bg' : 'header'} style={Class ? {top:0} : {top:-96} }>
            <nav className='navbar'>
                <a href='/' className='logo w-32'>
                    <img src={logo} alt='logo' className='pnglogo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='#home' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials' onClick={closeMenu}>Testimonials</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo' onClick={closeMenu}>Demo</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo' onClick={closeMenu}>Demo</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo' onClick={closeMenu}>Demo</a>
                    </li>
                </ul>
            </nav>
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


