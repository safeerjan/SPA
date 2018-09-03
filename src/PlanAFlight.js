import { Form, Icon, Input, Button, Checkbox } from 'antd';
import ReactDOM from 'react-dom';
import React from 'react';

import UserCard from './UserCard';
import "./index.css";
import "./PlanAFlight.css";

const FormItem = Form.Item;

class PlanAFlight extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "",
      isData : false,
      aircraftTypeId: "",
      AirportIcao: "",
      tailNumber: "",
      validTo: ""
    };
  }
  
  componentDidMount(){
    this.getDataFromLocalStorage();   
  }

  getDataFromLocalStorage(){
    const data = localStorage.getItem('SelectedOffer');
    const SelectedOfferData = JSON.parse(data);
    
    if (SelectedOfferData) {
      const { selectedOffer } = SelectedOfferData
      this.setState({
        isData : !this.state.isData,
        aircraftTypeId: selectedOffer.aircraftTypeId,
        AirportIcao: selectedOffer.AirportIcao,
        tailNumber: selectedOffer.tailNumber,
        validTo: selectedOffer.validTo
      });    
    } else
      this.setState({value: "Data Not Found!"});
  } 

  render() {
    const {isData, aircraftTypeId, AirportIcao, tailNumber, validTo, value} = this.state;
    return (
      <div style={{padding: 20, backgroundColor: "#E8E8E8"}}>
        <h1 style={{  color: "white", backgroundColor: "gray"}}>FLIGHT INFO</h1>
        <Form className="login-form">
          <h2>{value}</h2>
          { isData && (
            <div>
              <span className="labelStyle">Aircraft Type:</span><span className="labelDataStyle">{aircraftTypeId}</span>
              <br/>
              <span className="labelStyle">Airport:</span><span className="labelDataStyle">{AirportIcao}</span>
              <br/>
              <span className="labelStyle">Tail Number:</span><span className="labelDataStyle">{tailNumber}</span>
              <br/>
              <span className="labelStyle">Valid To:</span><span className="labelDataStyle">{validTo}</span>
              <br/>        
              <h2 id="airportName"></h2>
              <br/>
              <Button type="primary" htmlType="submit" className="login-form-button btnStyle">
                CONFIRM
              </Button>          
            </div>
          )}          
        </Form>
        <UserCard/>
      </div>
    );
  }
}

export default PlanAFlight;