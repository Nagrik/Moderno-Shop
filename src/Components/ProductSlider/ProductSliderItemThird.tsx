import React from 'react'
import first from "../../img/Carousel/1.jpg";


type PropTypes = {
    imageUrl:string,
    name:string,
    id:number
}


export default function ProductSliderItemThird(props:PropTypes){
    return(
        <div className="product-slider__inner">
            <div className="product__item">
                <a className="product__item-img" href="/">
            <img src={props.imageUrl} alt='123' className='product__item-img'/>
                </a>
                <div className="product__item-content">
                    <div className="product__item-name">
                        <a className="product__item-title" href="/">
                            {props.name}
                        </a>
                        <a className="product__item-category" href="/">
                            {props.name}
                        </a>
                    </div>
                    <div className="product__item-price">
                        $19
                    </div>
                </div>
                <div className="product__item-info">
                    <a className="product__item-author" href="/">
                        <div className="avatar"/>
                        <span>Radius-theme</span>
                    </a>

                </div>
            </div>
        </div>
    )
}