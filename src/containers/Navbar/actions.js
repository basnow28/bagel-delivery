import { LANGUAGE } from "../../store/actions/action"

export const setLanguage = language => {
    return {
        type: LANGUAGE.CHANGE,
        language: language
    }
}