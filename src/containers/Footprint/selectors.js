import { createStructuredSelector } from "reselect";
import { selectImageByKey } from "../../store/selectors/images";
import { selectLocaleText } from "../../store/selectors/locale";


const selectTags = createStructuredSelector({
    title: selectLocaleText('Footprint', 'title'),
    subtitle: selectLocaleText('Footprint', 'subtitle'),
    pickupTitle: selectLocaleText('Footprint', 'pickup_title'),
    pickupPlaceholder: selectLocaleText('Footprint', 'pickup_placeholder'),
    dropOffTitle: selectLocaleText('Footprint', 'dropoff_title'),
    packageTitle: selectLocaleText('Footprint', 'package_title'),
    small: selectLocaleText('Footprint', 'small'),
    medium: selectLocaleText('Footprint', 'medium'),
    large: selectLocaleText('Footprint', 'large'),
    howOften: selectLocaleText('Footprint', 'how_often'),
    calculate: selectLocaleText('Footprint', 'calculate'),
    savings: selectLocaleText('Footprint', 'savings'),
    co2: selectLocaleText('Footprint', 'co2')
})


export default createStructuredSelector({
    tags: selectTags,
    topPicture: selectImageByKey('bike-main-page')
})