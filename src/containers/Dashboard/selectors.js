import { createStructuredSelector } from "reselect";
import * as _ from 'lodash'
import { selectContent } from "../../store/selectors/content";
import { selectImages } from "../../store/selectors/images";

export default createStructuredSelector({
    content: selectImages
})