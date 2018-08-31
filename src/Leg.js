import React, { Component } from 'react';
import { Card, Icon, Row, Col } from 'antd';
import moment from 'moment';
import { connect } from 'react-redux';

// import { Link } from 'react-router-dom';
import './Leg.css';
import japan from './Flag_of_Japan.svg';
import china from './China_Flag.png';
import globalPlane from './images/global.jpg';

const getFlag = (fileName) => {
    const flag = require(`./images/${fileName}`);
    return flag;
};

class Leg extends Component {
    render() {
        const { selectedOffer } = this.props;
        const start = moment(selectedOffer.validFrom).format('DD-MMM-YYYY');
        const end = moment(selectedOffer.validTo).format('DD-MMM-YYYY');
        return (
            <Card className="itenary-card">
                <Row>
                    <Col span={24}>
                        <div className="flight-itenary">
                            <div>
                                <Icon type="calendar" style={{ marginRight: "10px" }} />
                                {start} - {end}
                            </div>
                            <div>
                                <Icon type="clock-circle-o" style={{ marginRight: "10px" }} />
                                4:35
                            </div>
                            <div>
                                <Icon type="team" style={{ marginRight: "10px" }} />
                                Passengers: {selectedOffer.availableIn}
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={24} md={24} xs={24} className="airplane-col">
                        <img src={globalPlane} style={{width: '50%', height:'50%'}}/>
                        <h1>{selectedOffer.aircraftTypeId}</h1>
                        <small>Operated By</small>
                        <h2> {selectedOffer.operatingCompanyName}</h2>
                    </Col>
                </Row>
            </Card>
        );
    }
}
const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(Leg);