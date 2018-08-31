import React, { Component } from 'react';
import { Layout, Tabs } from 'antd';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Details from './Details';
import { oneWaysMock } from './mocks/quoteMocks';
import './OfferList.css';
import store from './store'

const { Header, Content } = Layout;
const TabPane = Tabs.TabPane;

class OfferCardIndex extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout className="main-div">
          <Header className="title">OFFERS LIST</Header>
          <Content className="content">
            <Details/>
          </Content>
        </Layout>
      </Provider >
    );
  }
}

export default OfferCardIndex;
