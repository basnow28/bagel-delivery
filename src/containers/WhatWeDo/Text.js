import React from 'react';
import './../../App.css';


class Text extends React.Component{
    render() {
        return (
            <div> 
                <header className='textHeader'>{this.props.header}</header>
                <div className='textBody'>
                    <p className='noMarginAndPadding'>{this.props.textBody}</p>
                    <br></br>
                    <p className='noMarginAndPadding'>{this.props.textBody2}</p>
                </div>
            </div>
    )}
}

export default Text;