import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store, { history } from './store';

import { Route} from 'react-router';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter } from 'react-router-redux';

const route = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App}></Route>
    </ConnectedRouter>
  </Provider>
) 
ReactDOM.render(route,
  document.getElementById('root')
);
registerServiceWorker();