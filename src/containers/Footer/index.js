
import selectors from './selectors'
import * as actions from './actions'
import { connect } from 'react-redux'
import React from 'react';
import './footer.css';

class Footer extends React.Component{


    
    render(){
        const { tags } = this.props;
        return (
            
                <div className='footer-container'>
                    <div className='logoFooter'>
                        <a href='#'>{tags.logo}</a>
                    </div>
                    <div className='contact-social-footer'>
                        <div className='contactFooter'>
                            <header>{tags.subtitle1}</header>
                            <a href='#'  >{tags.phone}</a>
                            <a href='#' >{tags.email}</a>
                        </div>
                        <div className='socialFooter'>
                            <header>{tags.subtitle1}</header>
                            <a target="_blank" href={tags.facebook} >{tags.social1}</a>
                            <a target="_blank" href={tags.instagram} >{tags.social2}</a> 
                        </div>
                    </div>
                </div>
            
        )
    }
}

export default connect(selectors, actions)(Footer);