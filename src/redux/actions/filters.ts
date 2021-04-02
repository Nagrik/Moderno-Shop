export const SET_SORT_BY = 'SET_SORT_BY'
export const SET_CATEGORY = 'SET_CATEGORY'


export type ActionTypeFilters = setSortByType | setCategoryType

type setSortByType = {
    type: typeof SET_SORT_BY,
    payload:string,
}

export const setSortBy = (name:string):setSortByType => ({
    type:SET_SORT_BY,
    payload: name
})


type setCategoryType = {
    type: typeof SET_CATEGORY,
    payload:number
}
export const setCategory = (catIndex:number):setCategoryType => ({
    type:SET_CATEGORY,
    payload: catIndex
})

//
// export const setCategoryTab = (catIndex:number) => ({
//     type:"SET_CATEGORY_TAB",
//     payload: catIndex
// })