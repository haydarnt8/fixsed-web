import React from 'react'
import bg1 from '../image/bg1.webp'
// import logo2 from '../image/logo1.png'
import '../component.css'
const Section1 = () => {
  return (
    <>    
        <div id='Home' className='intro flex w-full h-screen justify-center '>
            <div className='png flex ' style={{backgroundImage: `url(${bg1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            // backgroundAttachment: "fixed",
            // backgroundColor: "black"
            }}>
            </div>
            <div className='paragraph flex   justify-center flex-col items-center'>
              <div className='logo object-cover'>
              </div>
              <div className='title  '>
                <p className='head'>DRONE UNDER INTERNATIONAL HUMANITARIAN</p>
                <p className='dis'>Navigate the complex world of drone legality with IHL <br />
                  Learn about international humanitarian law's<br />
                  impact on drone use during armed conflict <br />
                  for the protection of civilians<br />
                  </p>
              </div>
            </div>
        </div>
    </>
  )
}

export default Section1