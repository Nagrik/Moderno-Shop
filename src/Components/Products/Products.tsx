import React from 'react'
import Categories from "./Categories/Categories";
import ProductsItem from "./ProductsItem";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from '../../redux/actions/filters'

// @ts-ignore
export default function Products() {
    const dispatch = useDispatch()
// @ts-ignore
    const items = useSelector(({clothes}) => clothes.items)
// @ts-ignore
    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    },[])

    const category = ['WordPress', 'Joomla', 'Plugins', 'Component', 'PSD']
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
                                onClickItem={onSelectCategory}
                                category={category}/>
                        </div>
                        <div className="products__inner-box">
                            {/*@ts-ignore*/}
                            {items.map((obj) => (
                                //@ts-ignore
                                <ProductsItem key={obj.id} {...obj}/>
                            ))}
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