import { call, put, select, takeLatest } from 'redux-saga/effects'
import { CONTENT, IMAGES, LANGUAGE, LOCALE } from '../actions/action'
import { selectLanguage } from '../selectors/lang'
import * as _ from 'lodash'

function* init(action){
    yield put({type: LOCALE.INIT, rootAction: action})
    yield put({type: IMAGES.INIT, rootAction: action})
}

export default function*(){
    yield takeLatest(CONTENT.INIT, init)
}