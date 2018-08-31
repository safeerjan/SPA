import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, Button } from 'antd';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


import { selectOffer } from './actions';
import Details from './Details';
import { oneWaysMock } from './mocks/quoteMocks';

import NEXT_ARROW from './images/NextArrow.svg';

import './OfferList.css';

const getFlag = (fileName) => {
	const flag = require(`./images/${fileName}`);
	return flag;
};

class OfferCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			details: false,
			redirect: false 
		}
	}


 
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

	render() {
		const { selectedOffer } = this.props.selectedOffer;
		return (
			<div className="main-div">
				{!this.state.details && oneWaysMock.map(oneWay => (
					<Card>
						<div className="card-div">
							<div className="aircraft">
								<h2>{oneWay.aircraftTypeId}</h2>
								<div className="grey">Operated By</div>
								<div className="grey">{oneWay.operatingCompanyName}</div>
							</div>
							<Row className="airport" type="flex" align="middle">
								<Col span={3}>From</Col>
								<Col span={3}><img src={getFlag(oneWay.flag)} className="flag-style" /></Col>
								<Col span={8}>
									<h2>{oneWay.AirportIcao}</h2>
									<h3>{oneWay.AirportName}</h3>
								</Col>
								<Col span={4}><img src={NEXT_ARROW} /></Col>
								<Col span={6}><h3>Available Now</h3></Col>
							</Row>
							<div className="offer-request">
								<Button type="primary" onClick={() => this.props.selectOffer(oneWay)} >Show Details</Button>
							</div>
						</div>
					</Card>
				))}
				<Button className="load-btn">Load More</Button>
			</div>
		);
	}
}

OfferCard.propTypes = {
	oneWays: PropTypes.object,
};

const mapStateToProps = (state) => {
	return state
}

const mapDispatchToProps = (dispatch) => {
	return {
		selectOffer: (offer) => dispatch(selectOffer(offer))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferCard);