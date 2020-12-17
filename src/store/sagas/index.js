import { all, call } from 'redux-saga/effects'
import locale from './locale'
import images from './images'
import lang from './lang'
import content from './content'

const allSagas = [
    locale(),
    images(),
    lang(),
    content()
]

export default function* rootSaga(){
    yield all(allSagas)
}