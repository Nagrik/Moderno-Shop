export const addClothesToCart = (clothesObj:any) => ({
    type: 'ADD_CLOTHES_CART',
    payload:clothesObj
})
export const clearCart = () => ({
    type: 'CLEAR_CART',
})
export const plusCartItem = (id:number) => ({
    type: 'PLUS_CART_ITEM',
    payload:id
})
export const minusCartItem = (id:number) => ({
    type: 'MINUS_CART_ITEM',
    payload:id
})
export const removeCartItem = (id:number) => ({
    type: 'REMOVE_CART_ITEM',
    payload:id
})