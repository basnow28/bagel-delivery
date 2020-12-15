import React, { Component } from 'react';
import TextField from '../TextField';
import './Contact.css';

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

    render(){
    return(
        <section id="Contact" className="Contact">
            <div className="Contact Left">
                <h1 >Kontakt os</h1>
                <p>
                Vi arbejder ud fra troen på, at de bedste samarbejder kommer af en personlig relation. Det betyder, at vi har et godt kendskab til vores samarbejdspartnere, og at vi ved, hvem vi siger hej til, når vi kommer med friske varer. Fælles for alle er, at de støtter op om en grøn omstilling og gerne vil være med til at gøre en forskel.
                </p>
            </div>
            <div className="Contact Right">
                <form>
                    <field className="Input-Left">
                        <label>Subject</label>
                        <select value={this.state.subject} name="subject" onChange={this.handleChange}>
                            <option value="say-hi">Say hi</option>
                            <option value="o2">Option2</option>
                            <option value="o3">Option3</option>
                            <option value="o4">Option4</option>
                        </select>
                    </field>
                    <TextField fieldClass="Input-Right" label="Company" className='contact-input' name="company" type="text" value={this.state.company}  onChange={this.handleChange} />
                    <TextField fieldClass="Input-Left" label="First Name*" className='contact-input'name="firstName" type="text" value={this.state.firstName}  required onChange={this.handleChange} />
                    <TextField fieldClass="Input-Right" label="Last Name" className='contact-input' name="lastName" type="text" value={this.state.lastName}  onChange={this.handleChange} />
                    <TextField fieldClass="Input-Left" label="Email*"className='contact-input' name="email" type="email" required  value={this.state.email} onChange={this.handleChange}/>
                    <TextField fieldClass="Input-Right" label="Phone" className='contact-input' name="phone" value={this.state.phone} onChange={this.handleChange}/>
                    <field>
                        <label>Your message</label><br/>
                        <textarea type="text" rows="5" cols="92" name="message" className="Message" value={this.state.message} onChange={this.handleChange}/><br/>
                    </field>
                    <field>
                        <label>How often do you need deliveries?</label><br/>
                        <select className="Frequency"  name="frequency" value={this.state.frequency} onChange={this.handleChange}>
                            <option value="dont-know" >Don't know yet</option>
                            <option value="2-3">2-3 times per week </option>
                            <option value="4-5">4-5 times per week </option>
                            <option value="6-7">6-7 times per week </option>
                        </select>
                    </field>
                    <input type="submit" value="Send"/>
                </form>
            </div>
        </section>
    )
    }
}

export default ContactForm