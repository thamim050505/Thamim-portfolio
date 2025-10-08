import React from "react";
const Home = () => {
  
  return (
    <>
      <div className="home">
        <div className="home__inner">
          <div className="img-container ">
            <div className="inner__img "></div>
          </div>

          <div
            className="inner__content"
          >
            <h1>
              I'm <span> Thamim.</span> <br />
              <span> Front End </span> Developer{" "}
              <small className="home-content-h1-span">React expert</small>
            </h1>
            <p>
              "I create what people see, feel,and love to use." view my<b className="home__content-span">Projects</b> <b>resume</b>{" "}
              contact me or send me an email at kameelthamim6@gmail.com.{" "}
              <br />
              <small>Chennai, TamilNadu, India</small>
            </p>
            <a href="/KamilThamim-resume.pdf" download>
              <button>Download Resume</button>
            </a>
          </div>
        </div>
        </div>
    </>
  );
};

export default Home;