import { extend } from 'lodash';
import React from 'react';

class Footer extends React.Component{
    render(){
        return (
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='logoFooter col-lg-6 col-md-12'>
                            <a href='#'>{this.props.logo}</a>
                        </div>
                        <div className='contactFooter col-lg-3 col-md-6'>
                            <header>Contact</header>
                            <a href='#' >{this.props.contact.number}</a><br/>
                            <a href='#' >{this.props.contact.email}</a>
                        </div>
                        <div className='socialFooter col-lg-3 col-md-6'>
                            <header>Social</header>
                            {this.props.social.map(s => 
                                <a key = {s.name} href={s.link} >{s.name}<br/></a>
                                )
                            }
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;