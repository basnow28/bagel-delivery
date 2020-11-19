import { call, select, takeLatest } from 'redux-saga/effects'
import request from './helpers/request'
import { CONTENT } from '../actions/action'
import { prismicFetch } from '../../api/prismic'
import { selectLanguage } from '../selectors/lang'


function* init(action){
    const lang = yield select(selectLanguage)
    yield call(request, {type: CONTENT.FETCH, rootAction: action}, () => prismicFetch('', lang))
}

export default function*(){
    yield takeLatest(CONTENT.INIT, init)
}