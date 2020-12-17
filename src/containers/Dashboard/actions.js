import { CONTENT, LANGUAGE } from "../../store/actions/action";

export const onInit = () => {
    return {
        type: CONTENT.INIT
    }
}

export const setLanguage = language => {
    return {
        type: LANGUAGE.CHANGE,
        language: language
    }
}