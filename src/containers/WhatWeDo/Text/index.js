import React from 'react';
import './text.css';


class Text extends React.Component{
    render() {
        return (
            <section className='text-container'> 
                <header className='textHeader'>{this.props.header}</header>
                <div className='textBody'>
                    <p className='noMarginAndPadding'>{this.props.textBody}</p>
                </div>
                <div className='textBody'>
                    <p className='noMarginAndPadding'>{this.props.textBody2}</p>
                </div>
            </section>
    )}
}

export default Text;