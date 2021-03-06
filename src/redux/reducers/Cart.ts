
import {
    ActionTypes,
    ADD_CLOTHES_CART,
    CLEAR_CART,
    MINUS_CART_ITEM,
    PLUS_CART_ITEM,
    REMOVE_CART_ITEM
} from '../actions/cart'
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

const getTotalPrice = (arr: Array<any>) => arr.reduce((sum, obj) => obj.items.price + sum, 0)

const _get = (obj:any,path:any) => {
    const [firstKey, ...keys] = path.split('.')
    return keys.reduce((val: any, key: any) => {
        return val[key]
    }, obj[firstKey])
}

const getTotalSum = (obj: any, path: any) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path)
            return sum + value
        }, 0)
}


export const cartReducer = (state = initialState, action: ActionTypes): { totalPrice: unknown; totalCount: unknown; items: any } => {
    switch (action.type) {

        case ADD_CLOTHES_CART: {

            const currentClothesItems = !state.items[action.payload.items.id]
                ? [action.payload]
                : [...state.items[action.payload.items.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.items.id]: {
                    items: currentClothesItems,
                    totalPrice: getTotalPrice(currentClothesItems)
                }
            }


            const totalCount = getTotalSum(newItems, 'items.length')
            const totalPrice = getTotalSum(newItems, 'totalPrice')
            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice
            }
        }
        case PLUS_CART_ITEM: {
            const newObjItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0],
            ];
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }

        case MINUS_CART_ITEM: {
            const oldItems = state.items[action.payload].items;
            const newObjItems =
                oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }
        case CLEAR_CART:
            return {
                totalCount: 0, totalPrice: 0, items: {}
            }
        case REMOVE_CART_ITEM:
            const newItems = {
                ...state.items
            }
            const currentTotalPrice = newItems[action.payload].totalPrice
            const currentTotalCount = newItems[action.payload].items.length
            delete newItems[action.payload]
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }
        default: {
            return state
        }
    }
}