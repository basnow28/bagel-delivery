import { extend } from 'lodash';
import React from 'react';
import './footer.css';

class Footer extends React.Component{
    render(){
        return (
            
                <div className='footer-container'>
                    <div className='logoFooter'>
                        <a href='#'>{this.props.logo}</a>
                    </div>
                    <div className='contact-social-footer'>
                        <div className='contactFooter'>
                            <header>Contact</header>
                            <a href='#' >{this.props.contact.number}</a>
                            <a href='#' >{this.props.contact.email}</a>
                        </div>
                        <div className='socialFooter'>
                            <header>Social</header>
                            {this.props.social.map(s => 
                            <a key = {s.name} href={s.link} >{s.name}<br/></a>
                                )
                            }   
                        </div>
                    </div>
                </div>
            
        )
    }
}

export default Footer;