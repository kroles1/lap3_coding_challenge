import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';

import App from './App'
import { searchReducer } from './reducers';



const store = createStore(searchReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
);
