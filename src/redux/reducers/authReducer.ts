import {LOGIN, LOGOUT} from "./actions/ActionTypes";
import {authApi} from "../../api/LoginApi";
import {setLogin, setUserInfo} from "./actions/Actions";
import {getMyInfoApi} from "../../api/GetMyInfoApi";


type AuthState = {
    isAuth: boolean,
}

const initialState: AuthState = {
    isAuth: false,
}

export let token = ''

export const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN:
            return {...state, isAuth: true}
        case LOGOUT:
            return {...state, isAuth: false}
        default:
            return state
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {

    const response = await authApi.login(email, password, rememberMe)

    if (response.status === 200) {
        dispatch(setLogin())
        localStorage.setItem("token", response.data.id_token)
        const userResponse = await getMyInfoApi.me()

        if (response.status === 200) {
            dispatch(setUserInfo(userResponse.data))
        }
    }

}