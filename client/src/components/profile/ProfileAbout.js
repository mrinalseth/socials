import React from 'react'
import "./Skill.css"

const ProfileAbout = (props) =>{
    return (
      <div className="skill">
        {props.profile.skills.map((skill) => {
          return(
            <div key={skill} class="card" data-tilt data-tilt-scale="0.95" data-tilt-startY="40">
              <div class="year">
                <div>{skill}</div>
              </div>  
            </div>
          )
        })}
      </div>
    )
}

export default ProfileAbout