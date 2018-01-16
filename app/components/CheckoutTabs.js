import React from 'react';
import { Link } from 'react-router-dom';

const tabs = [
  { id: 1, label: '1', uri: 'step1' },
  { id: 2, label: '2', uri: 'step2' },
  { id: 3, label: '3', uri: 'step3' },
  { id: 4, label: '4', uri: 'step4' }
];

const CheckoutTabs = () => (
  <div className="row">
    {tabs.map(tab => (
      <div className={`col-md-${12 / tabs.length} text-center`} key={tab.id}>
        <Link to={tab.uri}>
          {tab.label}
        </Link>
      </div>
    ))}
  </div>
);

export default CheckoutTabs;
