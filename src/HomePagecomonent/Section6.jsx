import React, { useState } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { TbHandClick } from "react-icons/tb";
import { Getdata } from "../function/getdata";
import { Link } from "react-router-dom";
import { db } from "../firebaseconfig";
import { collection, addDoc } from "firebase/firestore";

// Inside your component's render method or functional component

const Section6 = () => {
  // const fb = collection(db, "fb");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const cards = Getdata("faq");
  const [scrollPos, setScrollPos] = useState(0);

  // const feedback = async () => {

  //   await addDoc(fb, { name: name, email: email, text: text });
  // };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const feedback = async () => {
    if (!isValidEmail(email) || name =="" || text == "") {
      console.error("error");
      document.getElementById('msg').innerHTML = 'Error!'
      return;
    } 

    try {
      const feedbackRef = collection(db, "fb"); // Replace 'feedback' with your desired collection name
      await addDoc(feedbackRef, { name: name, email: email, text: text });
      console.log("Feedback added successfully!");
      document.getElementById('msg').innerHTML = 'added successfully!'
    } catch (error) {
      console.error("Error adding feedback:", error);
    }
  };
  function handleScrollNext() {
    console.log(window.innerWidth);
    const container = document.querySelector(".card-content");
    setScrollPos(
      scrollPos +
        (window.innerWidth / 3 > 600
          ? window.innerWidth / 6
          : window.innerWidth - 100)
    );
    container.scrollLeft +=
      window.innerWidth / 3 > 600
        ? window.innerWidth / 6
        : window.innerWidth - 100;
  }

  function handleScrollPrev() {
    console.log(window.innerWidth);
    const container = document.querySelector(".card-content");
    setScrollPos(
      scrollPos -
        (window.innerWidth / 3 > 600
          ? window.innerWidth / 6
          : window.innerWidth - 100)
    );
    container.scrollLeft -=
      window.innerWidth / 3 > 600
        ? window.innerWidth / 6
        : window.innerWidth - 100;
  }

  return (
    <>
      <div id="faq" className="s6 flex w-full h-screen ">
        <div className=" s6container h-full w-1/2 flex justify-center items-center flex-col">
          <div className="s6title flex flex-col mt-2 items-start w-5/6">
            <p className="title text-4xl mb-5">Feedback and Questions</p>
            <p className="description text-lg w-10/12">
              Welcome to our Feedback and Questions Section ! We value your
              feedback and want to ensure that you have a platform to ask any
              questions related to drone. We are committed to providing accurate
              and up-to-date information on drone regulations and want to make
              sure that we are meeting your needs.
            </p>
          </div>
          <div id="form-main">
            <div id="form-div">
              <div className="form" id="form1">
                <p className="name">
                  <input
                    name="name"
                    type="text"
                    className=" feedback-input"
                    placeholder="Name"
                    id="name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </p>
                <p className="email">
                  <input
                    name="email"
                    type="text"
                    className=" feedback-input"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </p>
                <p className="text">
                  <textarea
                    name="text"
                    className=" feedback-input"
                    id="comment"
                    placeholder="Comment"
                    onChange={(e) => {
                      setText(e.target.value);
                    }}
                  ></textarea>
                </p>
                <div className="submit">
                  <input type="submit" onClick={feedback} value="SEND" id="button-blue" />
                  <div className="ease"></div>
                  <div className="w-full mt-8 text-xl text-center" id="msg"> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="questionstitle h-full w-1/2 flex  items-center flex-col  ">
          <div className="s6title flex flex-col mt-6 items-start w-4/5">
            <p className="title text-4xl mb-5">
              Frequently Asked Questions About Drones
            </p>
            <p className="description text-lg w-10/12">
              Are you curious about drones? Whether you're a beginner or an
              experienced pilot, this section is designed to answer some of the
              most common questions people have about these fascinating flying
              machines. From learning how drones work to understanding the legal
              regulations surrounding their use, we've got you covered. Explore
              the topics below to find answers to your most pressing questions
              about drones.
            </p>
          </div>
          <div className="slider h-2/3">
            <button id="prev" className="btn" onClick={handleScrollPrev}>
              <i className="flex justify-center">
                <AiOutlineDoubleLeft />
              </i>
            </button>
            <div className="card-content" style={{ scrollLeft: scrollPos }}>
              {cards.map((card, index) => (
                <Link
                  to={`faq#${card.id}`}
                  onClick={() => window.scrollTo({ top: 0 })}
                >
                  <div className="card" key={index}>
                    <i className="lar la-heart">
                      <TbHandClick />
                    </i>
                    <div className="card-text mt-10">
                      <h2>FAQ:</h2>
                      <p>{card.question}</p>
                    </div>
                    <div className="card-text2">
                      <label className="text-xl">Ans:</label>
                      <p>{card.answer}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <button id="next" className="btn" onClick={handleScrollNext}>
              <i className="flex justify-center">
                <AiOutlineDoubleRight />
              </i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section6;
