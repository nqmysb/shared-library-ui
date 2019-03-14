import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App';
import store from './configureStore'
import './styles/index.css'
// import 'antd/dist/antd.css';

//不能自己再在App里面新建一个 
import { history } from './configureStore'


ReactDOM.render(
    <Provider store={store}>
        <App history={history}/>
    </Provider>,
    document.getElementById('root'))
