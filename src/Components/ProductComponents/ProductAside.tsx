import React from 'react'
import Seller from '../../img/ava.jpg'

export default function ProductAside(){
    return(
        <div className="product-one__aside">
            <div className="aside__item product__price">
                <div className="aside__title">
                    Product Price
                </div>
                <div className="price__box">
                    <div className="price__product">$59.00</div>
                </div>

                <button className="icon-shopping-basket">Add to Cart</button>
                <button className="icon-heart">Add To Favourites</button>
                <button>Buy Now</button>

            </div>
            <div className="aside__item">

                <div className="aside__title">
                    Product Author
                </div>

                <div className="product-author__box">
                    <div className="author__avatar">
                        <img src={Seller} alt="" className='author__avatar'/>
                    </div>
                    <div className="author__info">
                        <div className="author__name">Roman Nahryshko</div>
                        <a className="author-info__link" href="#">View Profile</a>
                    </div>
                </div>
                <ul className="author__awards-list">
                    <li className="icon-neutral"/>
                    <li className="icon-svg"/>
                    <li className="icon-power"/>
                    <li className="icon-foursquare"/>
                    <li className="icon-coin-dollar"/>
                </ul>
            </div>

            <div className="aside__item">
                <div className="aside__item-sales">
                    <span>05</span> Sales
                </div>
            </div>

            <div className="aside__item sales-number">
                <div className="aside__title">
                    Product Information
                </div>
                <div className="information__line">
                    <span>Released On: </span> 1 January, 2016
                </div>
                <div className="information__line">
                    <span> Last Update:</span> 20 April, 2016
                </div>
                <div className="information__line">
                    <span> Download:</span> 613
                </div>
                <div className="information__line">
                    <span>Version: </span>1.1
                </div>
                <div className="information__line">
                    <span>Compatibility:</span> Wordpress 4+
                </div>
                <div className="information__line">
                    <span>Compatible Browsers:</span>
                </div>

            </div>


        </div>
    )
}