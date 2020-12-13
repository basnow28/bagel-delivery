import { LOCALE,IMAGES } from "../../store/actions/action";

export const onInit = () => {
    return {
        type: LOCALE.INIT
    }
}

export const loadImages = () => {
    return {
        type: IMAGES.INIT
    }
}