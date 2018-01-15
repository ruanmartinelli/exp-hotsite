import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import Root from './Root';
import * as SDKInitializer from './libs/SDKInitializer';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const App = () =>
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Root />
  </Provider>;

ReactDOM.render(<App />, document.querySelector('#app'));

SDKInitializer.initSDKs();
