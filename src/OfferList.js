import React, { Component } from 'react';
import { Layout, Tabs } from 'antd';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import OfferCard from './OfferCard';
import Details from './Details';
import PlanAFlight from './PlanAFlight';
import { oneWaysMock } from './mocks/quoteMocks';
import './OfferList.css';
import reducer from './reducer';

const { Header, Content } = Layout;
const TabPane = Tabs.TabPane;
const store = createStore(reducer);

class OfferList extends Component {
  render() {
    return (

      <Provider store={store}>
        <Layout className="main-div">
          <Header className="title">OFFERS</Header>
          <Content className="content">
            <Tabs defaultActiveKey="1" className="tabs">
              <TabPane tab="One Way Oppurtunities" key="1">
                <OfferCard oneWays={oneWaysMock} />
              </TabPane>
              <TabPane tab="Empty Legs" key="2">
                <Details/>
              </TabPane>
              <TabPane tab="Plan" key="3">
                <PlanAFlight />
              </TabPane>
            </Tabs>
          </Content>
        </Layout>
      </Provider >
    );
  }
}

export default OfferList;
