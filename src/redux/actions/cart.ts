export const ADD_CLOTHES_CART = 'ADD_CLOTHES_CART'
export const CLEAR_CART = 'CLEAR_CART'
export const PLUS_CART_ITEM = 'PLUS_CART_ITEM'
export const MINUS_CART_ITEM = 'MINUS_CART_ITEM'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'


export type ActionTypes = addClothesToCartType | clearCartType | plusCartItemType | minusCartItemType | removeCartItemType

type addClothesToCartType = {
    type: typeof ADD_CLOTHES_CART,
    payload: any
}
export const addClothesToCart = (clothesObj:object):addClothesToCartType => ({
    type: ADD_CLOTHES_CART,
    payload:clothesObj
})

type clearCartType = {
    type:typeof CLEAR_CART
}
export const clearCart = ():clearCartType => ({
    type:  CLEAR_CART,
})

type plusCartItemType = {
    type: typeof PLUS_CART_ITEM,
    payload:number
}
export const plusCartItem = (id:number):plusCartItemType => ({
    type: PLUS_CART_ITEM,
    payload:id
})

type minusCartItemType = {
    type:typeof MINUS_CART_ITEM,
    payload:number
}
export const minusCartItem = (id:number):minusCartItemType => ({
    type: MINUS_CART_ITEM,
    payload:id
})

type removeCartItemType = {
    type:typeof REMOVE_CART_ITEM,
    payload:number
}
export const removeCartItem = (id:number):removeCartItemType => ({
    type: REMOVE_CART_ITEM,
    payload:id
})