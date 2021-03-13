//@ts-ignore
const initialState = {
    asideItems: [],
    mainItems:[],
    isLoaded: false
}

export const asideReducer = (state = initialState, action:any) => {
    switch (action.type){
        case 'SET_PRODUCTS_ASIDE_ITEMS':
            return {
                ...state,
                asideItems: action.payload
            }
        case 'SET_PRODUCTS_ITEMS':
            return {
                ...state,
                mainItems: action.payload,
                isLoaded: true
            }
        default: {
            return state
        }
    }
}