import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import TypedText from "./TypedText";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import About from "../about/Index";
import Skills from "../skills/Index";
import Resume from "../resume/Index";
import Contact from "../contact/Index";
import Portfolio from "../portfolio/Index";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigateToContactMePAge = () => {
    navigate("/contact");
  };
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
        {/* <q>
          Ich habe umfassende Erfahrung in der Gestaltung und Implementierung
          komplexer Systeme und bin es gewohnt, in anspruchsvollen Situationen
          einen logischen und lösungsorientierten Ansatz zu verfolgen.
        </q> */}
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateY(550px)",
          }}
          ende={{
            transform: "translatex(0px)",
          }}
        >
          <div className="home__contact-me">
            <button onClick={handleNavigateToContactMePAge}>Hire Me</button>
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
          <img src={require("./hero11.png")} />
        </div>
      </div>

      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
    </section>
  );
};

export default Home;
