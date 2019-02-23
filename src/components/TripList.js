import React, { Component } from 'react';
import TripItem from './TripItem';
import data from '../data';
class TripList extends Component {
    render() {
        console.log(data);
        const tripElement = data.map((trip, index) => {
            return <TripItem key={index}
            trip={trip}
            />
        });
        return (
            <div className="container">
                <h1>Danh Sách Chuyến Đi</h1>
                <div className="row">
                    {tripElement}
                </div>
            </div>
        );
    }
}

export default TripList;