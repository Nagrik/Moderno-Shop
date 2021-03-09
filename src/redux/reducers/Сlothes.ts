//@ts-ignore
const initialState = {
    items: [],
    isLoaded: false
}
//@ts-ignore
export const clothesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CLOTHES":
            return {
                ...state,
                items: action.payload
            }
        default: {
            return state
        }
    }
}