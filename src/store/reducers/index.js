import { combineReducers } from 'redux';
import content from './content'
import lang from './lang'
import images from './images'

const rootReducer = combineReducers({
    content,
    lang,
    images
})

export default rootReducer