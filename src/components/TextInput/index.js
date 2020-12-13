import React from 'react'
import './input.css'

const TextInput = props => {
    return (
        <div className='text-input' style={props.style}>
            <label className='input-label'>{props.label}</label>
            {props.icon ? 
            <div className='input-icon'>
                <input className='text-input-item' type="text" {...props} />
                {props.icon}
            </div> :
                <input className='text-input-item' type="text" {...props} />
            }
        </div>
    )
}

export default TextInput;