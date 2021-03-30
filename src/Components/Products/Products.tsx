import React from 'react'
import Categories from "./Categories/Categories";
import ProductsItem from "./ProductsItem/index";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from '../../redux/actions/filters'
import {fetchClothes, fetchProfile} from "../../redux/actions/clothes";
import PlaceholderItems from "./ProductsItem/PlaceholderItems";
import {NavLink} from 'react-router-dom';

interface RootState {
    clothes: any
    items: Array<object>
    isLoaded: boolean
    filters: any,
    cart:any
}

const selectClothes = ({clothes}: RootState) => clothes.items
const selectLoading = ({clothes}: RootState) => clothes.isLoaded
const selectFilters = ({filters}: RootState) => filters
const selectAuthor = ({clothes}: any) => clothes

export default function Products() {
    const dispatch = useDispatch()

    const items = useSelector(selectClothes)
    const isLoaded = useSelector(selectLoading)
    const {category} = useSelector(selectFilters)
    const author = useSelector(selectAuthor)



    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])
    React.useEffect(() => {
        // @ts-ignore
        dispatch(fetchClothes())
        dispatch(fetchProfile())
    }, [category])

    const categoryNames = ['Hoodie', 'T-Short', 'Pants', 'Glasses']
    return (
        <section className="products">
            <div className="products__wrapper">
                <div className="container-fluid">
                    <div className="products__title title">
                        Let’s Check Out Our Newest Release Prodcuts
                    </div>
                    <div className="products__inner">
                        <div className="products__inner-btn">
                            <Categories
                                activeCategory={category}
                                onClickItem={onSelectCategory}
                                categoryNames={categoryNames}/>
                        </div>
                        <div className="products__inner-box">
                            {isLoaded ? items.map((obj: object) => (
                                //@ts-ignore
                                <ProductsItem  author={author} key={obj.id} {...obj}/>))
                                : Array(10).fill(0).map((_, index) => (
                                <PlaceholderItems key={index}/>))}
                        </div>

                    </div>
                    <div className="products__button-btn">
                        <button type="button" data-filter=".category-new">All New Items</button>
                        <button type="button" data-filter=".category-popular">Popular Items</button>
                    </div>
                </div>
            </div>
        </section>
    )
}