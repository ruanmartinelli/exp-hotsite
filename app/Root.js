import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Footer from './containers/Footer';
import Navbar from './containers/Navbar';
import Signup from './containers/Signup';

const Root = () =>
  <div>
    <Navbar />
    <Signup />
    <Switch>
      <Route path="/" exact component={() => <h2>step4</h2>} />
      <Route path="/step1" exact component={() => <h2>step1</h2>} />
      <Route path="/step2" exact component={() => <h2>step2</h2>} />
      <Route path="/step3" exact component={() => <h2>step3</h2>} />
      <Route path="/step4" exact component={() => <h2>step4</h2>} />
    </Switch>
    <Footer />
  </div>;

export default Root;
