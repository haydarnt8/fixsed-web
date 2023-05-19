import React from "react";
import { Stickynav } from "../HomePagecomonent/stickynav";
import { Getdata } from "../function/getdata";



const Faq = () => {
  const parts = Getdata("faq")
  return (
    <>
      <div className="flex flex-col items-center">
        <header id="header">
          <div className="header-banner">
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className="clear"></div>
        </header>
        <Stickynav />

        <section id="content">
          <ol className="pt-16">
            {parts !== [] ? (
              parts.map((part) => {
                return (
                  <li key={part.id}>
                    <a href={`#${part.id}`}>{part.question}</a>
                  </li>
                );
              })
            ) : (
              <p>Loading...</p>
            )}
          </ol>
          <article>
            {parts.map((part) => {
              const descriptions = part.answer
                .split(".")
                .map((description, index) => (
                  <React.Fragment key={index}>
                    {description}.
                    <br />
                  </React.Fragment>
                ));
              return (
                <>
                  <div id={part.id} className="pt-16">
                    <p
                      className=" mb-3 text-3xl"
                      key={part.id}
                      // id={part.id}
                    >
                      {part.question}
                    </p>
                    <p> {descriptions}</p>

                    <hr className="shine" />
                  </div>
                </>
              );
            })}
          </article>

          <aside className="pt-16">

          </aside>
        </section>
      </div>
    </>
  );
};

export default Faq;
