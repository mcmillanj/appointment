import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux"
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {createRoot} from "react-dom/client"
import {createStore} from "redux"
import { ScheduleReducer } from "./reducers/ScheduleReducer"
// import store from './store'
const store = createStore(ScheduleReducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
          <App />,
   </Provider>
   
)

export default store;

