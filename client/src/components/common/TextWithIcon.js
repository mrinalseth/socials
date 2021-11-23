import React from 'react'
import classnames from 'classnames'
import './TextWithIcon.css'
 

function TextWithIcon(props)
{


    return(
        <div className="input-group">
        <input
        type={props.type} 
        className={classnames('form-control form-control-lg',{
                'is-invalid':props.errors
            })} 
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        onChange={props.onChange}/>
        
        {props.errors && (<div className='invalid-feedback'>
        {props.errors}
        </div>)}
        </div>
    )
    
}

export default TextWithIcon;