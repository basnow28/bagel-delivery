import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import selectors from './selectors'
import * as actions from './actions'
import * as _ from 'lodash'
import { RichText } from 'prismic-reactjs'
import Footprint from '../Footprint'
import './dashboard.css'

const Dashboard = props => {
    useEffect(() => {
        props.onInit() && props.loadImages()
    }, [])

    console.log(props.content)
    return(
        <div className='dashboard-container'>
            <Footprint />
        </div>
    )
}

export default connect(selectors, actions)(Dashboard);