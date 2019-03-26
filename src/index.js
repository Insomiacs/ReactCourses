import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import ErrorBoundary from './SharedComponents/ErrorBoundary';

import './main.scss';

const target = document.querySelector('#root');

render(
    <BrowserRouter>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </BrowserRouter>,
    target
);
