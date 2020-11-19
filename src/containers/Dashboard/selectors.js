import { createStructuredSelector } from "reselect";
import * as _ from 'lodash'
import { selectContent } from "../../store/selectors/content";

export default createStructuredSelector({
    content: selectContent
})