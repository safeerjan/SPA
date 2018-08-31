import { Form, Icon, Input, Button, Checkbox } from 'antd';
import ReactDOM from 'react-dom';
import React from 'react';

import UserCard from './UserCard';
import "./PlanAFlight.css";

const FormItem = Form.Item;

class PlanAFlight extends React.Component {


  componentDidMount(){
    this.getDataFromLocalStorage();   
  }

  // syncLocalDataToAppData(){
  //   setTimeout(() => this.getDataFromLocalStorage(),1000);
  // }

  getDataFromLocalStorage(){
    const data = localStorage.getItem('SelectedOffer');
    const SelectedOfferData = JSON.parse(data)
    // console.log("-----componentDidMount-------------------------------------",SelectedOfferData);
    if (SelectedOfferData) {
      const aircraftTypeId = SelectedOfferData.selectedOffer.aircraftTypeId;
      const AirportIcao = SelectedOfferData.selectedOffer.AirportIcao;
      const tailNumber= SelectedOfferData.selectedOffer.tailNumber;
      const validTo = SelectedOfferData.selectedOffer.validTo;

      document.getElementById('aircraftTypeId').innerHTML = aircraftTypeId;
      document.getElementById('AirportIcao').innerHTML = AirportIcao;
      document.getElementById('tailNumber').innerHTML = tailNumber;
      document.getElementById('validTo').innerHTML = validTo;
    } else
      document.getElementById('status').innerHTML = "Data Not Found!";
  }

  handleSubmit = (e) => {
    e.preventDefault();
   return
  }

  render() {
    // const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <h1><u>Flight Details</u></h1>
        <h2 id="status"></h2>
        <span className="labelStyle">Aircraft Type:</span><span id="aircraftTypeId" className="labelDataStyle"></span>
        <br/>
        <span className="labelStyle">Airport:</span><span id="AirportIcao" className="labelDataStyle"></span>
        <br/>
        <span className="labelStyle">Tail Number:</span><span id="tailNumber" className="labelDataStyle"></span>
        <br/>
        <span className="labelStyle">Valid To:</span><span id="validTo" className="labelDataStyle"></span>
        <br/>        
        <h2 id="airportName"></h2>
        <br/>
        <Button type="primary" htmlType="submit" className="login-form-button btnStyle">
          CONFIRM
        </Button>
        <UserCard/>
     </Form>
    );
  }
}

export default PlanAFlight;

// const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

// ReactDOM.render(<WrappedNormalLoginForm />, mountNode);