import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OfferList from './OfferList';
import PlanAFlight from './PlanAFlight';
import OfferCardIndex from './OfferCardIndex';
import LegIndex from './LegIndex';
import UserCard from './UserCard';
import registerServiceWorker from './registerServiceWorker';

if(document.getElementById('AppRoot')){
    ReactDOM.render(<OfferList />, document.getElementById('AppRoot'));
}
if(document.getElementById('PlanAFlightRoot')){
    ReactDOM.render(<PlanAFlight />, document.getElementById('PlanAFlightRoot'));
}
if(document.getElementById('OfferCardRoot')){
    ReactDOM.render(<OfferCardIndex />, document.getElementById('OfferCardRoot'));
}
if(document.getElementById('UserCardRoot')){
    ReactDOM.render(<UserCard />, document.getElementById('UserCardRoot'));
}
if(document.getElementById('LegRoot')){
    ReactDOM.render(<LegIndex />, document.getElementById('LegRoot'));
}

registerServiceWorker();
