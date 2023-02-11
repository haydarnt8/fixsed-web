import React from 'react'
import bg from '../image/bg6.jpg'

const Section6 = () => {
  return (
    <>
        <div className=' flex w-full h-screen ' >
            <div className='h-full w-1/2 ' style={{backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover"
            }}>
                pkpkp
            </div>
            <div className='h-full w-1/2 bg-lime-400'>
                jojjo
            </div>
        </div>
    </>
    )
}

export default Section6