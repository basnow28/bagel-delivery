import { call, select, takeLatest } from 'redux-saga/effects'
import request from './helpers/request'
import { LOCALE } from '../actions/action'
import { fetchLocaleText, prismicFetch } from '../../api/prismic'
import { selectLanguage } from '../selectors/lang'


function* init(action){
    const lang = yield select(selectLanguage)
    yield call(request, {type: LOCALE.FETCH, rootAction: action}, () => fetchLocaleText(lang))
}

export default function*(){
    yield takeLatest(LOCALE.INIT, init)
}