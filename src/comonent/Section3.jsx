import React from 'react'
import s3 from '../image/s3.png'

const Section3 = () => {
  return (
    <>
      <div className=' flex w-full h-screen  '>
          <div className='s3container h-full w-1/2'>
              
          </div>
          <div className='h-full w-1/2' style={{
            backgroundImage: `url(${s3})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "50% auto",
            backgroundPosition:"right",
            }}>
              pkpkp
          </div>
      </div>
    </>
  )
}

export default Section3