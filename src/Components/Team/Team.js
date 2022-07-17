import React from 'react';
import './TeamStyle.css';
import TeamAPI from './TeamAPI';

const Team = () => {
  return (
    <>
      <div className="full-team" id='team'>
        <div className="team">
          <h1>Our Team</h1>
          <div className="team-cards">
            {TeamAPI.map((curElm) => {
              return (
                <div className="team-card" key={curElm.id}>
                  <img src={curElm.img} alt="img" />
                  <h2>{curElm.name}</h2>
                  <p>{curElm.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Team;