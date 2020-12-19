import React, { Component } from 'react';
import '../../containers/ContactForm/Contact.css';

const ContactDropdown = props => {

    return(       
        <field className={props.fieldClassName}>
            <label>{props.label}</label>
            <select className={props.selectClassName} value={props.value} name={props.name} onChange={props.onChange}>
                {props.options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </field>
    )

}

export default ContactDropdown