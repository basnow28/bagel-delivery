import { call, put, select, takeLatest } from 'redux-saga/effects'
import { CONTENT, LANGUAGE, LOCALE } from '../actions/action'


function* init(action){
   yield put({type: CONTENT.INIT, rootAction: action})
}

export default function*(){
    yield takeLatest(LANGUAGE.CHANGE, init)
}