import {SET_USER_INFO} from "./actions/ActionTypes";

interface User {
    id: number | null,
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
    birthDate: string | null
}

interface Gender {
    id: number | null,
    name: string | null
}

interface Role {
    name: string | null
}

const initialState: User = {
    id: null,
    username: '',
    email: '',
    userDetails: {
        name: '',
        surname: '',
        patronymic: '',
        gender: {
            id: null,
            name: null
        },
        birthDate: null,
    },
    roles: []
}

export const userInfoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_INFO:
            return {...state, ...action.payload}
        default:
            return state
    }
}