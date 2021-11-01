import React from 'react'
import {isEmpty} from '../../validation/isEmpty'
import './ProfileHeader.css'

const ProfileHeader = (props) =>{
    return (

      <div className="profile-card">
   
  <header>
    <img src={props.profile.user.avatar}/>

    <div className="resume">
      <img src="https://bit.ly/3w2xzGm" alt="" />
      <a target="_blank" href={props.profile.cv}>Resume</a>
    </div>
    
    <h1>{props.profile.user.name}</h1>
    
    <h2>{props.profile.status}</h2>

    <div className="profile-bio">
    
    <p>{props.profile.bio}</p>
    
  </div>
    
  </header>
  

  <ul className="profile-social-links">
    {isEmpty(props.profile.website)?null:(
      <li>
        <a className="text-white p-2" href={props.profile.website}>
          <img src="https://bit.ly/3bsnFo7"/>
        </a>
      </li>
    )}
    
    {isEmpty(props.profile.social && props.profile.social.twitter)?null:(
      <li>
        <a className="text-white p-2" href={props.profile.social.twitter}>
          <img src="https://bit.ly/3Cyyz7u"/>
        </a>
      </li>
    )}
    {isEmpty(props.profile.social && props.profile.social.facebook)?null:(
      <li>
      <a className="text-white p-2" href={props.profile.social.facebook}>
        <img src="https://bit.ly/2ZIhf1U"/> 
      </a>
      </li>
    )}
    {isEmpty(props.profile.social && props.profile.social.linkdin)?null:(
      <li>
      <a className="text-white p-2" href={props.profile.social.linkdin}>
        <img src="https://bit.ly/31kIgc6"/> 
      </a>
      </li>
    )}
    {isEmpty(props.profile.social && props.profile.social.instagram)?null:(
      <li>
      <a className="text-white p-2" href={props.profile.social.instagram}>
        <img src="https://bit.ly/3pVzCLf"/>
      </a>
      </li>
    )}
    {isEmpty(props.profile.social && props.profile.social.youtube)?null:(
      <li>
      <a className="text-white p-2" href={props.profile.social.youtube}>
        <img src="https://bit.ly/2ZO3heD"/>
      </a>
      </li>
    )}
    
    
  </ul>
  
</div>
    )
}

export default ProfileHeader