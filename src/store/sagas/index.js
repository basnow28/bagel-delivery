import { all, call } from 'redux-saga/effects'
import content from './content'
import images from './images'

const allSagas = [
    content(),
    images()
]

export default function* rootSaga(){
    yield all(allSagas)
}