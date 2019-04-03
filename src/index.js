import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import App from './App';
import ErrorBoundary from './SharedComponents/ErrorBoundary';

import './main.scss';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BrowserRouter>
          <ErrorBoundary>
              <App />
          </ErrorBoundary>
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>,
    target
);
