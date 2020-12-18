import { createStructuredSelector } from "reselect";
import { selectFooterLocaleText } from "../../store/selectors/locale";


const selectTags = createStructuredSelector({
    logo: selectFooterLocaleText('Footer', 'Logo'),
    subtitle1: selectFooterLocaleText('Footer', 'subtitle1'),
    phone: selectFooterLocaleText('Footer', 'Phone'),
    email: selectFooterLocaleText('Footer', 'Email'),
    subtitle2: selectFooterLocaleText('Footer', 'subtitle2'),
    facebook: selectFooterLocaleText('Footer', 'Facebook'),
    instagram: selectFooterLocaleText('Footer', 'Instagram'),
    social1: selectFooterLocaleText('Footer', 'social1'),
    social2: selectFooterLocaleText('Footer', 'social2'),
})


export default createStructuredSelector({
    tags: selectTags,
})