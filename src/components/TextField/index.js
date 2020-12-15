import React, { Component } from 'react';
import '../ContactForm/Contact.css';

const TextField = props => {

    return(
        <field className={props.fieldClass}>
            <label>{props.label}</label>
            <input {...props}/>
        </field>           

    )

}

export default TextField