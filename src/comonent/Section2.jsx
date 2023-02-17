import React from 'react'
import s2 from '../image/s22.png'
import logo from '../image/logo1.png'
// import bg1 from '../image/bg1.webp'



const Section2 = () => {


  return (
    <>
    <div className=' s2 flex w-full max-h-full min-h-screen '>
      <div className=' w-1/2 flex max-h-full min-h-screen' 
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
      {/* border-2 border-black */}
      <div className='s2container max-h-full min-h-screen w-1/2 p-12 flex flex-col justify-center items-center ' >
        
          <div className='w-32  mb-5'>
            <img src={logo} alt={logo} className='object-cover' />
          </div>
          <div className='title text-4xl '>
            <p>ABOUT DRONE</p>
          </div>
          <div className='content text-base m-5'>
            <p>A drone is an unmanned aerial vehicle (UAV) equipped with cameras, sensors, GPS and other technology.
              They can be operated remotely or autonomously, and used for various applications such as aerial photography, inspection, delivery, search and rescue, military operations, etc.
              Advances in technology have made drones increasingly accessible, versatile, and popular.
            </p>
          </div>
          <div>
            <button className=' mt-4 mb-10'>
              <p>Lern More</p>
            </button>
          </div>
          <div className='title text-3xl m-5'>
            <p>Types of drones</p>
          </div>
          <div className='content text-base'>
            <ul className='list'>
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
          <button className=' mt-8'>
              <p>Lern More</p>
            </button>
        
      </div>
    </div>
    </>
  )
}

export default Section2

// scale = max(background_positioning_area_width / background_image_width, background_positioning_area_height / background_image_height)
