import { all, call } from 'redux-saga/effects'
import locale from './locale'
import images from './images'

const allSagas = [
    locale(),
    images()
]

export default function* rootSaga(){
    yield all(allSagas)
}