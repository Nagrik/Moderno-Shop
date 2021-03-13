import React from 'react'
import RateStars from "../Products/RateStars";

// @ts-ignore
export default function NewProductItem({imageUrl, name,category}){
    return(

            <div className="product__item">
                <a href="#" className="product__item-img">
                    <img src={imageUrl} alt='' className='product__item-img'/>
                </a>
                <div className="product__item-content">
                    <div className="product__item-name">
                        <a href="#" className="product__item-title">
                            {name}
                        </a>
                        <a className="product__item-category" href="#">
                            {category}
                        </a>
                        <div className="product__item-text">
                            Pimply dummy text of the printing and typesetting industry.
                        </div>
                    </div>
                    <div className="product__item-price">
                        $19
                        <span>Sales ( 14 ) </span>
                    </div>

                </div>

                <div className="product__item-info">
                    <a className="product__item-author" href="#">
                        <div className="avatar"/>
                        <span>Rad</span>
                    </a>
                    <div className="product__item-star">
                        {/*@ts-ignore*/}
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