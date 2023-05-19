import React from "react";

export const Stickynav = () => {
  return (
    <>
      <nav id="nav">
        <div className="site-title">Finland</div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about-drone">About</a>
          </li>
          <li>
            <a href="/drone-accidents">Accidents</a>
          </li>
          <li>
            <a href="/general-laws">International Laws</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
