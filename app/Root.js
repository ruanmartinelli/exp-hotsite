import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import Footer from './containers/Footer';
import Navbar from './containers/Navbar';
import Signup from './containers/Signup';
import Kit from './containers/Kit';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Navbar />
      <Signup />
      <Footer />
      <Switch>
        <Route path="/" exact component={() => <h2>step4</h2>} />
        <Route path="/step1" exact component={() => <h2>step1</h2>} />
        <Route path="/step2" exact component={() => <h2>step2</h2>} />
        <Route path="/step3" exact component={Kit} />
        <Route path="/step4" exact component={() => <h2>step4</h2>} />
      </Switch>
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Root;
