const initialState = {
  name: '',
  age: 0,
  job: '',

  isShow: false,
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name,
      }
    case 'CHANGE_AGE':
      return {
        ...state,
        age: action.age,
      }
    case 'CHANGE_JOB':
      return {
        ...state,
        job: action.job,
      }
    case 'TOGGLE_HIDDEN_CONTENT':
      return {
        ...state,
        isShow: !state.isShow,
      }
    default:
      return state
  }
}

export default reducer
