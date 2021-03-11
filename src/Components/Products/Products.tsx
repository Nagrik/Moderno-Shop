import React from 'react'
import Categories from "./Categories/Categories";
import ProductsItem from "./ProductsItem/index";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from '../../redux/actions/filters'
import {fetchClothes} from "../../redux/actions/clothes";
import PlaceholderItems from "./ProductsItem/PlaceholderItems";


// @ts-ignore
export default function Products() {
    const dispatch = useDispatch()
// @ts-ignore
    const items = useSelector(({clothes}) => clothes.items)
    // @ts-ignore
    const isLoaded = useSelector(({clothes}) => clothes.isLoaded)
// @ts-ignore
    const {category, sortBy} = useSelector(({filters}) => filters)

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    },[])
    React.useEffect(() => {
        // @ts-ignore
        dispatch(fetchClothes())
    }, [category])

    const categoryNames = ['Hoodie', 'T-Short', 'Pants', 'Glasses']
    // @ts-ignore
    return (
        <section className="products">
            <div className="products__wrapper">
                <div className="container-fluid">
                    <div className="products__title title">
                        Let’s Check Out Our Newest Release Prodcuts
                    </div>
                    <div className="products__inner">
                        <div className="products__inner-btn">
                            {/*@ts-ignore*/}
                            <Categories
                                //@ts-ignore
                                activeCategory={category}
                                onClickItem={onSelectCategory}
                                categoryNames={categoryNames}/>
                        </div>
                        <div className="products__inner-box">
                            {/*@ts-ignore*/}
                            {isLoaded ? items.map((obj) => (
                                //@ts-ignore
                                <ProductsItem key={obj.id} {...obj} />)) : Array(10).fill(0).map((_, index) => (<PlaceholderItems key={index}/>))}

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