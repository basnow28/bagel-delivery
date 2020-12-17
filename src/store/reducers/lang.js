import { LANGUAGE } from '../actions/action'

export default function(state = {lang : 'da-dk'}, action){
    if(action.type == LANGUAGE.CHANGE){
        return {lang : action.language};
    }
    return state;
}