import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import homePage from './homePage'
import animation from './animation'

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    homePage,
    animation
  })

export default createRootReducer



