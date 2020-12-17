import { createStructuredSelector } from "reselect";
import { selectLanguage } from "../../store/selectors/lang";

export default createStructuredSelector({
    lang: selectLanguage
})