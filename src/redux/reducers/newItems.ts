
type InitialStateType = {
    asideItems: Array<any>,
    mainItems:Array<any>,
    isLoaded: boolean,
    author:any,
    isLoadedProduct:boolean,
    isLoadedProfile:boolean,
    products:object
}

const initialState:InitialStateType= {
    asideItems: [],
    mainItems:[],
    isLoaded: false,
    author:[],
    isLoadedProduct:false,
    isLoadedProfile:false,
    products:{}
}

export const asideReducer = (state = initialState, action:any):InitialStateType => {
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
        case "SET_LOADED_NEW_PRODUCT":{
            return {
                ...state,
                isLoadedProduct: action.payload
            }
        }
        case "SET_CLOTHES_PRODUCT":{
            return {
                ...state,
                products: action.products
            }
        }

        case "SET_NEW_AUTHOR":
            return {
                ...state,
                author: action.payload,
                isLoadedProduct: true,
                isLoadedProfile: true,
            }
        case "SET_NEW_PROFILE":
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