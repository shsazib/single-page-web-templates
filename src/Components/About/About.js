import React from 'react';
import './AboutStyle.css';
import Img1 from './Image/doctor-img-1.jpg';
import Img2 from './Image/doctor-img-2.png';



const About = () => {
  return (
    <>
      <div className="about-container row g-5" id='about'>
        <div className='image col-md-6 '>
          <img className='rounded d-grid justify-content-center' src={Img1} alt="Img1" />
        </div>
        <div className='col-md-6 d-grid align-items-center'>
          <div>
            <h1>Lorem ipsum dolor sit.</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas alias fuga consequatur qui cupiditate suscipit?</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>

      <div className="about-container row g-5">
        <div className='col-md-6 d-grid align-items-center'>
          <div className='contant'>
            <h1>Lorem ipsum dolor sit.</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas alias fuga consequatur qui cupiditate suscipit?</p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div className='image col-md-6 '>
          <img className='rounded' src={Img2} alt="Img2" />
        </div>
      </div>
    </>
  )
}

export default About;