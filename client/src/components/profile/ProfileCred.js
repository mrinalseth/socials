import React from 'react'
import './ProfileCred.css'

const ProfileCred = (props) =>{
    return (
        <div className="container">
              <h3 className="heading">Experience</h3>
                <div className="expContainer">
                {props.profile.experience.map((exp) => {
                    var start = new Date(exp.from).toLocaleDateString()
                    var end = "Current"
                    if(exp.to) {
                        end = new Date(exp.to).toLocaleDateString()
                    }
                    return(
                        <div key={exp} className="expCard" data-tilt data-tilt-scale="0.95" data-tilt-startY="40">
                            <div class="year">
                                <div><span>Comapny: </span>{exp.company}</div>
                                <div><span>Year: </span>{start} - {end}</div>
                                <div><span>Position: </span>{exp.title}</div>
                                <div><span>Description: </span>{exp.description}</div>
                            </div>  
                        </div>
                    )
                })}
                </div>
            <h3 className="heading">Education</h3>

              <div className="expContainer">
                {props.profile.education.map((edu) => {
                    var start = new Date(edu.from).toLocaleDateString()
                    var end = "Current"
                    if(edu.to) {
                        end = new Date(edu.to).toLocaleDateString()
                    }
                    return(
                        <div key={edu} className="expCard" data-tilt data-tilt-scale="0.95" data-tilt-startY="40">
                            <div class="year">
                                <div><span>School: </span>{edu.school}</div>
                                <div><span>Year: </span>{start} - {end}</div>
                                <div><span>Degree: </span>{edu.degree}</div>
                                <div><span>Field: </span>{edu.fieldofstudy}</div>
                                <div><span>Description: </span>{edu.description}</div>
                            </div>  
                        </div>
                    )
                })}
              </div>
          </div>
    )
}

export default ProfileCred