import { createSelector } from "reselect";
import * as _ from 'lodash'

export const selectLocale = state => state.locale;

export const selectLocaleText = (title, key) => createSelector(selectLocale, locales => {
    console.log(locales)
    const results = _.get(locales, 'results.0.data.body') //if sth is null or undefined then it returns undefined
    const section = _.filter(results, result => _.get(result, 'primary.title.0.text') == title);
    const text = _.filter(_.get(section, '0.items'), item => _.get(item, 'key.0.text') == key);
    return _.get(text, '0.value.0.text');
})

export const selectLocaleSection = title => createSelector(selectLocale, locales => {
    const results = _.get(locales, 'results.0.data.body')
    const section = _.filter(results, result => _.get(result, 'primary.title.0.text') == title);
    return _.get(section, '0.items');
})