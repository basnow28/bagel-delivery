import React from 'react'
import { Redirect, Switch } from 'react-router-dom'
import Route from './Route'
import Dashboard from '../containers/Dashboard'
import Navbar from '../containers/Navbar'

/*
    To add a new route to the app, register it here
*/

export default function Routes(){
    return(
        <>
        <Navbar/>
        <Switch>
            <Route path='/en' component={() => <Dashboard lang='en-gb'/>} exact/>
            <Route path='/dk' component={() => <Dashboard lang='da-dk'/>} exact/>
            <Redirect from='/' to='/dk'/>
        </Switch>
        </>
    )
}