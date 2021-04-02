import {
    ActionTypeClothes, SET_AUTHOR,
    SET_CLOTHES, SET_CLOTHES_PRODUCT,
    SET_CLOTHES_SLIDER_ONE,
    SET_CLOTHES_SLIDER_THIRD,
    SET_CLOTHES_SLIDER_TWO, SET_LOADED, SET_LOADED_PRODUCT, SET_LOADED_PROFILE
} from "../actions/clothes";

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

export const clothesReducer = (state = initialState, action:ActionTypeClothes):InitialStateType => {
    switch (action.type) {
        case SET_CLOTHES:
            return <InitialStateType>{
                ...state,
                items: action.payload,
                isLoaded: true
            }
            case SET_CLOTHES_SLIDER_ONE:
            return <InitialStateType>{
                ...state,
                sliderOne: action.payload,
                isLoaded: true
            }
            case SET_CLOTHES_SLIDER_TWO:
            return <InitialStateType>{
                ...state,
                sliderTwo: action.payload,
                isLoaded: true
            }
            case SET_CLOTHES_SLIDER_THIRD:
            return <InitialStateType>{
                ...state,
                sliderThird: action.payload,
                isLoaded: true
            }
        case SET_LOADED:{
            return {
                ...state,
                isLoaded: action.payload
            }
        }
        case SET_LOADED_PRODUCT:{
            return {
                ...state,
                isLoadedProduct: action.payload
            }
        }
        case SET_LOADED_PROFILE:{
            return {
                ...state,
                isLoadedProfile: action.payload
            }
        }
        case SET_CLOTHES_PRODUCT:{
            return {
                ...state,
                clothes: action.clothes
            }
        }
        case SET_AUTHOR:
            return <InitialStateType>{
                ...state,
                author: action.payload,
                isLoadedProduct: true,
                isLoadedProfile: true,
            }

        default: {
            return state
        }
    }
}