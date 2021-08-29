import {combineReducers} from 'redux'
import {languageReducer} from "./languageReducer";
import {authReducer} from "./authReducer";
import {tokensReducer} from "./tokensReducer";

export const rootReducer = combineReducers({
    languages: languageReducer,
    tokens: tokensReducer,
    auth: authReducer
})