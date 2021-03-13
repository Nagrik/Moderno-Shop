
import axios from "axios";

export const setLoaded = (payload:boolean) => ({
    type: 'SET_LOADED',
    payload
})

export const setClothes = (items:Object) => ({
    type:'SET_CLOTHES',
    payload:items

})


export const fetchClothes = () => (dispatch:any) =>  {
    dispatch(setLoaded(false))
    axios.get('https://modernoshop-b8052-default-rtdb.firebaseio.com/Clothes.json').then(({data}) => {
        dispatch(setClothes(data))
    })
}


export const setClothesSliderOne = (items:Object) => ({
    type:'SET_CLOTHES_SLIDER_ONE',
    payload:items

})

export const fetchClothesSliderOne = () => (dispatch:any) =>  {
    // dispatch(setLoaded(false))
    axios.get('https://modernoshop-b8052-default-rtdb.firebaseio.com/SliderOne.json').then(({data}) => {
        dispatch(setClothesSliderOne(data))
    })
}
export const setClothesSliderTwo = (items:Object) => ({
    type:'SET_CLOTHES_SLIDER_TWO',
    payload:items

})

export const fetchClothesSliderTwo = () => (dispatch:any) =>  {
    // dispatch(setLoaded(false))
    axios.get('https://modernoshop-b8052-default-rtdb.firebaseio.com/SliderTwo.json').then(({data}) => {
        dispatch(setClothesSliderTwo(data))
    })
}
export const setClothesSliderThird = (items:Object) => ({
    type:'SET_CLOTHES_SLIDER_THIRD',
    payload:items

})

export const fetchClothesSliderThird = () => (dispatch:any) =>  {
    // dispatch(setLoaded(false))
    axios.get('https://modernoshop-b8052-default-rtdb.firebaseio.com/SliderThird.json').then(({data}) => {
        dispatch(setClothesSliderThird(data))
    })
}

