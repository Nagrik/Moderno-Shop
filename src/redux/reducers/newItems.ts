import {
    ActionTypeNew,
    SET_LOADED_NEW_PRODUCT,
    SET_NEW_AUTHOR,
    SET_PRODUCTS_ASIDE_ITEMS,
    SET_PRODUCTS_ITEMS
} from "../actions/newItems";

type InitialStateType = {
    asideItems: Array<object>,
    mainItems:Array<object>,
    isLoaded: boolean,
    author:object,
    isLoadedProduct:boolean,
    isLoadedProfile:boolean,
    products:object
}

const initialState:InitialStateType= {
    asideItems:[],
    mainItems:[],
    isLoaded: false,
    author:[],
    isLoadedProduct:false,
    isLoadedProfile:false,
    products:{}
}

export const asideReducer = (state = initialState, action:ActionTypeNew):InitialStateType => {
    switch (action.type){
        case SET_PRODUCTS_ASIDE_ITEMS:
            return <InitialStateType>{
                ...state,
                asideItems: action.payload
            }
        case SET_PRODUCTS_ITEMS:
            return <InitialStateType>{
                ...state,
                mainItems: action.payload,
                isLoaded: true
            }
        case SET_LOADED_NEW_PRODUCT:{
            return {
                ...state,
                isLoadedProduct: action.payload
            }
        }

        case SET_NEW_AUTHOR:
            return {
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