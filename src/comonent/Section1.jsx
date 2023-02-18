import React from 'react'
import s1 from '../image/s1.jpg'
// import bg1 from '../image/bg1.webp'
import bg2 from '../image/bg2.png'
// import logo2 from '../image/logo1.png'
import '../component.css'
const Section1 = () => {
  return (
      <>    
        <div id='home' className=' intro max-h-full min-h-screen flex w-full  justify-center  '      style={{backgroundImage: `url(${s1})`,
      // backgroundColor:"#D6E3D9",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      }}>

          <div className='bg-img flex '
           style={{backgroundImage: `url(${bg2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          }}
          >
          </div>
          <div className='s1container'>
            <p className='title text-5xl'>DRONE UNDER INTERNATIONAL HUMANITARIAN</p>
            <p className='content text-2xl '>Navigate the complex world of drone legality with IHL <br />
              Learn about international humanitarian law's<br />
              impact on drone use during armed conflict <br />
              for the protection of civilians.<br />
            </p>
            <button className='w-28 h-10 mt-9'>
              <p>Lern More</p>
            </button>
          </div>
        </div>
    </>
  )
}

export default Section1