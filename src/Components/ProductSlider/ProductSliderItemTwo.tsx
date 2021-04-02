import React from 'react'
import {NavLink} from "react-router-dom";

type PropTypes = {
    imageUrl:string,
    name:string,
    id:number
    author:any,
}

export default function ProductSliderItemTwo(props:PropTypes){
    return(
        <div className="product-slider__inner">
            <div className="product__item">
                <div  className="product__item-img">
                    <img src={props.imageUrl} alt='123' className='product__item-img'/>
                </div>
                <div className="product__item-content">
                    <div className="product__item-name">
                        <div  className="product__item-title">
                            {props.name}
                        </div>
                        <div className="product__item-category">
                            {props.name}
                        </div>
                    </div>
                    <div className="product__item-price">
                        $19
                    </div>
                </div>
                <div className="product__item-info">
                    <NavLink to="/Products" className="ShowMore" >
                        Show More
                    </NavLink>
                </div>
            </div>
        </div>
    )
}