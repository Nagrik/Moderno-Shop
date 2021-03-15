import React, {useEffect} from 'react'
import Links from "../Components/ProductComponents/Links";

import MoreProducts from "../Components/ProductComponents/MoreProducts";
import ProductAside from "../Components/ProductComponents/ProductAside";
import BreadCrumbsProduct from "../Components/ProductComponents/BreadCrumbsProduct";
import {setCategoryTab} from "../redux/actions/filters";
import {useDispatch, useSelector} from "react-redux";
import {fetchClothes} from "../redux/actions/clothes";
import {TabContentTitle} from "../Components/ProductComponents/TabContentTitle";

export default function ProductPage() {

    type RootState = {
        filters:any
    }

    const dispatch = useDispatch()
    const tabsCategory: Array<string> = ['Item Features', 'Comments', 'Reviews', 'Support']
    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategoryTab(index))
    },[])

    const selectFilters = ({filters}:RootState) => filters
    const {categoryTab} = useSelector(selectFilters)


    return (
        <div className="wrapper">
            <div className="content page-content">
                <BreadCrumbsProduct/>
                <section className="product-one">
                    <div className="container">
                        <div className="product-one__inner">
                            <div className="product-one__content">
                                <div className="product-one__img-inner">
                                    <div className="product-one__img"/>
                                </div>
                                <div className="product-one__title">
                                    GTBuilder - Construction & Building WordPress Theme
                                </div>
                                <p className="product-one_text">
                                    Bmply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                    galley of type and scrambled it to make a type specimen book. It has survived noning
                                    essentially unchanged.
                                </p>
                                <Links/>
                                    <TabContentTitle/>
                                <MoreProducts/>
                            </div>
                            <ProductAside/>

                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}