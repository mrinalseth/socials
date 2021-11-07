import React from 'react'
import classnames from 'classnames'
 

function TextWithIcon(props)
{

    const style = {
      input: {
        width: "100%",
        color: 'rgb(38, 50, 56)',
        fontWeight: "700",
        fontSize: "14px",
        letterSpacing: "1px",
        background: "rgba(136, 126, 126, 0.04)",
        padding: "10px 20px",
        border: "none",
        borderRadius: "20px",
        outline: "none",
        boxSizing: "border-box",
        border: "2px solid rgba(0, 0, 0, 0.02)",
        textAlign: "center",
        marginBottom: "27px",
      }
    }

    return(
        <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className={props.icon}></i>
          </span>
        </div>
        {
        <input 
        style={style.input}
        type={props.type} 
        className={classnames('form-control form-control-lg',{
                'is-invalid':props.errors
            })} 
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        onChange={props.onChange}/>
        }
        {props.errors && (<div className='invalid-feedback'>
        {props.errors}
        </div>)}
        </div>
    )
    
}

export default TextWithIcon;