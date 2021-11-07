import React from 'react'
import classnames from 'classnames'

 
function SelectListGroup(props)
{
    const selectOptions = props.options.map(option => (
        <option key={option.label} value={option.value}>
            {option.label}
        </option>
    ))

    const style = {
        selectInput: {
            width: "100%",
            color: 'rgb(38, 50, 56)',
            fontWeight: "700",
            fontSize: "14px",
            background: "rgba(136, 126, 126, 0.04)",
            padding: "10px 20px",
            border: "none",
            borderRadius: "20px",
            outline: "none", boxSizing: "border-box",
            border: "2px solid rgba(0, 0, 0, 0.02)",
            textAlign: "center",
            marginBottom: "27px",
        }
    }

    return(
        <div>
            <select style={style.selectInput} type={props.type} 
            className={classnames('form-control form-control-lg',{
                    'is-invalid':props.errors
                })}
            name={props.name}
            value={props.value}
            onChange={props.onChange}>
                {selectOptions}
            </select>
        {props.errors && (<div className='invalid-feedback'>
        {props.errors}
        </div>)}
        </div>
    )
    
}

export default SelectListGroup;