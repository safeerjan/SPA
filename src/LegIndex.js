import React, { Component } from 'react';
import { Layout, Tabs } from 'antd';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Leg from './Leg';
import './OfferList.css';
import store from './store'

const { Header, Content } = Layout;
const TabPane = Tabs.TabPane;

class LegIndex extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout className="main-div">
          <Header className="title">EMPPTY LEG COMPONENT</Header>
          <Content className="content">
            <Leg />
          </Content>
        </Layout>
      </Provider >
    );
  }
}

export default LegIndex;
