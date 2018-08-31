import React, { Component } from 'react';
import { Card, Icon, Button } from 'antd';
import { connect } from 'react-redux';
import moment from 'moment';
import japan from './Flag_of_Japan.svg';
import china from './China_Flag.png';
import Leg from './Leg';

const getFlag = (fileName) => {
  const flag = require(`./images/${fileName}`);
  return flag;
};

class Details extends Component {

  render() {
    const { selectedOffer } = this.props;
    // console.log("-------------DETAIL----------------",selectedOffer);
    const start = moment(selectedOffer.validFrom).format('DD-MMM-YYYY');
    const end = moment(selectedOffer.validTo).format('DD-MMM-YYYY');
    return (
      <div className="card-one">
        {!selectedOffer.AirportIcao && 
          <Card>
            <h2>Please select an offer to display</h2>
          </Card>
        }
        {
          selectedOffer.AirportIcao && <Card style={{ width: "100%" }}>
          <div>
            <div className="flight-date">
              <Icon type="calendar" style={{ marginRight: "10px" }} />{start} - {end}
              </div>
            <div className="description">
              <div className="airports">
                <div className="airport-image">
                  <img src={getFlag(selectedOffer.flag)} className="flag-style" />
                </div>
                <div>
                    <h2>{selectedOffer.AirportIcao}<small>{`, ${selectedOffer.AirportName}`}</small></h2>
                </div>
              </div>
              <div className="double-arrow">
                <Icon type="arrow-right" />
              </div>
              <div className="airports">
                <h2>Available Now</h2>
              </div>
            </div>
          </div>
          <div className="div-length">
            <hr />
            <div className="airports2">
              VWSH-DOW-DEMO
              </div>
            <hr />
          </div>
          <div className="amount">
            USD $200
            </div>
          <Leg selectedOffer={selectedOffer} />
        </Card>}
      </div>
    );
  }
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(Details);