import { LANGUAGE } from '../actions/action'

export default function(state = {lang : 'en-gb'}, action){
    if(action.type == LANGUAGE.CHANGE){
        return action.payload;
    }
    return state;
}