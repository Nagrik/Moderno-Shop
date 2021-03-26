import React from 'react'
import RateStars from "../../Products/RateStars";

export interface IsProps  {
    author: any;
    imageUrl:string; name:string; category:string, price:number
}

//@ts-ignore
export default function AsideProductsItem(props:IsProps){
    return(
        <div className="product__item">
            <a href="#" className="aside-img">
                <img src={props.imageUrl} alt='123' className='product__item-img'/>
            </a>
            <div className="product__item-content">
                <div className="product__item-name">
                    <a href="#" className="product__item-title">
                        {props.name}
                    </a>
                    <a className="product__item-category" href="#">
                        {props.category}
                    </a>
                </div>
                <div className="product__item-price">
                    $19
                </div>
            </div>

            <div className="product__item-info">
                <a className="product__item-author" href="#">
                    <div className="avatar">
                        <img src={props.author.imageUrl} alt='12' className='avatar'/>
                    </div>
                    <span>{props.author.name}</span>
                </a>
                <div className="product__item-star">

                </div>
            </div>
        </div>
    )
}