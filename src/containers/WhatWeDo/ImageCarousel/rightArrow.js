import React from 'react';

class LeftArrow extends React.Component {
    render() {
      return(
        <div className='backArrow' onClick={this.props.goToNextSlide}>
          <i className='fa fa-angle-right fa-3x' aria-hidden='true'></i>
        </div>
      )
    }
  }export default LeftArrow;