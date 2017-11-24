/* eslint-disable no-console */
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import {loadAllCourses} from './actions/courseActions';
import {loadAllAuthors} from './actions/authorActions';

import './styles/styles.css'; //webpack can import css files into bundle
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore(); //initialState has been missed since the reducers have default parameter

store.dispatch(loadAllCourses());
store.dispatch(loadAllAuthors());
render (
  <Provider store={store}><Router history={browserHistory} routes={routes} /></Provider>
   , document.getElementById('app')
);
