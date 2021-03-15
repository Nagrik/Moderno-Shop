
type InitialStateType = {
    category: null | string,
    sortBy: string,
    categoryTab: number
}

const initialState: InitialStateType = {
    category: null,
    sortBy: '',
    categoryTab:0
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
        case "SET_CATEGORY_TAB":{
            return {
                ...state,
                categoryTab:action.payload
            }
        }
        default:{
            return state
        }
    }
}