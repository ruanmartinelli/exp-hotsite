import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import Navbar from './containers/Navbar';
import Footer from './containers/Footer';
import KitForm from './containers/KitForm';
import CheckoutTabs from './components/CheckoutTabs';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Navbar />
      <div className="container">
        <CheckoutTabs />
        <Switch>
          <Route path="/" exact component={KitForm} />
          <Route path="/step1" exact component={() => <h2>TODO: Step 1</h2>} />
          <Route path="/step2" exact component={() => <h2>TODO: Step 2</h2>} />
          <Route path="/step3" exact component={KitForm} />
          <Route path="/step4" exact component={() => <h2>TODO: Step 4</h2>} />
        </Switch>
      </div>
      <Footer />
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Root;
