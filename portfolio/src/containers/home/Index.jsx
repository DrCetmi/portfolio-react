import React from 'react'
import './styles.scss'
import { useNavigate } from 'react-router-dom'
import { Animate } from 'react-simple-animate'
import TypedText from './TypedText'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();
  const handleNavigateToContactMePAge = () => {
    navigate("/contact");
  }


  return (
   <section id='home' className='home'>
    <div className='home__text-wrapper'>
      <h1>Durmus Cetmi</h1>
      <p>Ich bin {' '}
        <TypedText
          items={['Full-stack Developer', 'Designer']} 
          delay={150} 
        />
      </p>
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
    <Animate play duration={1.5} delay={1} start={{ transform : 'translateY(550px)' }} end={{ transform : 'translatex(0px)' }}>
    <div className='social-icons'>
        <FaGithub className="icon github-icon" onClick={handleNavigateToContactMePAge} size={40} />
        <FaLinkedin className="icon linkedin-icon" size={40} />
    </div>
</Animate>
    <div className='home__img-home'>
    <img src={require('./homepage.png')}/>
    </div>

    
    

   </section>
  )
}

export default Home;
