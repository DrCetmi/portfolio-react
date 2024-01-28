import React from 'react'
import './styles.scss'
import { useNavigate } from 'react-router-dom'
import { Animate } from 'react-simple-animate'


const Home = () => {
  const navigate = useNavigate();
  const handleNavigateToContactMePAge = () => {
    navigate("/contact");
  }


  return (
   <section id='home' className='home'>
    <div className='home__text-wrapper'>
      <h1>Durmus Cetmi</h1>
       <h2>
        Full-Stack Developer
       </h2>
     
    </div>
    <Animate play duration={1.5} delay={1}
    start={{
      transform : 'translateY(550px)'
    }}
    ende={{
      transform : 'translatex(0px)'
    }}
    >
    <div className='home__contact-me'>
      <button onClick={handleNavigateToContactMePAge}>Hire Me</button>
    </div>
    
    </Animate>
   
    <div className='home__img-home'>
    <img src={require('./homepage.png')}/>
    </div>
    
    

   </section>
  )
}

export default Home;
