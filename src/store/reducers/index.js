import { combineReducers } from 'redux'
import buttonReducer from './button'
import formsReducer from './forms'


export default combineReducers({
    btn: buttonReducer,
    forms: formsReducer
})