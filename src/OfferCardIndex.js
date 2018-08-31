import React, { Component } from 'react';
import { Layout, Tabs } from 'antd';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

// import OfferCard from './OfferCard';
import Details from './Details';
// import PlanAFlight from './PlanAFlight';
// import Leg from './Leg';
import { oneWaysMock } from './mocks/quoteMocks';
import './OfferList.css';
import reducer from './reducer';
import store from './store'

const { Header, Content } = Layout;
const TabPane = Tabs.TabPane;

class OfferCardIndex extends Component {
  render() {
    return (

      <Provider store={store}>
        {/*<Router>
          <Switch>
            <Route path="/" component={OfferCard} />
            <Route path="./Details" component={Details} />
            <Route path="./PlanAFlight" component={PlanAFlight} />
            <Redirect to="/" />
          </Switch>
        </Router>*/}
        <Layout className="main-div">
          <Header className="title">OFFERS</Header>
          <Content className="content">
            <Tabs defaultActiveKey="1" className="tabs">
              {/*<TabPane tab="One Way Oppurtunities" key="1">
                <OfferCard oneWays={oneWaysMock} />
              </TabPane>*/}
              <TabPane tab="Empty Legs" key="1">
                <Details/>
              </TabPane>
              {/*<TabPane tab="Plan" key="3">
                <PlanAFlight />
              </TabPane>
              <TabPane tab="Leg" key="4">
                <Leg />
              </TabPane>*/}
            </Tabs>
          </Content>
        </Layout>
      </Provider >
    );
  }
}

export default OfferCardIndex;