import React from 'react'
import bg5 from '../image/bg5.jpg'
const Section5 = () => {
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
        <div className='h-full w-1/2'>
            pkpkp
        </div>
      </div>
    </>
  )
}

export default Section5