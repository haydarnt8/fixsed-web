import React from 'react'
import bg4 from '../image/bg4.jpg'

const Section4 = () => {
  return (
    <div className=' flex w-full h-screen' style={{backgroundImage: `url(${bg4})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover"
    }}>
    </div>
  )
}

export default Section4