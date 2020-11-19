import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import selectors from './selectors'
import * as actions from './actions'
import * as _ from 'lodash'

const Dashboard = props => {
    useEffect(() => {
        props.onInit()
    }, [])

    console.log(props.content)
    return(
        <div>
            <h1>This is a dashboard!</h1>
        </div>
    )
}

export default connect(selectors, actions)(Dashboard);