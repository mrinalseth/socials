import React from 'react'
import { useSelector } from 'react-redux'
import {isEmpty} from '../../validation/isEmpty'
import {Link} from 'react-router-dom'
import './ProfileItem.css'

const ProfileItem = (props) => {
    return(
        <div className='profileContainer'>
            {props.profiles.map((profile) => {
                return (
                    <div className='profileCard'>
                        <div className="left">
                            <img src={profile.user.avatar} alt="" />
                            <div className="details">
                                <div className="name">{profile.user.name}</div>
                                <div className="handle">{profile.handle}</div>
                                <div className="status">{profile.status}</div>
                            </div>
                        </div>
                        <div className="right">
                        <Link style={{textDecoration:"none"}} to={`/profile/${profile.handle}`} className="btn">
                            <p>View Profile</p>
                        </Link>
                        </div>
                    </div>
                )
            })}
        </div>
            
    )
}

export default ProfileItem