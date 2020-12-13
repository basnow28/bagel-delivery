import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import selectors from './selectors'
import * as actions from './actions'
import * as _ from 'lodash'
import { RichText } from 'prismic-reactjs'
import Footprint from '../Footprint'
import './dashboard.css'
import Navbar from '../Navbar'
import DummyComponent from '../../components/DummyComponent'
import ContactForm from '../../components/ContactForm'


import Footer from './../Footer/Footer.js';
import Text from './../WhatWeDo/Text.js';
import Carousel from './../WhatWeDo/ImageCarousel/DemoCarousel.js';
import Slider from './../WhatWeDo/ImageCarousel/slide.js'
import SlideCarousel from './../WhatWeDo/ImageCarousel/SlideCarousel.js';

const Dashboard = props => {
    useEffect(() => {
        props.onInit() && props.loadImages()
    }, [])

    console.log(props.content)
    return (
        <div className="dashboard-container">
            <h1>This is a dashboard!</h1>
            <DummyComponent name="What we do"></DummyComponent>
            <DummyComponent name="Who we work with"></DummyComponent>
            <Footprint />
            <ContactForm name="Contact"></ContactForm>
                <Footer logo='onward delivery' contact={{ number: '+45 5022 2266', email: 'hello@onward.dk' }}
                    social={[{ name: 'Instagram', link: '' }, { name: 'Facebook', link: '' }]} />
        </div>

    )
}

export default connect(selectors, actions)(Dashboard);