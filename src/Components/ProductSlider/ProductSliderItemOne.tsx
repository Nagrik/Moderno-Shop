import React from 'react'
import { NavLink } from 'react-router-dom'
import RateStars from "../Products/RateStars";


type PropTypes = {
    imageUrl:string,
    name:string,
    id:number,
    author:any,
}
export default function ProductSliderItemOne(props:PropTypes){
    return(
        <div className="product-slider__inner">
            <div className="product__item">
                <NavLink to={"/Product/" + props.id} className="product__item-img" href="/">
            <img src={props.imageUrl} alt='123' className='product__item-img'/>
                </NavLink>
                <div className="product__item-content">
                    <div className="product__item-name">
                        <NavLink to={"/Product/" + props.id} className="product__item-title" href="/">
                            {props.name}
                        </NavLink>
                        <div className="product__item-category">
                            {props.name}
                        </div>
                    </div>
                    <div className="product__item-price">
                        $19
                    </div>
                </div>
                <div className="product__item-info">
                    <NavLink to={"/Profile/" + props.id} className="product__item-author" href="/">
                            <img src={props.author.imageUrl} alt='' className="avatar"/>
                        <span>{props.author.name}</span>
                    </NavLink>

                </div>
            </div>
        </div>
    )
}