import { combineReducers } from 'redux';
import locale from './locale'
import lang from './lang'
import images from './images'

const rootReducer = combineReducers({
    locale,
    lang,
    images
})

export default rootReducer