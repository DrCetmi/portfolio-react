import {Routes, Route, useLocation} from 'react-router-dom';
import './App.scss';
import Home from './containers/home/Index';
import About from './containers/about/Index';
import Resume from './containers/resume/Index';
import Skills from './containers/skills/Index';
import Portfolio from './containers/portfolio/Index';
import Contact from './containers/contact/Index';
import Navbar from './components/navBar/Index';
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 



function App() {
  const location = useLocation();
  console.log(location);
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const particlesLoaded = (container) => {
    console.log(container);
  };
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#1d1d1d",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffdd40",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );
  const renderParticleJsInHomePage = location.pathname === "/";
  if (init) {
    return (
      <div className='App'>
        {
          renderParticleJsInHomePage &&  <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        }
          <Navbar/>
          <div className='App__main-page-content'>
          <Routes>
              <Route index path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path='/resume' element={<Resume/>} />
              <Route path='/skills' element={<Skills/>} />
              <Route path='/portfolio' element={<Portfolio/>} />
              <Route path='/contact' element={<Contact/>} />
          </Routes>
          </div>
          </div>
    );
  }

  return <></>;
};

export default App;
