import React from 'react';
import './ContactsStyle.css';
import Logo2 from './Image/logo-2.png';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';
import { SiTwitter } from 'react-icons/si';


const Contacts = () => {
  return (
    <>
      <div className="contacts-container" id='contacts'>
        <div className="contacts">
          <div className="demo">
            <img src={Logo2} alt="logo" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, vitae illum. Repellendus, corrupti ea! Ipsum.</p>
            <div className="sIcon">
              <a href="#" className="icon"><BsFacebook /></a>
              <a href="#" className="icon"><FiInstagram /></a>
              <a href="#" className="icon"><SiTwitter /></a>
              <a href="#" className="icon"><BsGithub /></a>
            </div>
            <span>Copyright ©2022 All rights reserved | This template is made with  by 💙 <b><a href="https://shsazib.netlify.app/" target="blank">SH Sazib</a></b></span>
          </div>
          <div className="services">
            <h6>Services</h6>
            <p>Consulting</p>
            <p>Human Resources</p>
            <p>Accounting</p>
            <p>Marketing & SEO</p>
          </div>
          <div className="about">
            <h6>About</h6>
            <p>About us</p>
            <p>Our Services</p>
            <p>Our Blog</p>
            <p>Contact us</p>
          </div>
          <div className="contact">
            <h6>Contact</h6>
            <p>+88012345678</p>
            <p>+88098745632</p>
            <p>shsazibbhuiyan892939@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  )
}


export default Contacts;