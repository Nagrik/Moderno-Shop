import React from 'react'
import RateStars from "../../Products/RateStars";

//@ts-ignore
export default function AsideProductsItem({imageUrl, name, category}){
    return(
        <div className="product__item">
            <a href="#" className="aside-img">
                <img src={imageUrl} alt='123' className='product__item-img'/>
            </a>
            <div className="product__item-content">
                <div className="product__item-name">
                    <a href="#" className="product__item-title">
                        {name}
                    </a>
                    <a className="product__item-category" href="#">
                        {category}
                    </a>
                </div>
                <div className="product__item-price">
                    $19
                </div>
            </div>

            <div className="product__item-info">
                <a className="product__item-author" href="#">
                    <div className="avatar">
                    </div>
                    <span>UserName</span>
                </a>
                <div className="product__item-star">
                    <span className="product__item-starnum">(05)</span>
                </div>
            </div>
        </div>
    )
}