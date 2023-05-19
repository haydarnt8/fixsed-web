import React from "react";
import s2 from "../image/s22.png";
import logo from "../image/logo1.png";
import Fade from "react-reveal/Fade";
import { useNavigate } from "react-router-dom";
import { Getdata } from "../function/getdata";
// import bg1 from '../image/bg1.webp'

const Section2 = () => {
  const goToTop = () => {
    window.scrollTo({ top: 0 });
  };
  const navigate = useNavigate();

  const handleClick1 = () => {
    goToTop();
    navigate("about-drone"); 
  };
  const handleClick2 = () => {
    goToTop();
    navigate("drone-type"); 
  };
  const parts = Getdata("dronetype");
  return (
    <>
      <div id="about" className=" s2 flex w-full max-h-full min-h-screen ">
        <div
          className=" s2bg w-1/2 flex max-h-full min-h-screen"
          style={{
            backgroundImage: `url(${s2})`,
            // backgroundColor:"#D6E3D9",
            backgroundRepeat: "no-repeat",
            backgroundSize: "50% auto",
            backgroundAttachment: "fixed",
            backgroundPosition: "left center",
          }}
        ></div>
        <div className="s2container max-h-full min-h-screen w-1/2 p-12 flex flex-col justify-center items-center ">
          <Fade bottom>
            <div className="w-32  mb-5">
              <img src={logo} alt={logo} className="object-cover" />
            </div>
            <div className="title text-4xl">
              <p>ABOUT DRONE</p>
            </div>
            <div className="content text-base w-10/12">
              <p>
                A drone is an unmanned aerial vehicle (UAV) equipped with
                cameras, sensors, GPS and other technology. They can be operated
                remotely or autonomously, and used for various applications such
                as aerial photography, inspection, delivery, search and rescue,
                military operations, etc. Advances in technology have made
                drones increasingly accessible, versatile, and popular.
              </p>
            </div>
            <div>
              <button
                className=" mt-4 mb-10"
                onClick={handleClick1}
              >
                <p>Learn More</p>
              </button>
            </div>
            <div className="title text-3xl m-5">
              <p>Types of drones</p>
            </div>
            <div className="content text-base w-10/12">
              <ul className="">
                {parts.map((part) => {
                  return (
                    <li>
                      <p>
                        <b className="text-lg "> {part.title}:</b>{" "}
                        {part.description}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <button className=" mt-8" onClick={handleClick2}>
              <p>Learn More</p>
            </button>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Section2;
