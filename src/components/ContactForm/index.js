import React, { Component } from 'react';
import './Contact.css';

const ContactForm = () => {
    
    return(
        <section id="Contact" className="Contact">
            <div className="Contact Left">
                <h1 >Contact</h1>
                <p>
                Vi arbejder ud fra troen på, at de bedste samarbejder kommer af en personlig relation. Det betyder, at vi har et godt kendskab til vores samarbejdspartnere, og at vi ved, hvem vi siger hej til, når vi kommer med friske varer. Fælles for alle er, at de støtter op om en grøn omstilling og gerne vil være med til at gøre en forskel.
                </p>
            </div>
            <div className="Contact Right">
                <form>
                    <field className="Input-Left">
                        <label>Subject</label>
                        <input/>
                    </field>
                    <field className="Input-Right">
                        <label>Company</label>
                        <input type="text"/>
                    </field>
                    <field className="Input-Left">
                        <label>First name*</label>
                        <input type="text"/>
                    </field>
                    <field className="Input-Right">
                        <label>Last name</label>
                        <input type="text"/>
                    </field>
                    <field className="Input-Left">
                        <label>Email*</label>
                        <input type="email"/>
                    </field>
                    <field className="Input-Right">
                        <label>Phone</label>
                        <input/>
                    </field>
                    <field>
                        <label>Your message</label><br/>
                        <input type="text" className="Message"/><br/>
                    </field>
                    <field>
                        <label>How often do you need deliveries?</label><br/>
                        <input/>
                    </field>
                    <input type="submit" value="Send"/>
                </form>
            </div>
        </section>
    )

}

export default ContactForm