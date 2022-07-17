import React from 'react';
import "./HomeStyle.css";
import NavBar from '../NavBar/NavBar';
import About from '../About/About';
import Team from '../Team/Team';
import Features from '../Features/Features';
import Contacts from '../Contacts/Contacts';

const Home = () => {
  return (
    <>
      <NavBar />

      <div className="home" id='home'>
        <div className="home-body">
          <div>
            <h1>Lorem ipsum dolor <br /> sit amet.</h1>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam, in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, natus.</h5>
          </div>
        </div>
      </div>

      <About />
      <Team />
      <Features />
      <Contacts />
    </>
  )
}

export default Home;