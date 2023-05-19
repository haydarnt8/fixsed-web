import React from "react";
import { collection, doc,getDoc} from "firebase/firestore";
import { Stickynav } from "../HomePagecomonent/stickynav";
import { db } from "../firebaseconfig";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
import { Getdata } from "../function/getdata";

const MiddleEastLaw = () => {

  const goToTop = () => {
    window.scrollTo({ top: 0 });
  };

  const { id } = useParams();
  console.log(id)
  const [cards,setCards] = useState([])
  const partCollection = collection(db, "countries");
  const countries = Getdata("countries")
  useEffect(()=>{

    const get = async()=>{
      const docRef = doc(partCollection, id);
      const docSnap = await getDoc(docRef);
      const cardData = { ...docSnap.data(), id: docSnap.id };
      setCards([cardData]); // Store the data in an array
      console.log(cardData);

    }
    get()
  },[])
  return (
    <>
      <div className="flex flex-col items-center">
        <header id="header">
          <div className="header-banner">
            <h1>Middle Eastern Countries</h1>
          </div>
          <div className="clear"></div>
        </header>
        <Stickynav />

        <section id="content">
          <ol className="pt-16">
            {countries.map((country) => {
              return (
                
                <li>
                  <a href={`/middle-east-law/${country.id}`}>{country.title}</a>
                </li>
              );
            })}
          </ol>
          <article>
            {cards.map((part) => {
              const descriptions = part.description
                .split(".")
                .map((description, index) => (
                  <React.Fragment key={index}>
                    {description}.
                    <br />
                  </React.Fragment>
                ));
                const descriptions2 = part.description2
                .split(".")
                .map((description, index) => (
                  <React.Fragment key={index}>
                    {description}.
                    <br />
                  </React.Fragment>
                ));

              return (
                <>
                  <div key={part.id} id={part.id} className="pt-16">
                    <p className=" mb-3 text-3xl">{part.title}</p>
                    <p> {descriptions}</p>
                    <p className="pimg">
                      <img src={part.url} />
                    </p>
                    <hr className="shine" />
                  </div>
                  <div className="pt-16">
                    <p className=" mb-3 text-3xl">{part.title2}</p>
                    <p> {descriptions2}</p>
                    <hr className="shine" />
                  </div>
                </>
              );
            })}
          </article>

          <aside className="pt-16">
            {cards.map((part, index) => (
              <div className="asideimg">
                <img src={part.url} />
              </div>
            ))}
          </aside>
        </section>
      </div>
    </>
  );
};

export default MiddleEastLaw;
