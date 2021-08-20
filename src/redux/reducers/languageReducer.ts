import {CHANGE_GLOBAL_LANGUAGE} from "./actions/ActionTypes";

export const RUSSIAN = "Русский"
export const ENGLISH = "English"

export type LanguageState = {
    language: string
}

export const currentLang: any = {
    current: RUSSIAN
}

const initialState: LanguageState = {
    language: RUSSIAN
}

export const languageReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case CHANGE_GLOBAL_LANGUAGE:
            if (state.language === RUSSIAN) {
                currentLang.current = ENGLISH
                return {...state, language: ENGLISH}
            } else {
                currentLang.current = RUSSIAN
                return {...state, language: RUSSIAN}
            }
        default:
            return state
    }
}