import React from "react";
import PageHeaderContent from "../../components/pageHeader/Index.jsx";
import { BsInfoCircleFill } from "react-icons/bs";
import "./styles.scss";
import { Animate } from "react-simple-animate";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personelDetails = [
  {
    label: "Name:",
    value: "Durmus Cetmi",
  },
  {
    label: "Age:",
    value: "33",
  },
  {
    label: "Email:",
    value: "drcetmi@gmail.com",
  },
  {
    label: "City:",
    value: "Oberhausen",
  },
  {
    label: "Degree:",
    value: "Master",
  },
  {
    label: "Freelance:",
    value: "Available",
  },
];

const jobSummary = `Passionierter Full-Stack-Webentwickler. 
Ich habe umfassende Erfahrung in der Gestaltung und Implementierung komplexer Systeme und bin es gewohnt, in anspruchsvollen Situationen einen logischen und lösungsorientierten Ansatz zu verfolgen. Ich bin stets bestrebt, meine Fähigkeiten weiterzuentwickeln und neue Erfahrungen zu sammeln. Ich verfolge die aktuellen Entwicklungen in der Webentwicklung und halte mich über neue Trends und Best Practices auf dem Laufenden. Dabei bin ich immer offen für neue Herausforderungen und möchte mein Wissen und meine Fähigkeiten stetig erweitern. Wenn Sie auf der Suche nach einem engagierten Full-Stack-Webentwickler sind, der über umfangreiche Kenntnisse und Erfahrung verfügt und bereit ist, neue Herausforderungen anzunehmen, stehe ich Ihnen gerne zur Verfügung.`;

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <Animate
        play
        duration={1}
        delay={0.3}
        start={{
          transform: "translatex(1000px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <h3 className="personalInformationHeaderText">Personal Information</h3>
        <div className="horizontalList">
          {personelDetails.map((item, i) => (
            <div key={i} className="horizontalItem">
              <span className="title">{item.label}</span>
              <p>|</p>
              <span className="value">{item.value}</span>
            </div>
          ))}
        </div>
      </Animate>
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            delay={0.3}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Full-Stack-Webentwickler</h3>
            <p>
              {jobSummary.split(". ").map((sentence, index) => (
                <span key={index}>
                  {sentence}.
                  <br />
                </span>
              ))}
            </p>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1}
            delay={0.3}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
