import React, {useEffect} from 'react'
import Links from "../Components/ProductComponents/Links";

import MoreProducts from "../Components/ProductComponents/MoreProducts";
import BreadCrumbsProduct from "../Components/ProductComponents/BreadCrumbsProduct";
import {TabContentTitle} from "../Components/ProductComponents/TabContentTitle";

import {NavLink} from "react-router-dom";
import ProductsAside from "../Components/Products/ProductsAside";

 export default function ProductPage({clothesItem}:any) {
    return (
        <div className="wrapper">
            <div className="content page-content">
                <BreadCrumbsProduct/>
                <section className="product-one">
                    <div className="container">
                        <div className="product-one__inner">
                            <div className="product-one__content">
                                <div className="product-one__img-inner">
                                    <div className="product-one__img">
                                        <img src={clothesItem.imageUrl} alt='' className="product-one__img"/>
                                    </div>
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
                            </div>
                            <ProductsAside items={clothesItem}/>

                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

