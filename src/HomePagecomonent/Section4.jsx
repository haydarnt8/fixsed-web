import React from "react";
// import bg4 from "../image/iraq.png";
import bg from "../image/s4.jpg";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { Getdata } from "../function/getdata";
import { useNavigate } from "react-router-dom";

const Section4 = () => {
  const goToTop = () => {
    window.scrollTo({ top: 0 });
  };
  const cards = Getdata("countries");
  return (
    <>
      <div
        id="countries"
        className="s4bg  flex w-full h-full justify-center items-center "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="s4container mt-16 mb-16 max-h-full min-h-screen">
          <div className="head flex flex-col items-center justify-center mb-8">
            <p className="w-full title text-4xl mb-5 text-center">
              Drone law in some Middle Eastern countries
            </p>
            <p className="w-full countrycardcontent text-xl text-center font-medium">
              Middle Eastern countries have varied drone laws ranging from
              restrictive to permissive, with regulations focused on national
              security and privacy concerns
            </p>
          </div>

          {cards.map((card, index) => (
            
            <Link to={`middle-east-law/${card.id}`} onClick={goToTop} >
              <Fade left>
                <div className="countrycard ">
                  <div className="image h-40 w-40 overflow-hidden">
                    <img
                      src={card.url}
                      alt={card.title}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="countrycardcontent w-1/2">
                    <div className="title">
                      <p>{card.title}</p>
                    </div>
                    <div className="description">
                      <p>{card.description}</p>
                    </div>
                  </div>
                </div>
              </Fade>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Section4;

/* <div className=' s4container w-full min-h-screen max-h-full mt-24'>
<div className='head flex flex-col items-center justify-center mb-8'>
<p className='title text-4xl mb-5 text-center'>
Drone law in some Middle Eastern countries
</p>
<p className='countrycardcontent text-xl text-center font-medium'>
Middle Eastern countries have varied drone laws ranging from restrictive to permissive,
     with regulations focused on national security and privacy concerns
  </p>
  </div>
  <div className='w-full flex justify-center items-center mt-10 flex-wrap'>
  <div id='countrycard' className='countrycard relative h-60 flex items-center overflow-hidden '>
  <div className='h-full w-full'>
  <img src={country} alt={country} className='bg w-full h-full object-cover' />
  </div>
  <div className='absolute h-full w-full flex items-center '>
  <div className='flex flex-col justify-center items-center '>
  <p className='title mb-2 text-3xl'>iraq</p>
  <p className='content text-center '>Iraq is a country in the Middle East with a rich historydiverse culture</p>
  </div>
  <div className=' h-48 ml-2 mr-2'>
  <img src={country} alt={country}  className='flag w-full h-full object-cover'/>
  </div>
  </div>
  </div>
  </div>
</div> */
