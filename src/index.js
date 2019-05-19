import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import App from './App';
import NotFoundPage from './SharedComponents/NotFoundPage';
import MovieDetails from './MovieDetails/MovieDetails';
import ErrorBoundary from './SharedComponents/ErrorBoundary';
import './main.scss';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BrowserRouter>
        <ErrorBoundary>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/film/:id" component={MovieDetails} />
            <Route exact path="/search/:query" component={App} />
            <Route component={NotFoundPage} />
          </Switch>
        </ErrorBoundary>
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>,
  target,
);
