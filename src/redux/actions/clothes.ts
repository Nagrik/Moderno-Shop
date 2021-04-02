import axios from "axios";
import {Dispatch} from "redux";

export const SET_LOADED = 'SET_LOADED'
export const SET_LOADED_PRODUCT = 'SET_LOADED_PRODUCT'
export const SET_LOADED_PROFILE = 'SET_LOADED_PROFILE'
export const SET_CLOTHES = 'SET_CLOTHES'
export const SET_CLOTHES_SLIDER_ONE = 'SET_CLOTHES_SLIDER_ONE'
export const SET_CLOTHES_SLIDER_TWO = 'SET_CLOTHES_SLIDER_TWO'
export const SET_CLOTHES_SLIDER_THIRD = 'SET_CLOTHES_SLIDER_THIRD'
export const SET_CLOTHES_PRODUCT = 'SET_CLOTHES_PRODUCT'
export const SET_AUTHOR = 'SET_AUTHOR'


export type ActionTypeClothes = setLoadedType | setLoadedProductType | setLoadedProfileType
| setClothesType | setClothesSliderOneType | setClothesSliderTwoType | setClothesSliderThirdType
| setClothesProductType | setProfileType

type setLoadedType = {
    type: typeof SET_LOADED,
    payload: boolean
}
export const setLoaded = (payload: boolean): setLoadedType => ({
    type: SET_LOADED,
    payload
})

type setLoadedProductType = {
    type: typeof SET_LOADED_PRODUCT,
    payload: boolean
}
export const setLoadedProduct = (payload: boolean): setLoadedProductType => ({
    type: SET_LOADED_PRODUCT,
    payload
})

type setLoadedProfileType = {
    type: typeof SET_LOADED_PROFILE,
    payload: boolean
}
export const setLoadedProfile = (payload: boolean): setLoadedProfileType => ({
    type: SET_LOADED_PROFILE,
    payload
})

type setClothesType = {
    type: typeof SET_CLOTHES,
    payload: object
}
export const setClothes = (items: Object): setClothesType => ({
    type: SET_CLOTHES,
    payload: items

})


export const fetchClothes = () => (dispatch: Dispatch<ActionTypeClothes>) => {
    dispatch(setLoaded(false))
    axios.get('https://modernoshop-b8052-default-rtdb.firebaseio.com/Clothes.json').then(({data}) => {
        dispatch(setClothes(data))
    })
}

type setClothesSliderOneType = {
    type: typeof SET_CLOTHES_SLIDER_ONE,
    payload: object
}

export const setClothesSliderOne = (items: Object): setClothesSliderOneType => ({
    type: SET_CLOTHES_SLIDER_ONE,
    payload: items

})
export const fetchClothesSliderOne = () => (dispatch: Dispatch<ActionTypeClothes>) => {
    // dispatch(setLoaded(false))
    axios.get('https://modernoshop-b8052-default-rtdb.firebaseio.com/SliderOne.json').then(({data}) => {
        dispatch(setClothesSliderOne(data))
    })
}

type setClothesSliderTwoType = {
    type: typeof SET_CLOTHES_SLIDER_TWO,
    payload: object
}
export const setClothesSliderTwo = (items: Object): setClothesSliderTwoType => ({
    type: SET_CLOTHES_SLIDER_TWO,
    payload: items

})

export const fetchClothesSliderTwo = () => (dispatch: Dispatch<ActionTypeClothes>) => {
    // dispatch(setLoaded(false))
    axios.get('https://modernoshop-b8052-default-rtdb.firebaseio.com/SliderTwo.json').then(({data}) => {
        dispatch(setClothesSliderTwo(data))
    })
}

type setClothesSliderThirdType = {
    type: typeof SET_CLOTHES_SLIDER_THIRD,
    payload: object
}
export const setClothesSliderThird = (items: Object): setClothesSliderThirdType => ({
    type: SET_CLOTHES_SLIDER_THIRD,
    payload: items

})

export const fetchClothesSliderThird = () => (dispatch: Dispatch<ActionTypeClothes>) => {
    // dispatch(setLoaded(false))
    axios.get('https://modernoshop-b8052-default-rtdb.firebaseio.com/SliderThird.json').then(({data}) => {
        dispatch(setClothesSliderThird(data))
    })
}

type setClothesProductType = {
    type: typeof SET_CLOTHES_PRODUCT,
    clothes: object
}

export const setClothesProduct = (clothes: object): setClothesProductType => ({type: SET_CLOTHES_PRODUCT, clothes})


type setProfileType = {
    type: typeof SET_AUTHOR,
    payload: object
}
export const setProfile = (items: Object): setProfileType => ({
    type: SET_AUTHOR,
    payload: items
})

export const fetchProfile = () => (dispatch: Dispatch<ActionTypeClothes>) => {
    dispatch(setLoadedProduct(false))
    axios.get('https://modernoshop-b8052-default-rtdb.firebaseio.com/Clothes/2.json').then(({data}) => {
        dispatch(setProfile(data))
    })
}


