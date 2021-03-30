import axios from "axios";
import {setLoadedProduct} from "./clothes";
export const setLoaded = (payload:boolean) => ({
    type: 'SET_LOADED',
    payload
})

export const setProductsAsideItems = (items:Object) => ({
    type:'SET_PRODUCTS_ASIDE_ITEMS',
    payload:items

})

export const fetchProductsAsideItems = () => (dispatch:any) =>  {
    // dispatch(setLoaded(false))
    axios.get('https://modernoshop-b8052-default-rtdb.firebaseio.com/aside.json').then(({data}) => {
        dispatch(setProductsAsideItems(data))
    })
}

export const setProductsItems = (items:Object) => ({
    type:'SET_PRODUCTS_ITEMS',
    payload:items

})

export const fetchProductsItems = () => (dispatch:any) =>  {
    dispatch(setLoaded(false))
    axios.get('https://modernoshop-b8052-default-rtdb.firebaseio.com/Clothes.json').then(({data}) => {
        dispatch(setProductsItems(data))
    })
}

export const setNewProfile = (Items:Object) => ({
    type:'SET_NEW_AUTHOR',
    payload:Items
})
export const setLoadedNewProduct = (payload:boolean) => ({
    type: 'SET_LOADED_NEW_PRODUCT',
    payload
})

export const fetchNewProfile = () => (dispatch:any) =>  {
    dispatch(setLoadedNewProduct(false))
    axios.get('https://modernoshop-b8052-default-rtdb.firebaseio.com/Clohtes/2.json').then(({data}) => {
        dispatch(setNewProfile(data))
    })
}


