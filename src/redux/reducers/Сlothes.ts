// type InitialStateType = {
//     items: Array<any>,
//     isLoaded: boolean,
//     sliderOne: Array<any>,
//     sliderTwo: Array<any>,
//     sliderThird: Array<any>
// }

const initialState = {
    items: [],
    isLoaded: false,
    isLoadedProduct:false,
    isLoadedProfile:false,
    sliderOne:[],
    sliderTwo:[],
    sliderThird:[],
    clothes:{},
    author:[],
}

type InitialStateType = typeof initialState

export const clothesReducer = (state = initialState, action:any):InitialStateType => {
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
        case "SET_LOADED_PRODUCT":{
            return {
                ...state,
                isLoadedProduct: action.payload
            }
        }
        case "SET_LOADED_PROFILE":{
            return {
                ...state,
                isLoadedProfile: action.payload
            }
        }
        case "SET_CLOTHES_PRODUCT":{
            return {
                ...state,
                clothes: action.clothes
            }
        }
        case "SET_AUTHOR":
            return {
                ...state,
                author: action.payload,
                isLoadedProduct: true,
                isLoadedProfile: true,
            }
        case "SET_PROFILE":
            return {
                ...state,
                author: action.payload,
                isLoadedProfile: true,
            }
        default: {
            return state
        }
    }
}