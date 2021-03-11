import React from 'react'
import first from "../../img/Carousel/1.jpg";

// @ts-ignore
export default function ProductSliderItemThird({imageUrl, name}){
    const [image, setImage] = React.useState([1,2,3]);
    return(
        <div className="product-slider__inner">
            <div className="product__item">
                <a className="product__item-img" href="/">
            <img src={imageUrl} alt='123' className='product__item-img'/>
                </a>
                <div className="product__item-content">
                    <div className="product__item-name">
                        <a className="product__item-title" href="/">
                            {name}
                        </a>
                        <a className="product__item-category" href="/">
                            {name}
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