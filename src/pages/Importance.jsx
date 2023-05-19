import React from "react";
import { Getdata } from "../function/getdata";
import { Stickynav } from "../HomePagecomonent/stickynav";

const Importance = () => {
  const parts = Getdata("importance");
  return (
    <>
      <div className="flex flex-col items-center">
        <header id="header">
          <div className="header-banner">
            <h1>Why Drone Laws Matter</h1>
          </div>
          <div className="clear"></div>
        </header>
        <Stickynav />

        <section id="content">
          <ol className="pt-16">
            {parts.map((part) => {
              return (
                <li>
                  <a href={`#${part.id}`}>{part.title}</a>
                </li>
              );
            })}
          </ol>
          <article>
            {parts.map((part) => {
              const descriptions = part.description
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
                </>
              );
            })}
          </article>

          <aside className="pt-16">
            {parts.map((part, index) => (
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

export default Importance;
