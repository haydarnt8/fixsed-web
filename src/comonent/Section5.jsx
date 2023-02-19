import React from 'react'
import bg5 from '../image/s5.png'
import {useEffect, useState, useCallback , useRef} from 'react';
const Section5 = () => {
  const [color,setcolor] = useState('red')
  useEffect(()=>{
    console.log('asasasasas')
    setcolor('black')
  })
  return (
    <>
      <div className=' flex w-full h-screen '>
        <div className='h-full w-1/2' style={{
        backgroundImage: `url(${bg5})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "50% auto",
        }}>
        </div>
        <div className='h-full w-1/2 flex justify-center items-center '>
          <div className='w-52 h-52 rounded-md sheesh' style={{backgroundColor : `${color}` }}>
            sasa {color}
          </div>  
        </div>
      </div>
    </>
  )
}

export default Section5