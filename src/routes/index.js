import React from 'react'
import { Redirect, Switch } from 'react-router-dom'
import Route from './Route'
import Dashboard from '../containers/Dashboard/index'
import Navbar from '../containers/Navbar'

/*
    To add a new route to the app, register it here
*/

export default function Routes(){
    return(
        <>
        <Navbar/>
        <Switch>
            <Route path='/en' component={Dashboard} exact/>
            <Route path='/dk' component={Dashboard} exact/>
            <Redirect from='/' to='/dk'/>
        </Switch>
        </>
    )
}