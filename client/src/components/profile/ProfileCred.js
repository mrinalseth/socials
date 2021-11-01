import React from 'react'

const ProfileCred = (props) =>{
    return (
        <div className="row">
            <div className="col-md-6">
              <h3 className="text-center text-info"><i class="fas fa-briefcase"></i>Experience</h3>
              <ul className="list-group">
                {props.profile.experience.map((exp) => {
                    return(
                        <li key={exp._id} className="list-group-item">
                            <h4>{exp.company}</h4>
                            <p>{exp.from}</p>
                            <p>
                                <strong>Position:</strong> {exp.title}
                            </p>
                            <p>
                                <strong>Description: </strong>{exp.description}</p>
                        </li>
                    )
                })}
              </ul>
            </div>
            <div className="col-md-6">
              <h3 className="text-center text-info"><i class="fas fa-graduation-cap"></i>Education</h3>
              <ul className="list-group">
                {props.profile.education.map((education) => {
                    return(
                        <li key={education._id} className="list-group-item">
                            <h4>{education.school}</h4>
                            <p>{education.from}</p>
                            <p>
                                <strong>Degree: </strong>{education.degree}
                            </p>
                            <p>
                                <strong>Field Of Study: </strong>{education.fieldofstudy}
                            </p>
                                <p>
                            <strong>Description:</strong> {education.description}</p>
                        </li>
                    )
                })}
              </ul>
            </div>
          </div>
    )
}

export default ProfileCred