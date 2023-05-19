import React from "react";
import bg1 from "../image/s55.png";
// import bg2 from "../image/s555.png";
import logo from "../image/logo1.png";
import Fade from "react-reveal/Fade";
import { useNavigate } from "react-router-dom";
// import {useEffect, useState, useCallback , useRef} from 'react';
// import Fade from 'react-reveal/Fade';
const Section5 = () => {
  const navigate = useNavigate()
  const goToTop = () => {
    window.scrollTo({ top: 0 });
  };
  const handleClick1 = () => {
    goToTop();
    navigate("general-laws"); 
  };

  return (
    <>
      <div id="internationallaws" className="s5container">
        <div className="w-full flex items-center justify-center">
          <div className="s5title h-96 flex justify-around items-center m-10">
            <div className="s5logo h-56 flex items-center">
              <img
                src={logo}
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>
            <Fade>
              <div className="title w-2/4 text-6xl ">
                <p className="text-gray-800">
                  Drones Under General International <br /> Laws
                </p>
              </div>
            </Fade>
          </div>
        </div>

        <div
          className="s5bg1 w-full h-72 flex justify-center items-center"
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* <Fade left> */}
          <div className="title h-2/4 w-4/5 flex items-end text-4xl">
            <p className="text-end text-gray-800">Legal Framework for Armed Drones in International Law</p>
          </div>
          {/* </Fade> */}
        </div>

        <div className="s5bg1des w-full h-72 mb-24 mt-12 p-2 flex flex-col items-center justify-around">
          <Fade bottom>
            <div className="content w-4/6 text-xl mb-10">
              <p>
                The legal framework for maintaining international peace and
                protecting the right to life constitutes a coherent and
                well-established system that reflects standards developed over
                centuries and withstood the test of time. Although drones are
                not illegal weapons, they can easily be misused and the central
                rules of international law need not and should not be abandoned
                to meet the challenges posed by terrorism and “new” forms of
                conflict. On the contrary, the fact that drones make targeted
                killing so much easier should serve as an incentive to ensure
                serious application of these standards, especially in light of
                the likely expansion of the number of countries that have access
                to this technology in the future.
              </p>
            </div>
          </Fade>
          <div className="flex justify-center">
            <button onClick={handleClick1}>Learn More</button>
          </div>
        </div>
        {/* <div
          className="s5bg2 w-full h-72 flex justify-center items-center"
          style={{
            backgroundImage: `url(${bg2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="title h-2/4 w-4/5 justify-end flex items-end text-5xl">
            <p className="text-end text-gray-800">
              Permittance And Non-Permittance
            </p>
          </div>
        </div> */}

        {/* <div className="s5bg2des w-full h-full mb-12 mt-12 p-2 flex flex-col items-center justify-around">
          <Fade bottom>
            <div className="content w-4/6 text-xl mb-14">
              <p>
                Permittance and non-permittance of drones refers to the
                regulations that allow or prohibit the operation of drones in
                certain areas or for specific purposes. While some areas may
                permit drones, others may have strict restrictions in place due
                to safety concerns or potential privacy violations. These
                regulations are often determined by local authorities, and
                failure to obtain the necessary permits can result in legal
                penalties or fines. The following are four sections that outline
                the different types of areas and purposes where drones may or
                may not be permitted
              </p>
            </div>
          </Fade>
          <div className="mb-10">
            <button>Lern more</button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Section5;

{/* <div className=" lawcard flex flex-wrap justify-around items-center  ">
  <Fade>
    <div className="w-96 h-64 p-7 flex flex-col justify-start border-gray-400 border-2 ">
      <div className="title text-xl mb-3 ">
        <p>Restricted Airspace</p>
      </div>
      <hr className="w-2/5 mb-3" />
      <div className="content text-base">
        <p>
          Drones are not permitted in restricted airspace, which
          includes areas such as airports, military bases, and
          national parks
        </p>
      </div>
    </div>
    <div className="w-96 h-64 p-7 flex flex-col justify-start border-gray-400 border-2 ">
      <div className="title text-xl mb-3 ">
        <p>Private Property</p>
      </div>
      <hr className="w-2/5 mb-3" />
      <div className="content text-base">
        <p>
          Drone operators must obtain permission from property owners
          to fly over private land or record images or video
        </p>
      </div>
    </div>
  </Fade>
  <Fade>
    <div className="w-96 h-64 p-7 flex flex-col justify-start border-gray-400 border-2 ">
      <div className="title text-xl mb-3 ">
        <p>Public Areas</p>
      </div>
      <hr className="w-2/5 mb-3" />
      <div className="content text-base">
        <p>
          Drones may be permitted in public areas, but operators must
          comply with regulations related to noise, altitude, and
          proximity to people and buildings
        </p>
      </div>
    </div>
    <div className="w-96 h-64 p-7 flex flex-col justify-start border-gray-400 border-2 ">
      <div className="title text-xl mb-3 ">
        <p>Commercial Operations</p>
      </div>
      <hr className="w-2/5 mb-3 " />
      <div className="content text-base">
        <p>
          Drone operators must obtain permits and meet certain
          requirements to conduct commercial operations, such as
          aerial photography, deliveries, or surveillance
        </p>
      </div>
    </div>
  </Fade>
</div> */}





/* <div className=' flex w-full h-screen '>
  <div className='h-full w-1/2' style={{
  backgroundImage: `url(${bg5})`,
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundSize: "50% auto",
  }}>
  </div>
  <div className='h-full w-1/2 flex justify-center items-center '>

  </div>
</div> */
