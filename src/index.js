import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OfferList from './OfferList';
import PlanAFlight from './PlanAFlight';
// import OfferCard from './OfferCard';
import OfferCardIndex from './OfferCardIndex';
import Leg from './Leg';
import UserCard from './UserCard';
import registerServiceWorker from './registerServiceWorker';

if(document.getElementById('appRoot')){
    ReactDOM.render(<OfferList />, document.getElementById('appRoot'));
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

// if(document.getElementById('LegRoot')){
//     ReactDOM.render(<Leg />, document.getElementById('LegRoot'));
// }

registerServiceWorker();
