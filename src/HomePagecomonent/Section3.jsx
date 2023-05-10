import React from "react";
import s3 from "../image/s3.jpg";
import card from "../image/card.png";
import Fade from "react-reveal/Fade";

const Section3 = () => {
  return (
    <>
      <div id="accidents" className="s3 flex w-full max-h-full min-h-screen ">
        <Fade bottom>
          <div className="s3container  w-1/2 flex flex-col min-h-screen max-h-full ">
            <div className="h-80 w-full flex flex-col items-center justify-between mt-14">
              <p className="title text-4xl">Why Drone Laws Matter</p>
              <p className="content text-base w-5/6 text-center">
                Drone laws governing military drone use are crucial to avoid
                unlawful operations, protect civilian populations, and ensure
                compliance with international law and ethical standards in armed
                conflicts. Violations may result in severe consequences.
              </p>
              <div>
                <button>More Info</button>
              </div>
            </div>
            <div className="accidentscontainer h-full w-full flex flex-col justify-between p-10 ">
              <div>
                <p className="title text-center mb-8 text-3xl">
                  Some Accidents Caused By The Drone In Iraq
                </p>
              </div>

              <div className="accidentscard max-w-full h-40 flex justify-around items-center mb-1 ">
                <div className="flex h-full w-3/4 ">
                  <div className="cardimg h-full w-4/12">
                    <img
                      className="h-full w-full object-cover"
                      src={card}
                      alt={card}
                    />
                  </div>
                  <div className="cardcontent  ml-8 flex flex-col justify-around w-96">
                    <p className="title text-xl">Airport Incident</p>
                    <p className="description ">
                      Following the US drone strike that killed Qasem Soleimani,
                      the US Embassy in Baghdad urged Americans to leave Iraq
                      due to a risk of attack by Iran or its proxies. The
                      situation remains volatile
                    </p>
                  </div>
                </div>
                <div className="h-full flex items-end">
                  <button>lern more</button>
                </div>
              </div>
              <div className="accidentscard max-w-full h-40 flex justify-around items-center mb-1 ">
                <div className="flex h-full w-3/4 ">
                  <div className="cardimg h-full w-4/12">
                    <img
                      className="h-full w-full object-cover"
                      src={card}
                      alt={card}
                    />
                  </div>
                  <div className="cardcontent  ml-8 flex flex-col justify-around w-96">
                    <p className="title text-xl">Airport Incident</p>
                    <p className="description">
                      Following the US drone strike that killed Qasem Soleimani,
                      the US Embassy in Baghdad urged Americans to leave Iraq
                      due to a risk of attack by Iran or its proxies. The
                      situation remains volatile
                    </p>
                  </div>
                </div>
                <div className="h-full flex items-end">
                  <button>lern more</button>
                </div>
              </div>
              <div className="accidentscard max-w-full h-40 flex justify-around items-center mb-1  ">
                <div className="flex h-full w-3/4 ">
                  <div className="cardimg h-full w-4/12">
                    <img
                      className="h-full w-full object-cover"
                      src={card}
                      alt={card}
                    />
                  </div>
                  <div className="cardcontent  ml-8 flex flex-col justify-around w-96">
                    <p className="title text-xl">Airport Incident</p>
                    <p className="description">
                      Following the US drone strike that killed Qasem Soleimani,
                      the US Embassy in Baghdad urged Americans to leave Iraq
                      due to a risk of attack by Iran or its proxies. The
                      situation remains volatile
                    </p>
                  </div>
                </div>
                <div className="h-full flex items-end">
                  <button>lern more</button>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <div
          className="s3bg max-h-full min-h-screen w-1/2"
          style={{
            backgroundImage: `url(${s3})`,
          }}
        ></div>
      </div>
    </>
  );
};

export default Section3;
