import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import selectors from './selectors'
import * as actions from './actions'
import * as _ from 'lodash'
import { RichText } from 'prismic-reactjs'
import Navbar from '../Navbar'
import DummyComponent from '../../components/DummyComponent'
import ContactForm from '../../components/ContactForm'
import './Dashboard.css';

const Dashboard = props => {
    useEffect(() => {
        props.onInit()
    }, [])

    console.log(props.content)
    return(
        <div className="Dashboard">
            <h1>This is a dashboard!</h1>
            <DummyComponent name = "What we do"></DummyComponent>
            <DummyComponent name = "Who we work with"></DummyComponent>
            <ContactForm/>
            <DummyComponent name = "1"></DummyComponent>
            <DummyComponent name = "2"></DummyComponent>
            <DummyComponent name = "3"></DummyComponent>
           
        </div>
    )
}

export default connect(selectors, actions)(Dashboard);