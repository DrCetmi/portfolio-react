import React from "react";
import PageHeaderContent from "../../components/pageHeader/Index.jsx";
import { BsInfoCircleFill } from "react-icons/bs";
import { skillsData } from "./utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import "./styles.scss";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="content-wrapper">
        {skillsData.map((item, i) => (
          <div className="inner-content" key={i}>
            <Animate
              play
              duration={0.5}
              delay={0.3}
              start={{ transform: "translateX(-200px)" }}
              end={{ transform: "translateX(0)" }}
            >
              <h3 className="category-text">{item.label}</h3>
              <div className="progressbar-container">
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={0.5}
                    keyframes={["opacity: 1", "opacity: 0"]}
                    iterationCount="1"
                  >
                    <div className="progressbar-wrapper" key={j}>
                      <p>{skillItem.skillsName}</p>
                      <Line
                        percent={parseFloat(skillItem.percentage)}
                        strokeWidth="4"
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth="4"
                        strokeLinecap="round"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
