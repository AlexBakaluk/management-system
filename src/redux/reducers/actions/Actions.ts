import {CHANGE_GLOBAL_LANGUAGE, CHANGE_THEME} from "./ActionTypes";

type changeLangType = {
    type: string
}

export const changeLanguage = (): changeLangType => {
    return {
        type: CHANGE_GLOBAL_LANGUAGE
    }
}

type changeThemeType = {
    type: string
}

export const changeTheme = (): changeThemeType => {
    return {
        type: CHANGE_THEME
    }
}