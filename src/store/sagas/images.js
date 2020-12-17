import { call, select, takeLatest } from "redux-saga/effects";
import { fetchImages } from "../../api/prismic";
import { IMAGES } from "../actions/action";
import { selectLanguage } from "../selectors/lang";
import request from "./helpers/request";


function* init(action){
    const lang = yield select(selectLanguage)
    yield call(request, {type: IMAGES.FETCH, rootAction: action}, () => fetchImages(lang))
}

export default function*(){
    yield takeLatest(IMAGES.INIT, init)
}