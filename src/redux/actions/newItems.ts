import axios from "axios";
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
    axios.get('https://modernoshop-b8052-default-rtdb.firebaseio.com/Products.json').then(({data}) => {
        dispatch(setProductsItems(data))
    })
}