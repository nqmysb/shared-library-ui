export const CHANGE_ANIMATION = 'CHANGE_ANIMATION'

export const setAnimation = animation => {

  return dispatch => dispatch(changeAnimation(animation))
    
}

export const changeAnimation = animation => {
  return {
    type: CHANGE_ANIMATION,
    animation
  }
}



