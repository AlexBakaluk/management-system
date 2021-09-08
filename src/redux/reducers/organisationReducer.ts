import {SET_USER_INFO} from "./actions/ActionTypes";

interface OrganisationList {
    organisations: Array<Organisation>
}

interface Organisation {
    id: number | null,
    shortName: string,
    phoneNumber: string | null,

}


const initialState: OrganisationList = {
    organisations: []
}

export const userInfoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_INFO:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default userInfoReducer