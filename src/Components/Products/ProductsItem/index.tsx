import React from 'react'
import RateStars from "../RateStars";
import ContentLoader from "react-content-loader"
import PlaceholderItems from "./PlaceholderItems";


// @ts-ignore
export default function ProductsItem({name, imageUrl, price, rating}){

    return(
        <div className="product__item mix category-all" data-order="1">
    <a href="#">
    <img
        className='product__item-img'
    src={imageUrl}
    alt='Item'
        />
        </a>
        <div className="product__item-content">
    <div className="product__item-name">
    <a href="#" className="product__item-title">
        {name}
        </a>
        <a className="product__item-category" href="#">
        Site Template
    </a>
    </div>
    <div className="product__item-price">
        {price} грн
    </div>
    </div>
    <div className="product__item-info">
    <a className="product__item-author" href="#">
    <div className="avatar"/>
        <span>Rad</span>
        </a>
        <div className="product__item-star">
        {/*@ts-ignore*/}
        <RateStars rating={rating}/>
    &#8195;({rating})
    </div>
    </div>
    </div>
)
}