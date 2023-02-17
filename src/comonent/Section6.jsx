import React from 'react'
import s6 from '../image/s6.png'

const Section6 = () => {
  return (
    <>
        <div className=' flex w-full h-screen ' >
            <div className='h-full w-1/2'>
            </div>
            <div className='h-full w-1/2 ' style={{
            backgroundImage: `url(${s6})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "50% auto",
            backgroundPosition:"right",
            }}>

            </div>
        </div>
    </>
    )
}

export default Section6