import React from 'react'
import BreadCrumbs from "../Components/NewItemComponents/BreadCrumbs";
import Aside from "../Components/NewItemComponents/Aside/Aside";
import {fetchNewProfile, fetchProductsItems} from "../redux/actions/newItems";
import {useDispatch, useSelector} from "react-redux";
import PlaceholderItems from "../Components/Products/ProductsItem/PlaceholderItems";
import NewProductItem from "../Components/NewItemComponents/ProductItem";
import OpenProductItems from "../Components/NewItemComponents/OpenProductsItem";

export default function NewItemPage({clothesItem}:any) {
    const [list, setList] = React.useState(false);
    const dispatch = useDispatch()
    type RootState = {
        aside:any,
        mainItems:object,
        isLoaded:boolean,
        clothes:any
    }
    const selectClothes = ({clothes}: RootState) => clothes.items
    const selectLoaded = ({aside}:RootState) => aside.isLoaded

    const items = useSelector(selectClothes)
    const isLoaded = useSelector(selectLoaded)

    React.useEffect(() => {
        // @ts-ignore
        dispatch(fetchProductsItems())
        dispatch(fetchNewProfile())

    }, [])

    const listChangeHandler = () => {
        setList(true)
    }
    const listChangeHandlerBack = () => {
        setList(false)
    }


    return (
        <div>
        <div className="wrapper">
            <div className="content page-content">
                <BreadCrumbs/>
                <section className="product-page">
                    <div className="container">
                        <div className="product-page__inner">

                                <Aside/>

                            <div className="product-page-content">

                                <div className="product-page-filter">
                                    <div className="product-page__filter-sort">
                                        <button className="icon-sort-amount-desc"/>
                                        Sort by: New Items
                                        <button className="icon-move-vertical-alt1 "/>
                                    </div>
                                    <div>
                                        <button className="icon-table active" onClick={listChangeHandlerBack}/>
                                        <button className="icon-list" onClick={listChangeHandler}/>
                                    </div>
                                </div>
                                <div className="product-page__items">

                                    {list ? items.map((obj:any) => (
                                            <OpenProductItems key={Math.random()} {...obj} items={clothesItem}/>)) :
                                        isLoaded ? items.map((obj:any) => (
                                            <NewProductItem key={Math.random()} {...obj} items={clothesItem} />)) : Array(10).fill(0).map((_, index) => (<PlaceholderItems key={index}/>))
                                    }

                                </div>
                                <div className="pagination">
                                    <ul className="pagination__list">
                                        <li><a className="active" href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
        </div>
    )
}