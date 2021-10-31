import React from 'react'
import axios from 'axios'
import './Exp.css'

const Experience = (props) => {

    const handleClick = (id) => {
        axios.delete(`/api/profile/experience/${id}`)
        .then(window.location='/dashboard')
    }
    const experience = <div className="experience">
        {props.experience.map(exp => {
        var start = new Date(exp.from).toDateString()
        var end = ""
        if(exp.to) {
            end = new Date(exp.to).toDateString()
        }
        return(
            <div class="table-row">		
				<div class="table-data">{exp.company}</div>
				<div class="table-data">{exp.title}</div>
				<div class="table-data">{start} - {end}</div>
                <div className="table-data">
                    <button className='btn btn-danger' onClick={() => {
                            handleClick(exp._id)
                            }} >Delete
                    </button>
                </div>
			</div>
        )
    })}
    </div>
    return(
        <div class="table">
		<div class="table-header">
			<div class="header__item"><a id="name" class="filter__link" href="#">Company</a></div>
			<div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">Title</a></div>
			<div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">Year</a></div>
			<div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#"></a></div>
		</div>
		<div class="table-content">	
            {experience}
		</div>	
	</div>
    )
}

export default Experience