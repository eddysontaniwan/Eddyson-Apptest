import React from 'react';
import {createStore} from 'redux';
import movieReducer from './reducers/moviesReducer';

const store = createStore(movieReducer);
export default store;
