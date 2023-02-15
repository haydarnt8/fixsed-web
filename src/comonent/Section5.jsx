import React from 'react'
import bg5 from '../image/bg5.jpg'
const Section5 = () => {
  return (
    <>
    <div className=' flex w-full h-screen ' style={{
      backgroundColor:"#04575B",
    }}>
        <div className='h-full w-1/2'>
            pkpkp
        </div>
        <div className='h-full w-1/2' style={{
          // backgroundImage: `url(${bg5})`,
          backgroundColor:"#ebe6e6",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover"
    }}>
            jojjo
        </div>
    </div>
    </>
  )
}

export default Section5