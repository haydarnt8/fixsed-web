import React from 'react'
import bg1 from '../image/bg1.webp'
// import logo2 from '../image/logo1.png'
import '../component.css'
const Section1 = () => {
  return (
      <>    
        <div id='home' className='intro flex w-full h-screen justify-center '>
          <div className='bg-img flex '
           style={{backgroundImage: `url(${bg1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          }}
          >
          </div>
          <div className='s1container'>
            <p className='title'>DRONE UNDER INTERNATIONAL HUMANITARIAN</p>
            <p className='content'>Navigate the complex world of drone legality with IHL <br />
              Learn about international humanitarian law's<br />
              impact on drone use during armed conflict <br />
              for the protection of civilians.<br />
            </p>
            <button className='w-28 h-10 mt-7'>
              <p>Lern More</p>
            </button>
          </div>
        </div>
    </>
  )
}

export default Section1