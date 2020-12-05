import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import selectors from './selectors'
import * as actions from './actions'
import * as _ from 'lodash'
import { RichText } from 'prismic-reactjs'


import Footer from './../Footer/Footer.js';
import Text from './../WhatWeDo/Text.js';
import Carousel from './../WhatWeDo/ImageCarousel/DemoCarousel.js';
import Slider from './../WhatWeDo/ImageCarousel/slide.js'
import SlideCarousel from './../WhatWeDo/ImageCarousel/SlideCarousel.js';

const Dashboard = props => {
    useEffect(() => {
        props.onInit()
    }, [])

    console.log(props.content)
    return(
        <div>
                <Text header='What we do' textBody=
                "København er en lille storby, og selvom vi er mere end en million indbyggere, så er afstanden fra
                yderpunkterne mindre end 10 kilometer. Dét, kombineret med byens fantastiske infrastruktur, gør 
                cyklen til det mest oplagte transportmiddel – også når det kommer til levering af mindre varer."
                textBody2="
                Onward Delivery er skabt ud fra drømmen om, at det skal være lettere for caféer og restauranter, 
                der dagligt har brug for friske specialvarer, at vælge bæredygtig levering. Siden vi cyklede vores 
                første rute, er det blevet til godt 41.000 km i alt – det svarer til en tur rundt om jorden. Og lidt til." />
            
                
                <Footer logo='onward delivery' contact={{ number : '+45 5022 2266', email : 'hello@onward.dk'}} 
                social = {[{name: 'Instagram', link : ''}, {name : 'Facebook', link : ''} ]} />

        </div>
        
    )
}

export default connect(selectors, actions)(Dashboard);