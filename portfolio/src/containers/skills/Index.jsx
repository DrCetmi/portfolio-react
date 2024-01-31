import React from 'react';
import PageHeaderContent from '../../components/pageHeader';
import { BsInfoCircleFill } from 'react-icons/bs';
import { skillsData } from './utils';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import { Line } from 'rc-progress';
import './styles.scss';

const Skills = () => {
  return (
    <div id='skills' className='skills'>
      <PageHeaderContent headerText="My Skills" icon={<BsInfoCircleFill size={40} />} />
      <div className='content-wrapper'>
        {skillsData.map((item, i) => (
          <div className='inner-content' key={i}>
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{ transform: 'translateX(-200px)' }}
              end={{ transform: 'translateX(0)' }}
            >
              <div>
                <AnimateKeyframes
                  play
                  duration={1}
                  keyframes={["opacity: 1", "opacity: 0"]}
                  iterationCount="1"
                >
                   <div className='progressbar-wrapper'>
                    <p>{item.skillsName}</p>
                   
                    <Line
                      percent={parseFloat(item.percentage)}
                      strokeWidth='2'
                      strokeColor="var(--yellow-theme-main-color)"
                      trailWidth="2"
                      strokeLinecap='square' 
                    />
                  </div>
                </AnimateKeyframes>
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
