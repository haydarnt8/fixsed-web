import React from 'react'
import bg3 from '../image/bg3.jpg'

const Section3 = () => {
  return (
    <>
      <div className=' flex w-full h-screen  '>
          <div className='s3container h-full w-1/2'>
              jojjo
          </div>
          <div className='h-full w-1/2' style={{
            // backgroundImage: `url(${bg3})`,
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