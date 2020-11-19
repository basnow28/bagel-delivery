import { all, call } from 'redux-saga/effects'
import content from './content'

const allSagas = [
    content()
]

export default function* rootSaga(){
    yield all(allSagas)
}