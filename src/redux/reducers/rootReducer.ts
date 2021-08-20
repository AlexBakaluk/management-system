import {combineReducers} from 'redux'
import {languageReducer} from "./languageReducer";

export const rootReducer = combineReducers({
    languages: languageReducer,
})