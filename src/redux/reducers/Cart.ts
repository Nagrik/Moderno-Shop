type InitialStateType = {
    items: any,
    totalPrice: number,
    totalCount: number
}

const initialState: InitialStateType = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const getTotalPrice = (arr:Array<any>) => arr.reduce((sum, obj) => obj.items.price + sum, 0)

export const cartReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {

        case 'ADD_CLOTHES_CART': {

            const currentPizzaItems = !state.items[action.payload.items.id]
                ? [action.payload]
                : [...state.items[action.payload.items.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.items.id]: {
                    items:currentPizzaItems,
                    totalPrice:getTotalPrice(currentPizzaItems)
                }
            }
            //@ts-ignore
            const items = Object.values(newItems).map(obj => obj.items)
            const allClothes = [].concat.apply([],items)
            //@ts-ignore
            const totalPrice =  getTotalPrice(allClothes)
            return {
                ...state,
                items: newItems,
                totalCount: allClothes.length,
                totalPrice
            }
        }
        default: {
            return state
        }
    }
}