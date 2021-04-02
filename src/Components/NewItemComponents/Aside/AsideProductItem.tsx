import React from 'react'

export interface IsProps  {
    author: any;
    imageUrl:string; name:string; category:string, price:number
}

export default function AsideProductsItem(props:IsProps){
    return(
        <div className="product__item">
            <div className="aside-img">
                <img src={props.imageUrl} alt='123' className='product__item-img'/>
            </div>
            <div className="product__item-content">
                <div className="product__item-name">
                    <div className="product__item-title">
                        {props.name}
                    </div>
                    <div className="product__item-category">
                        {props.category}
                    </div>
                </div>
                <div className="product__item-price">
                    $19
                </div>
            </div>

            <div className="product__item-info">
                <div className="product__item-author">
                    <div className="avatar">
                        <img src={props.author.imageUrl} alt='12' className='avatar'/>
                    </div>
                    <span>{props.author.name}</span>
                </div>
                <div className="product__item-star">

                </div>
            </div>
        </div>
    )
}