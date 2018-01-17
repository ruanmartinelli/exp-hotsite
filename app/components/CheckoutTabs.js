import React from 'react';
import { Link } from 'react-router-dom';

const tabs = [
  { id: 1, label: '1', uri: 'step1', active: false },
  { id: 2, label: '2', uri: 'step2', active: false },
  { id: 3, label: '3', uri: 'step3', active: true },
  { id: 4, label: '4', uri: 'step4', active: false }
];

const CheckoutTabs = () => (
  <div className="row checkout-tabs">
    {tabs.map(tab => (
      <Link to={tab.uri} key={tab.id}>
        <div
          className={`col-md-3 ${tab.active ? 'active-tab' : ''} checkout-tab`}
        >
          {tab.label}
        </div>
      </Link>
    ))}
  </div>
);

export default CheckoutTabs;
