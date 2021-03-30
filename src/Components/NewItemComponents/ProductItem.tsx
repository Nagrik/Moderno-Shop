import React from 'react'
import RateStars from "../Products/RateStars";
import {NavLink} from "react-router-dom";

export interface IsProps  {
    author: any;
    imageUrl:string; name:string; category:string, price:number
}

export default function NewProductItem(props:  IsProps){
    // console.log(props.author)
    const id = props.author.id - 1
    return(
            <div className="product__item">
                <NavLink to={'/NewProduct/' + id}>
                    <img src={props.imageUrl} className='ProductsItemImage' alt='123'/>
                </NavLink>
                <div className="product__item-content">
                    <div className="product__item-name">
                        <NavLink to={'/NewProduct/' + id} href="#" className="product__item-title">
                            {props.name}
                        </NavLink>
                        <div className="product__item-category">
                            {props.category}
                        </div>
                        <div className="product__item-text">
                            Pimply dummy text of the printing and typesetting industry.
                        </div>
                    </div>
                    <div className="product__item-price">
                        {props.price} $
                        <span>Sales ( 14 ) </span>
                    </div>

                </div>

                <div className="product__item-info">
                    <div className="product__item-author" >
                        <div className="avatar">
                            <img src={props.author.imageUrl} alt='' className="avatar"/>
                        </div>
                        <span>{props.author.name}</span>
                    </div>
                    <div className="product__item-star">
                        <RateStars rating={5}/>
                    </div>
                    <div className="product__item-list">
                        <a className="icon-bubble2" href="#">(<span>10</span>)</a>
                        <div className="icon-heart">(<span>20</span>)</div>
                    </div>
                </div>
            </div>

    )
}