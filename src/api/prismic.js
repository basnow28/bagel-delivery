import Prismic from 'prismic-javascript'
import { createSelector } from 'reselect'
import { selectLanguage } from '../store/selectors/lang'


export const prismicFetch = (predicates, options) => {
    return Prismic.getApi(process.env.REACT_APP_PRISMIC_API_URL, {
        accessToken: process.env.REACT_APP_PRISMIC_ACCESS_TOKEN
    }).then(api => {
        return api.query(predicates && predicates.length ? predicates : '', {
            ...options
        })
    })
}