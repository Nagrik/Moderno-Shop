//@ts-ignore
const initialState = {
    items: [],
    isLoaded: false,
    sliderOne:[],
    sliderTwo:[],
    sliderThird:[],
}
//@ts-ignore
export const clothesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CLOTHES":
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            }
            case "SET_CLOTHES_SLIDER_ONE":
            return {
                ...state,
                sliderOne: action.payload,
                isLoaded: true
            }
            case "SET_CLOTHES_SLIDER_TWO":
            return {
                ...state,
                sliderTwo: action.payload,
                isLoaded: true
            }
            case "SET_CLOTHES_SLIDER_THIRD":
            return {
                ...state,
                sliderThird: action.payload,
                isLoaded: true
            }
        case "SET_LOADED":{
            return {
                ...state,
                isLoaded: action.payload
            }
        }
        default: {
            return state
        }
    }
}