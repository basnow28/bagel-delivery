import React, { Component } from 'react'
import { connect } from 'react-redux'
import selectors from './selectors'
import './footprint.css'
import LocationSearchInput from './LocationSearchInput';
import HowOftenDropdown from './HowOftenDropdown';
import * as _ from 'lodash'
import { calculateCarbonEmmission, calculateDistance } from './utils';

class Footprint extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pickup_address: '',
            pickup_address_lat_lng: '',
            dropoff_address: '',
            dropoff_address_lat_lng: '',
            how_often_days: '',
            distance: 0,
            co2: ''
        }
    }

    setPickUpAddress = address => {
        this.setState({ pickup_address: address });
    };

    setPickUpAddressLatLng = latLng => {
        this.setState({ pickup_address_lat_lng: latLng })
    }

    setDropOffAddress = address => {
        this.setState({ dropoff_address: address });
    };

    setDropOffAddressLatLng = latLng => {
        this.setState({ dropoff_address_lat_lng: latLng })
    }

    setHowOften = days => {
        this.setState({ how_often_days: days })
    }

    calculateDistance = () => {
        const distance = calculateDistance(
            _.get(this, 'state.pickup_address_lat_lng.lat'),
            _.get(this, 'state.pickup_address_lat_lng.lng'),
            _.get(this, 'state.dropoff_address_lat_lng.lat'),
            _.get(this, 'state.dropoff_address_lat_lng.lng')
        )
        this.setState({ distance: distance });
        console.log(calculateCarbonEmmission(distance))
    }


    render() {
        const { tags, topPicture } = this.props;
        return (
            <div className='footprint-container'>
                <img className='footprint-image' src={topPicture} />
                <h1>{tags.title}</h1>
                <p>{tags.subtitle}</p>
                <div className='form'>
                    <LocationSearchInput
                        handleChange={this.setPickUpAddress}
                        address={this.state.pickup_address}
                        style={{ marginBottom: '15px' }}
                        placeholder={tags.pickupPlaceholder}
                        label={tags.pickupTitle}
                        setLatLng={this.setPickUpAddressLatLng} />
                    <LocationSearchInput
                        handleChange={this.setDropOffAddress}
                        address={this.state.dropoff_address}
                        style={{ marginBottom: '15px' }}
                        placeholder={tags.pickupPlaceholder}
                        label={tags.dropOffTitle}
                        setLatLng={this.setDropOffAddressLatLng} />
                    <label style={{ marginBottom: '10px' }}>{tags.howOften}</label>
                    <HowOftenDropdown
                        onChange={this.setHowOften}
                    />
                    <button
                        className='calculate-button'
                        onClick={this.calculateDistance}
                        style={{marginTop:'30px'}}
                    >
                        {tags.calculate}
                    </button>
                </div>
                <p>{tags.savings}{this.state.co2}{tags.co2}</p>
            </div>
        )
    }
}

export default connect(selectors)(Footprint)