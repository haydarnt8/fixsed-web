import React from 'react'
import bg1 from '../image/bg1.jpg'
import '../component.css'
const Section1 = () => {
  return (
    <>    
        <div className=' flex w-full h-screen '>
            <div className=' flex w-full h-screen' style={{backgroundImage: `url(${bg1})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover"
            }}>
                {/* <div className='introtext h-full w-full'>

                </div> */}
            </div>
        </div>
    </>
  )
}

export default Section1