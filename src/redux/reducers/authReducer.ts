import {authApi} from "../../api/Api"
import {SET_USER_DATA} from "./actions/ActionTypes";
import {setUserData, setUserTokens} from "./actions/Actions";
import {getAccessToken} from "./tokensReducer";

interface State {
    id: number | null,
    firstName: string | null,
    lastName: string | null,
    email: string | null,
    isAuth: boolean,
    roles: Array<string>
}

const initialState: State = {
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    isAuth: false,
    roles: []
}

export const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        default:
            return state
    }
}

export const login = (email: string, password: string) => async (dispatch: any) => {
    const response = await authApi.login(email, password)

    if (response.status === 200) {
        dispatch(setUserTokens(response.data))
        console.log(getAccessToken())
        const userInfo = await authApi.me(getAccessToken())
        dispatch(setUserData(userInfo.data))
    }
}