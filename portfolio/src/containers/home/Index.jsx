import React from "react";
import "./styles.scss";
import { Link, useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import TypedText from "./TypedText";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  // const navigate = useNavigate();
  // const handleNavigateToContactMePAge = () => {
  //   navigate("/contact");
  // };
  const handleNavigateToGitHub = () => {
    const githubUrl = "https://github.com/drcetmi";
    window.open(githubUrl, "_blank");
  };
  const handleNavigateToLinkedin = () => {
    const linkedinUrl = "https://www.linkedin.com/in/durmus-cetmi/";
    window.open(linkedinUrl, "_blank");
  };

  return (
    <section id="home">
      <div className="home">
        <div className="home__text-wrapper">
          <h1>Durmus Cetmi</h1>
          <p>
            Ich bin{" "}
            <TypedText
              items={["Full-stack Developer", "Designer"]}
              delay={150}
            />
          </p>
        </div>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateY(550px)",
          }}
          end={{
            transform: "translatex(0px)",
          }}
        >
          <div className="home__contact-me">
            {/* <button onClick={handleNavigateToContactMePAge}>Hire Me</button> */}
            <button>
              <Link to="/my-resume-DC.pdf" target="_blank">
                Download Resume
              </Link>
            </button>
          </div>
        </Animate>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{ transform: "translateY(550px)" }}
          end={{ transform: "translatex(0px)" }}
        >
          <div className="social-icons">
            <FaGithub
              className="icon github-icon"
              onClick={handleNavigateToGitHub}
              size={40}
            />
            <FaLinkedin
              className="icon linkedin-icon"
              onClick={handleNavigateToLinkedin}
              size={40}
            />
          </div>
        </Animate>
        <div className="home__img-home">
          <img src={require("../../images/hero11.png")} />
        </div>
      </div>
<<<<<<< HEAD

      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
=======
>>>>>>> durmus
    </section>
  );
};

export default Home;
