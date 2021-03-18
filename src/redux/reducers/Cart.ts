
type InitialStateType = {
    items: any,
    totalPrice:number,
    totalCount:number
}

const initialState:InitialStateType= {
    items: {},
    totalPrice:0,
    totalCount:0
}

export const cartReducer = (state = initialState, action:any):InitialStateType => {
    switch (action.type){
        case 'ADD_PIZZA_CART':
            return {
                ...state,
                items:{
                    [action.payload.id]:[
                        ...state.items[action.payload.id],
                        action.payload
                    ]
                }
                }

        default: {
            return state
        }
    }
}