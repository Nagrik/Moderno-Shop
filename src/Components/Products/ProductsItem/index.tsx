import React from 'react'
import RateStars from "../RateStars";
import {NavLink} from "react-router-dom";


type PropsType = {
    name: string,
    imageUrl: string,
    price: number,
    rating: number
    id:number,
    author:string
}
export default function ProductsItem(props: PropsType) {

    return (
        <div className="product__item mix category-all" data-order="1">
            <NavLink to={'/Product/'+ props.id}>
            <img
                    className='product__item-img'
                    src={props.imageUrl}
                    alt='Item'
                />
            </NavLink>
            <div className="product__item-content">
                <div className="product__item-name">
                    <NavLink to={'/Product/' + props.id} href="#" className="product__item-title">
                        {props.name}
                    </NavLink>
                    <div className="product__item-category">
                        Site Template
                    </div>
                </div>
                <div className="product__item-price">
                    {props.price} грн
                </div>
            </div>
            <div className="product__item-info">
                <NavLink to={'/Profile/' + props.id} className="product__item-author">
                    <div>
                        {/*@ts-ignore*/}
                        <img src={props.author.imageUrl} alt='' className="avatar"/>
                    </div>
                    {/*@ts-ignore*/}
                    <span>{props.author.name}</span>
                </NavLink>
                <div className="product__item-star">
                    <RateStars rating={props.rating}/>
                    &#8195;({props.rating})
                </div>
            </div>
        </div>
    )
}