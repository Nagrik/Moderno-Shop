import React, {useEffect} from 'react'
import Links from "../Components/ProductComponents/Links";

import MoreProducts from "../Components/ProductComponents/MoreProducts";
import ProductAside from "../Components/ProductComponents/ProductAside";
import BreadCrumbsProduct from "../Components/ProductComponents/BreadCrumbsProduct";
import {TabContentTitle} from "../Components/ProductComponents/TabContentTitle";
import axios from "axios";
import {connect, useDispatch} from "react-redux";
import { setClothesProduct} from "../redux/actions/clothes";

 function ProductPage(props:any) {
    React.useEffect( () => {
        axios.get('https://modernoshop-b8052-default-rtdb.firebaseio.com/Clothes/2.json')
            .then(response => {
                props.setClothesProduct(response.data)
            })
    }, [])

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
                                        <img src={props.clothes.imageUrl} alt='' className="product-one__img"/>
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
                                <MoreProducts/>
                            </div>
                            <ProductAside clothesItems={props.clothes} onCLickAddClothes={() => alert('123')}/>

                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

const mapStateToProps = (state:any) => ({
    clothes:state.clothes.clothes
})

export default connect(mapStateToProps, {setClothesProduct})(ProductPage)