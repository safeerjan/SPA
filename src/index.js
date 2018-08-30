import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OfferList from './OfferList';
import PlanAFlight from './PlanAFlight';
import registerServiceWorker from './registerServiceWorker';

if(document.getElementById('root')){
    ReactDOM.render(<OfferList />, document.getElementById('root'));
}
if(document.getElementById('root2')){
    ReactDOM.render(<PlanAFlight />, document.getElementById('root2'));
}


registerServiceWorker();
