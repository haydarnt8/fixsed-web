import React from 'react'
import bg from '../image/bg6.jpg'

const Section6 = () => {
  return (
    <>
        <div className=' flex w-full h-screen ' >
            <div className='h-full w-1/2'>
                jojjo
            </div>
            <div className='h-full w-1/2 ' style={{
                // backgroundImage: `url(${bg})`,
            backgroundColor: "#6FBFB6",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover"
            }}>
                pkpkp
            </div>
        </div>
    </>
    )
}

export default Section6