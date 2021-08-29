import {SET_USER_TOKENS} from "./actions/ActionTypes";

interface State {
    access_token: string,
    refresh_token: string
}

const initialState: State = {
    access_token: '',
    refresh_token: '',
}

const tokens: State = {
    access_token: '',
    refresh_token: '',
}

export const tokensReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_TOKENS:
            tokens.access_token = action.payload.access_token
            tokens.refresh_token = action.payload.refresh_token
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const getAccessToken = () => {
    return tokens.access_token
}

export const getRefreshToken = () => {
    return tokens.refresh_token
}