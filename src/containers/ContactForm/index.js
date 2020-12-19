import React, { Component } from 'react';
import TextField from '../../components/TextField';
import './Contact.css';
import selectors from './selectors';
import { connect } from 'react-redux';
import * as actions from './actions'
import TextArea from '../../components/TextArea';
import ContactDropdown from '../../components/ContactDropdown';

class ContactForm extends React.Component {
    
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            subject : "say-hi",
            company : "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
            frequency: "dont-know",
        }
    }

    handleChange(event) {
        console.log(event.target.value);
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    componentDidMount(){
        if (this.props.lang) {
            this.props.setLanguage(this.props.lang);
        }
        this.props.onInit();
    }

    render(){
        const {tags, frequencyOptions, subjectOptions} = this.props;
    return(
        <section id="Contact" className="Contact">
            <div className="Contact Left">
                <h1>{tags.header}</h1>
                <p>{tags.paragraph}</p>
            </div>
            <div className="Contact Right">
                <form>
                    <ContactDropdown label={tags.subject} fieldClassName="Input-Left" name="subject" value={this.state.subject} onChange={this.handleChange} options={subjectOptions}/>
                    <TextField fieldClass="Input-Right" label={tags.company} className='contact-input' name="company" type="text" value={this.state.company}  onChange={this.handleChange} />
                    <TextField fieldClass="Input-Left" label={tags.firstName} className='contact-input'name="firstName" type="text" value={this.state.firstName}  required onChange={this.handleChange} />
                    <TextField fieldClass="Input-Right" label={tags.lastName} className='contact-input' name="lastName" type="text" value={this.state.lastName}  onChange={this.handleChange} />
                    <TextField fieldClass="Input-Left" label={tags.email}className='contact-input' name="email" type="email" required  value={this.state.email} onChange={this.handleChange}/>
                    <TextField fieldClass="Input-Right" label={tags.phone} className='contact-input' name="phone" value={this.state.phone} onChange={this.handleChange}/>
                    <TextArea label={tags.msg} type="text" rows="5" cols="92" name="message" className="Message" value={this.state.message} onChange={this.handleChange}/>
                    <ContactDropdown label={tags.frequency} selectClassName="Frequency" name="frequency" value={this.state.frequency} onChange={this.handleChange} options={frequencyOptions}/>
                    <input type="submit" value={tags.send}/>
                </form>
            </div>
        </section>
    )
    }
}

export default connect(selectors, actions)(ContactForm);