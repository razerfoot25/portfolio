import React from "react";
import { BsArrowDown } from "react-icons/bs";

const Home = () => {
  return (
    <section className="home container grid">
      <div className="home__title--container">
        <h1 className="home__title bold">Jason Aldueza</h1>
        <p className="home__subtitle">Front-end Developer</p>
      </div>

      <div className="home__view-more">
        <span className="small">
          <BsArrowDown />
        </span>
      </div>
    </section>
  );
};

export default Home;
