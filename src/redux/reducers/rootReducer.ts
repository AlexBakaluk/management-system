import {combineReducers} from 'redux'
import {languageReducer} from "./languageReducer";
import {authReducer} from "./authReducer";
import {userInfoReducer} from "./userInfoReducer";

export const rootReducer = combineReducers({
    languages: languageReducer,
    auth: authReducer,
    userInfo: userInfoReducer
})