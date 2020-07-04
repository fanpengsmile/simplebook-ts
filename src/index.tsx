
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Header from './common/header/index';
import store from './store/index';
import './static/iconfont/iconfont.css';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login/index';
import Write from './pages/writer/index';

ReactDOM.render(
<Provider store = {store}>
      <div>
        <BrowserRouter>
          <Header/>
          <div>
            <Route path='/' exact component = {Home}></Route>
            <Route path='/detail/:id' exact component = {Detail}></Route>
            <Route path='/login' exact component = {Login}></Route>
            <Route path='/write' exact component = {Write}></Route>
          </div>
        </BrowserRouter>
      </div>
    </Provider>,
    document.getElementById('root') as HTMLElement
);