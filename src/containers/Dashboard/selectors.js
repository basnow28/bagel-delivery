import { createStructuredSelector } from "reselect";
import * as _ from 'lodash'
import { selectLocale, selectLocaleByKey, selectLocaleText } from "../../store/selectors/locale";
import { selectImageByKey, selectImages } from "../../store/selectors/images";

export default createStructuredSelector({
    content: selectLocaleText('Discover Page', 'some_other_key')
})