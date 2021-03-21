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

export const cartReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case 'ADD_CLOTHES_CART':{
        const newItems = {
            ...state.items,
            [action.payload.id]: !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id], action.payload]
        }

        const allClothes = [].concat.apply([], Object.values(newItems))
            //@ts-ignore
            const totalPrice = allClothes.reduce((sum,obj) => obj.items.price + sum, 0)

            return {
                ...state,
                items: newItems,
                totalCount:allClothes.length,
                totalPrice
            }
        }

        default: {
            return state
        }
    }
}