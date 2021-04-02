import axios from "axios";
import {Dispatch} from "redux";

export const SET_LOADED = 'SET_LOADED'
export const SET_PRODUCTS_ASIDE_ITEMS = 'SET_PRODUCTS_ASIDE_ITEMS'
export const SET_PRODUCTS_ITEMS = 'SET_PRODUCTS_ITEMS'
export const SET_NEW_AUTHOR = 'SET_NEW_AUTHOR'
export const SET_LOADED_NEW_PRODUCT = 'SET_LOADED_NEW_PRODUCT'


export type ActionTypeNew = setLoadedType | setProductsAsideItemsType |
    setProductsItemsType | setNewProfileType | setLoadedNewProductType

type setLoadedType = {
    type: typeof SET_LOADED,
    payload:boolean
}

export const setLoaded = (payload:boolean):setLoadedType => ({
    type: SET_LOADED,
    payload
})

type setProductsAsideItemsType = {
    type: typeof SET_PRODUCTS_ASIDE_ITEMS,
    payload:object
}

export const setProductsAsideItems = (items:Object):setProductsAsideItemsType => ({
    type:SET_PRODUCTS_ASIDE_ITEMS,
    payload:items
})

export const fetchProductsAsideItems = () => (dispatch:Dispatch<ActionTypeNew>) =>  {
    axios.get('https://modernoshop-b8052-default-rtdb.firebaseio.com/aside.json').then(({data}) => {
        dispatch(setProductsAsideItems(data))
    })
}

type setProductsItemsType = {
    type: typeof SET_PRODUCTS_ITEMS,
    payload:object
}

export const setProductsItems = (items:Object):setProductsItemsType => ({
    type:SET_PRODUCTS_ITEMS,
    payload:items
})

export const fetchProductsItems = () => (dispatch:Dispatch<ActionTypeNew>) =>  {
    dispatch(setLoaded(false))
    axios.get('https://modernoshop-b8052-default-rtdb.firebaseio.com/Clothes.json').then(({data}) => {
        dispatch(setProductsItems(data))
    })
}

type setNewProfileType = {
    type:typeof SET_NEW_AUTHOR,
    payload:object
}

export const setNewProfile = (Items:Object):setNewProfileType => ({
    type:SET_NEW_AUTHOR,
    payload:Items
})


type setLoadedNewProductType = {
    type: typeof SET_LOADED_NEW_PRODUCT,
    payload:boolean
}
export const setLoadedNewProduct = (payload:boolean):setLoadedNewProductType => ({
    type: SET_LOADED_NEW_PRODUCT,
    payload
})

export const fetchNewProfile = () => (dispatch:Dispatch<ActionTypeNew>) =>  {
    dispatch(setLoadedNewProduct(false))
    axios.get('https://modernoshop-b8052-default-rtdb.firebaseio.com/Clohtes/.json').then(({data}) => {
        dispatch(setNewProfile(data))
    })
}


