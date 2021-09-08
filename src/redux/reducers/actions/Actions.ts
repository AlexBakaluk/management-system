import {CHANGE_GLOBAL_LANGUAGE, CHANGE_THEME, LOGIN, LOGOUT, SET_USER_INFO} from "./ActionTypes";

type changeLangType = {
    type: typeof CHANGE_GLOBAL_LANGUAGE
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

interface LoginType {
    type: typeof LOGIN
}

export const setLogin = (): LoginType => ({
    type:LOGIN
})

interface LogoutType {
    type: typeof LOGOUT
}

export const setLogout = (): LogoutType => ({
    type: LOGOUT
})

interface UserInfoPayload {
    id: number,
    username: string,
    email: string,
    userDetails: UserDetails,
    roles: Array<Role>
}

interface UserDetails {
    name: string,
    surname: string,
    patronymic: string,
    gender: Gender
    birthDate: string
}

interface Gender {
    id: number,
    name: string
}

interface Role {
    name: string
}

interface setUserInfoType {
    type: typeof SET_USER_INFO,
    payload: UserInfoPayload
}

export const setUserInfo = (payload: UserInfoPayload): setUserInfoType => ({
    type: SET_USER_INFO,
    payload: {
        id: payload.id,
        username: payload.username,
        email: payload.email,
        userDetails: {
            name: payload.userDetails.name,
            surname: payload.userDetails.surname,
            patronymic: payload.userDetails.patronymic,
            gender: payload.userDetails.gender,
            birthDate: payload.userDetails.birthDate
        },
        roles: payload.roles
    }
})