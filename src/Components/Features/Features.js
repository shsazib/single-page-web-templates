import React from 'react';
import './FeaturesStyle.css';
import FeaturesAPI from './FeaturesAPI';
import { CgCheckO } from "react-icons/cg";

const Features = () => {
  return (
    <>
      <div className="feature" id='features'>
        <div className="all-features">
          {
            FeaturesAPI.map((curElm, ind) => {
              return (
                <div className="features" key={ind}>
                  <CgCheckO className='icon' />
                  <p>{curElm.desc}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Features;