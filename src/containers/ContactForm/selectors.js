import { createSelector, createStructuredSelector } from "reselect";
import { selectLocaleText, selectLocaleSection } from "../../store/selectors/locale";
import * as _ from 'lodash'

const selectTags = createStructuredSelector({
    subject: selectLocaleText('Contact Form', 'subject'),
    firstName: selectLocaleText('Contact Form', 'first_name'),
    email: selectLocaleText('Contact Form', 'email'),
    company: selectLocaleText('Contact Form', 'company'),
    lastName: selectLocaleText('Contact Form', 'last_name'),
    phone: selectLocaleText('Contact Form', 'phone'),
    msg: selectLocaleText('Contact Form', 'msg'),
    frequency: selectLocaleText('Contact Form', 'frequency'),
    send: selectLocaleText('Contact Form', 'send'),
    header: selectLocaleText('Contact Form', 'header'),
    paragraph: selectLocaleText('Contact Form', 'paragraph')
})

const selectOptions = title => createSelector(selectLocaleSection(title), section => {
    let options = [];

    _.map(section, item => {
        options.push({
            value: _.get(item, 'value.0.text'),
            label: _.get(item, 'element.0.text')
        })
    })
    return options;
})


export default createStructuredSelector({
    tags: selectTags,
    frequencyOptions: selectOptions("Frequency Options"),
    subjectOptions: selectOptions("Subject Options")
})