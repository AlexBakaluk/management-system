interface BrandsList {
    brands: Array<Organisation>
}

interface Brand {
    id: number,
    name: string,
    organisationName: string | null,

}


const initialState: BrandsList = {
    brands: []
}

export const brandsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_INFO:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default brandsReducer