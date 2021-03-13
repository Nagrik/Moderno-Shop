
type InitialStateType = {
    category: null | string,
    sortBy: string
}

const initialState: InitialStateType = {
    category: null,
    sortBy: ''
}
export const filtersReducer = (state = initialState, action:any):InitialStateType => {
    switch (action.type) {
        case "SET_SORT_BY":{
            return {
                ...state,
                sortBy: action.payload,
            }
        }
        case "SET_CATEGORY": {
            return {
                ...state,
                category: action.payload
            }
        }
        default:{
            return state
        }
    }
}