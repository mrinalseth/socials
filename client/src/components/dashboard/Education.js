import React from 'react'
import axios from 'axios'

const Experience = (props) => {
    const handleClick = (id) => {
        axios.delete(`/api/profile/education/${id}`)
        .then(window.location='/dashboard')
    }
    const education = props.education.map(edu => {
        var start = new Date(edu.from).toDateString()
        var end = ""
        if(edu.to) {
            end = new Date(edu.to).toDateString()
        }
        return(
            <div class="table-row">		
				<div class="table-data">{edu.school}</div>
				<div class="table-data">{edu.degree}</div>
				<div class="table-data">{edu.fieldofstudy}</div>
				<div class="table-data">{start} - {end}</div>
                <div className="table-data">
                    <button className='btn btn-danger' onClick={() => {
                            handleClick(edu._id)
                            }} >Delete
                    </button>
                </div>
			</div>
        )
    })
    return(
        <div class="table">
            <div class="table-header">
                <div class="header__item"><a id="name" class="filter__link" href="#">School</a></div>
                <div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">Degree</a></div>
                <div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">Field</a></div>
                <div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">Year</a></div>
                <div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#"></a></div>
            </div>
            <div class="table-content">	
                {education}
            </div>	
	    </div>
    )
}
export default Experience