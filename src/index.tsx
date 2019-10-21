
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Header from './common/header/index';
import store from './store/index';
import {Router, BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <Provider store={ store }>
        <div>
            <BrowserRouter>
                <Header></Header>
            </BrowserRouter>
        </div>
    </Provider>,
    document.getElementById('root') as HTMLElement
);