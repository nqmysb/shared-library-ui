import {
  CHANGE_ANIMATION
} from '../actions/animation'

const initState = sessionStorage.getItem('store') ? JSON.parse(sessionStorage.getItem('store')).animation : {
  animation: ''
}

const animation = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_ANIMATION:
      return { ...state, name: action.animation }

    default:
      return state
  }

}

export default animation