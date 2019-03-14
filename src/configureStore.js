import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// createLogger 不是default 需要{}  默认导出 logger
// import { createLogger } from 'redux-logger'
// const logger = createLogger({
//   // ...options
// });
// 或使用默认导入

// import logger from 'redux-logger'
import { createLogger }  from 'redux-logger';
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers/index'


export const history = createBrowserHistory()

const logger = createLogger({ collapsed: true });

const middleware = routerMiddleware(history) // for dispatching history actions

const middlewares = [thunk,middleware];

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger)    
}

const store = createStore(
  createRootReducer(history), // root reducer with router state
  composeWithDevTools(applyMiddleware(...middlewares))
)


export default store





