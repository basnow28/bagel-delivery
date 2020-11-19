import { combineReducers } from 'redux';
import content from './content'
import lang from './lang'

const rootReducer = combineReducers({
    content,
    lang
})

export default rootReducer