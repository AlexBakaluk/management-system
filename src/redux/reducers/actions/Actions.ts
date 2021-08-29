import {CHANGE_GLOBAL_LANGUAGE, CHANGE_THEME, SET_USER_DATA, SET_USER_TOKENS} from "./ActionTypes";

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

interface UserTokens {
    type: typeof SET_USER_TOKENS,
    payload: UserTokensPayload
}

interface UserTokensPayload {
    access_token: string,
    refresh_token: string
}

export const setUserTokens = ({access_token, refresh_token}: UserTokensPayload): UserTokens => ({
    type: SET_USER_TOKENS,
    payload: {access_token, refresh_token}
})

interface UserData {
    type: typeof SET_USER_DATA,
    payload: UserInfoResponse
}

export interface UserInfoResponse {
        id: number,
        firstName: string,
        lastName: string,
        email: string,
        roles: Array<Role>
}

interface Role {
    name: string
}

export const setUserData = ({id, firstName, lastName, email, roles}: UserInfoResponse): UserData => ({
    type: SET_USER_DATA,
    payload: {id, firstName, lastName, email, roles}
})