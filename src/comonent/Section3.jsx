import React from 'react'
import s3 from '../image/s3.jpg'
import card from '../image/card.avif'
import Fade from 'react-reveal/Fade';

const Section3 = () => {
  return (
    <>
      <div className=' flex w-full max-h-full min-h-screen '>
        <Fade bottom>
          <div className='s3container  w-1/2 flex flex-col min-h-screen max-h-full '>
            <div className='h-80 w-full flex flex-col items-center justify-between mt-14'>
            <p className='title text-4xl'>
              Why Drone Laws Matter
            </p>
            <p className='content text-base w-5/6 text-center'>
              Drone laws governing military drone use are crucial to avoid unlawful operations,
              protect civilian populations,
              and ensure compliance with international law and ethical standards in armed conflicts.
              Violations may result in severe consequences.
            </p>
            <div>
              <button>More Info</button>
            </div>
            </div >
            <div className=' h-full w-full flex flex-col justify-between p-10 '>
              <div>
                <p className='title text-center mb-6 text-3xl'>Some Accidents Caused By The Drone In Iraq</p>
              </div>



              <div className='card max-w-full h-40 flex justify-around items-center '>
                <div className='flex h-full w-3/4 '>
                  <div className='h-full w-60'>
                      <img src={card}  alt={card}  className='h-full w-full object-cover' />
                  </div>
                  <div className='ml-8 flex flex-col justify-around w-96'>
                    <p className='title text-xl'>Airport Incident</p>
                    <p className='content'>Following the US drone strike that killed Qasem Soleimani, the US Embassy in Baghdad urged Americans to leave Iraq due to a risk of attack by Iran or its proxies. The situation remains volatile</p>
                  </div>
                </div>
                <div className='h-full flex items-end'>
                  <button>lern more</button>
                </div>
              </div>  
              <div className='card max-w-full h-40 flex justify-around items-center '>
                <div className='flex h-full w-3/4 '>
                  <div className='h-full w-60'>
                      <img src={card}  alt={card}  className='h-full w-full object-cover' />
                  </div>
                  <div className='ml-8 flex flex-col justify-around w-96'>
                    <p className='title text-xl'>Airport Incident</p>
                    <p className='content'>Following the US drone strike that killed Qasem Soleimani, the US Embassy in Baghdad urged Americans to leave Iraq due to a risk of attack by Iran or its proxies. The situation remains volatile</p>
                  </div>
                </div>
                <div className='h-full flex items-end'>
                  <button>lern more</button>
                </div>
              </div> 
              <div className='card max-w-full h-40 flex justify-around items-center '>
                <div className='flex h-full w-3/4 '>
                  <div className='h-full w-60'>
                      <img src={card}  alt={card}  className='h-full w-full object-cover' />
                  </div>
                  <div className='ml-8 flex flex-col justify-around w-96'>
                    <p className='title text-xl'>Airport Incident</p>
                    <p className='content'>Following the US drone strike that killed Qasem Soleimani, the US Embassy in Baghdad urged Americans to leave Iraq due to a risk of attack by Iran or its proxies. The situation remains volatile</p>
                  </div>
                </div>
                <div className='h-full flex items-end'>
                  <button>lern more</button>
                </div>
              </div>         




            </div>
          </div>
          </Fade>
          <div className='max-h-full min-h-screen w-1/2' style={{
            backgroundImage: `url(${s3})`,
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

export default Section3