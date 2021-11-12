import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getProfiles} from '../../actions/profileActions'
import Spinner from '../common/Spinner';
import ProfileItem from './ProfileItem'
import './Profiles.css'

const Profiles = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProfiles())
    },[])
    const {profiles, loading} = useSelector(state => state.profile)


    let profileItems

    if(profiles === null || loading){
        profileItems = <Spinner/>
    }else{
        if(profiles.length>0){
            profileItems = <ProfileItem profiles={profiles} />
        }else{
            profileItems = <h4>No profiles found</h4>
        }
    }

    return(
        <div className="profiles">
            <div className="header">Developers Profile</div>
            <div className="profileCard">
                {profileItems}
            </div>
        </div>
    )
}

export default Profiles