import {Routes, Route, useLocation} from 'react-router-dom';
import './App.scss';
import Home from './containers/home/Index';
import About from './containers/about/Index';
import Resume from './containers/resume/Index';
import Skills from './containers/skills/Index';
import Portfolio from './containers/portfolio/Index';
import Contact from './containers/contact/Index';
import Navbar from './components/navBar/Index';
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import usePartickesOptions from './partickesOptions';



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
  const options = usePartickesOptions();
  if (init) {
    return (
      <div className='App'>
        {
          <Particles
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
};

export default App;
