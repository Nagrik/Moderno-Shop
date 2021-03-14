import React from 'react'
import RateStars from "../RateStars";


type PropsType = {
    name: string,
    imageUrl: string,
    price: number,
    rating: number
}
export default function ProductsItem(props: PropsType) {

    return (
        <div className="product__item mix category-all" data-order="1">
            <a href="#">
                <img
                    className='product__item-img'
                    src={props.imageUrl}
                    alt='Item'
                />
            </a>
            <div className="product__item-content">
                <div className="product__item-name">
                    <a href="#" className="product__item-title">
                        {props.name}
                    </a>
                    <a className="product__item-category" href="#">
                        Site Template
                    </a>
                </div>
                <div className="product__item-price">
                    {props.price} грн
                </div>
            </div>
            <div className="product__item-info">
                <a className="product__item-author" href="#">
                    <div className="avatar"/>
                    <span>Rad</span>
                </a>
                <div className="product__item-star">
                    <RateStars rating={props.rating}/>
                    &#8195;({props.rating})
                </div>
            </div>
        </div>
    )
}