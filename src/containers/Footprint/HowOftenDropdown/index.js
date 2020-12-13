import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { connect } from 'react-redux'
import selectors from './selectors'
import * as _ from 'lodash'
import './styles.css'

class HowOftenDropdown extends Component {
    state = {

    }

    render() {
        const { options } = this.props;

        return (
            <Dropdown
                options={options}
                onChange={this.props.onChange}
                value={_.get(options, '0')}
                controlClassName='dropdown'
                placeholderClassName='dropdown-placeholder'
                menuClassName='dropdown-menu'
            />
        )
    }

}

export default connect(selectors)(HowOftenDropdown)