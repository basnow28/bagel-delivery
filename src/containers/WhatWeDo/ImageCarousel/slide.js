import React from 'react';
import landingData from 'C:/Users/Dagmara/Desktop/Sem3/SoftwareDev2/final project/bagel-delivery/src/containers/WhatWeDo/ImageCarousel/data.js';

class Slide extends React.Component {
    constructor(props) {
      super(props);
      this.state = {landing: landingData};
    }render() {
      return(
        <section>
        {
          landingData.map((s, index) => (
            <div className={
              index === this.props.activeIndex ? 'active' : 'inactive'}
              key={index}>
                <h1>{s.title}</h1>
                <p>{s.description}</p>
            </div>
          ) )}
          </section>
      )
    }
  }
  export default Slide;
