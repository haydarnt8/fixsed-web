import React from 'react'
import s2 from '../image/s22.png'
import logo from '../image/logo2.png'
// import bg1 from '../image/bg1.webp'



const Section2 = () => {


  return (
    <>
    <div className=' flex w-full h-screen '>
      <div className='h-full w-1/2' 
      style={{backgroundImage: `url(${s2})`,
      // backgroundColor:"#D6E3D9",
      backgroundRepeat: "no-repeat",
      backgroundSize: "50% auto",
      backgroundAttachment: "fixed",
      backgroundPosition:"left center"
      }}
      >
        jojjo
      </div>
      <div className='s2container h-full w-1/2  p-9 justify-center items-center flex-col' >
        <div className=' flex justify-center items-center flex-col'>
          <img src={logo} alt={logo} className='w-32 border-2 border-black' />
          <h1>ABOUT DRONE</h1>
          <p>A drone is an unmanned aerial vehicle (UAV) equipped with cameras, sensors, GPS and other technology.
            They can be operated remotely or autonomously, and used for various applications such as aerial photography, inspection, delivery, search and rescue, military operations, etc.
            Advances in technology have made drones increasingly accessible, versatile, and popular.
          </p>
          <h1>
            Types of drones
          </h1>
          <ul>
            <li>
              Consumer drones: used for recreation and hobby purposes.
            </li>
            <li>
              Photography and videography drones: equipped with cameras for aerial footage.
            </li>
            <li>
              Industrial drones: used for inspections, mapping, and surveying.
            </li>
            <li>
              Delivery drones: used for the delivery of goods and packages.
            </li>
            <li>
              Military drones: used by armed forces for reconnaissance and surveillance purposes.
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Section2

// scale = max(background_positioning_area_width / background_image_width, background_positioning_area_height / background_image_height)
