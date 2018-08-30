import { Form, Icon, Input, Button, Checkbox } from 'antd';
import ReactDOM from 'react-dom';
import React from 'react';

const FormItem = Form.Item;

class PlanAFlight extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
   return
  }

  render() {
    // const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
          <h1>Plan a Flight</h1>
        <FormItem>        
            <Input prefix={<Icon type="frown" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="To" />
        </FormItem>
        <FormItem>
            <Input prefix={<Icon type="meh" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="From" />
        </FormItem>
        <FormItem>
            <Checkbox>Remember me</Checkbox>
            Forgot password<br/>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or register now!
        </FormItem>
      </Form>
    );
  }
}

export default PlanAFlight;

// const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

// ReactDOM.render(<WrappedNormalLoginForm />, mountNode);