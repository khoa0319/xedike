import React, { Component } from 'react';
import Modal from './Modal';

class TripItem extends Component {
	render() {
		const trip = this.props.trip;
		return (
			<div className="col-md-4">
				<div className="card">
					<img className="card-img-top" src={trip.carImage} alt="xe di" width="240" height="280" />
					<div className="card-body">
						<h4 className="card-title">{trip.from} đến {trip.to}</h4>
						<p className="card-text">{trip.price} VND</p>

						<button
							className="btn btn-info"
							data-toggle="modal"
							data-target={`#modal_${this.props.trip.id}`}
							>Chi Tiet</button>



						<Modal trip={trip} />
					</div>
				</div>
			</div>
		);
	}
}

export default TripItem;