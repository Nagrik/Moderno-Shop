
import axios from "axios";

export const setLoaded = (payload:boolean) => ({
    type: 'SET_LOADED',
    payload
})

// @ts-ignore
export const setClothes = items => ({
    type:'SET_CLOTHES',
    payload:items

})


export const fetchClothes = () => (dispatch:any) =>  {
    dispatch(setLoaded(false))
    axios.get('https://modernoshop-b8052-default-rtdb.firebaseio.com/Clothes.json').then(({data}) => {
        dispatch(setClothes(data))
    })
}


// @ts-ignore
export const setClothesSliderOne = items => ({
    type:'SET_CLOTHES_SLIDER_ONE',
    payload:items

})

export const fetchClothesSliderOne = () => (dispatch:any) =>  {
    // dispatch(setLoaded(false))
    axios.get('https://modernoshop-b8052-default-rtdb.firebaseio.com/SliderOne.json').then(({data}) => {
        dispatch(setClothesSliderOne(data))
    })
}
// @ts-ignore
export const setClothesSliderTwo = items => ({
    type:'SET_CLOTHES_SLIDER_TWO',
    payload:items

})

export const fetchClothesSliderTwo = () => (dispatch:any) =>  {
    // dispatch(setLoaded(false))
    axios.get('https://modernoshop-b8052-default-rtdb.firebaseio.com/SliderTwo.json').then(({data}) => {
        dispatch(setClothesSliderTwo(data))
    })
}
// @ts-ignore
export const setClothesSliderThird = items => ({
    type:'SET_CLOTHES_SLIDER_THIRD',
    payload:items

})

export const fetchClothesSliderThird = () => (dispatch:any) =>  {
    // dispatch(setLoaded(false))
    axios.get('https://modernoshop-b8052-default-rtdb.firebaseio.com/SliderThird.json').then(({data}) => {
        dispatch(setClothesSliderThird(data))
    })
}

