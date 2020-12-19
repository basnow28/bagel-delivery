import React, { Component } from 'react';
import '../../containers/ContactForm/Contact.css';

const TextArea = props => {

    return(       
        <field>
            <label>{props.label}</label><br/>
            <textarea {...props}/><br/>
        </field>
    )

}

export default TextArea