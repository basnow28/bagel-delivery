import { createSelector, createStructuredSelector } from "reselect";
import { selectLocaleSection } from "../../../store/selectors/locale";
import * as _ from 'lodash'


const selectOptions = createSelector(selectLocaleSection('How Often Footprint'), section => {
    let options = [];

    _.map(section, item => {
        options.push({
            value: _.get(item, 'number'),
            label: _.get(item, 'element.0.text')
        })
    })
    return options;
})


export default createStructuredSelector({
    options: selectOptions
})