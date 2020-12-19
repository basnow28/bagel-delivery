import { LOCALE, LANGUAGE } from "../../store/actions/action";

export const onInit = () => {
    return {
        type: LOCALE.INIT
    }
}

export const setLanguage = language => {
    return {
        type: LANGUAGE.CHANGE,
        language: language
    }
}