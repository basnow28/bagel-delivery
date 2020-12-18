import { createStructuredSelector } from "reselect";
import { selectLocaleText } from "../../store/selectors/locale";


const selectTags = createStructuredSelector({
    logo: selectLocaleText('Footer', 'Logo'),
    subtitle1: selectLocaleText('Footer', 'subtitle1'),
    phone: selectLocaleText('Footer', 'Phone'),
    email: selectLocaleText('Footer', 'Email'),
    subtitle2: selectLocaleText('Footer', 'subtitle2'),
    facebook: selectLocaleText('Footer', 'Facebook'),
    instagram: selectLocaleText('Footer', 'Instagram'),
    social1: selectLocaleText('Footer', 'social1'),
    social2: selectLocaleText('Footer', 'social2'),
})


export default createStructuredSelector({
    tags: selectTags,
})