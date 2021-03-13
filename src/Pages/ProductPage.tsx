import React from 'react'
import Header from "../Components/Header/Header";
import {Breadcrumb} from "antd";
import Footer from "../Components/Footer/Footer";

export default function ProductPage(){
    return(
        <div className="wrapper">
            <div className="content page-content">
                <div className="breadcrumbs">
                    <div className="container">
                        <div className="breadcrumbs__inner">
                            <ul className="breadcrumbs__list">
                                <div>
                                    <Breadcrumb>
                                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                                        <Breadcrumb.Item>
                                            <a href="">Products</a>
                                        </Breadcrumb.Item>
                                        <Breadcrumb.Item>
                                            <a href="">Product</a>
                                        </Breadcrumb.Item>
                                    </Breadcrumb>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>


                <section className="product-one">
                    <div className="container">
                        <div className="product-one__inner">
                            <div className="product-one__content">
                                <div className="product-one__img-inner">
                                    <div className="product-one__img"/>
                                </div>
                                <div className="product-one__title">
                                    GTBuilder - Construction & Building WordPress Theme
                                </div>
                                <p className="product-one_text">
                                    Bmply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                    galley of type and scrambled it to make a type specimen book. It has survived noning
                                    essentially unchanged.
                                </p>
                                <div className="product-one__box">
                                    <div className="product-one__link">
                                        <a className="link-live" href="#">Live Preview</a>
                                        <a className="link-screenshots" href="#">Screenshots</a>
                                        <a className="link-documentation" href="#">Documentation</a>
                                    </div>
                                    <div className="product-one__social">
                                        <a className="icon-facebook" href="#"/>
                                        <a className="icon-twitter" href="#"/>
                                        <a className="icon-linkedin2" href="#"/>
                                        <a className="icon-pinterest" href="#"/>
                                    </div>
                                </div>
                                <div className="product-one__tabs">
                                    <div className="tabs">
                                        <span className="tab active" data-id="1">Item Features </span>
                                        <span className="tab" data-id="2">Comments</span>
                                        <span className="tab" data-id="3">Reviews</span>
                                        <span className="tab" data-id="4">Support</span>
                                    </div>

                                    <div className="tab_content">
                                        <div className="tab-item active-tab" id="1">
                                            <ul className="tab-items__list">
                                                <li className="angle-right">Printing and typesetting industry</li>
                                                <li className="angle-right">Bhen an unknown printe</li>
                                                <li className="angle-right">Handard dummy text</li>
                                                <li className="angle-right">Desktop publishing software</li>
                                                <li className="angle-right">Bhen an unknown printe</li>
                                                <li className="angle-right">Printing and typesetting industry</li>
                                                <li className="angle-right">Bhen an unknown printe</li>
                                                <li className="angle-right">Handard dummy text</li>
                                            </ul>
                                        </div>
                                        <div className="tab-item active-tab" id="2">
                                            <ul className="tab-items__list">
                                                <li className="angle-right">Printing and typesetting industry</li>
                                                <li className="angle-right">Bhen an unknown printe</li>
                                                <li className="angle-right">Handard dummy text</li>
                                                <li className="angle-right">Desktop publishing software</li>
                                                <li className="angle-right">Bhen an unknown printe</li>
                                                <li className="angle-right">Printing and typesetting industry</li>
                                                <li className="angle-right">Bhen an unknown printe</li>
                                                <li className="angle-right">Handard dummy text</li>
                                            </ul>
                                        </div>

                                        <div className="tab-item active-tab" id="3">
                                            <ul className="tab-items__list">
                                                <li className="angle-right">Printing and typesetting industry</li>
                                                <li className="angle-right">Bhen an unknown printe</li>
                                                <li className="angle-right">Handard dummy text</li>
                                                <li className="angle-right">Desktop publishing software</li>
                                                <li className="angle-right">Bhen an unknown printe</li>
                                                <li className="angle-right">Printing and typesetting industry</li>
                                                <li className="angle-right">Bhen an unknown printe</li>
                                                <li className="angle-right">Handard dummy text</li>
                                            </ul>
                                        </div>

                                        <div className="tab-item active-tab" id="4">
                                            <ul className="tab-items__list">
                                                <li className="angle-right">Printing and typesetting industry</li>
                                                <li className="angle-right">Bhen an unknown printe</li>
                                                <li className="angle-right">Handard dummy text</li>
                                                <li className="angle-right">Desktop publishing software</li>
                                                <li className="angle-right">Bhen an unknown printe</li>
                                                <li className="angle-right">Printing and typesetting industry</li>
                                                <li className="angle-right">Bhen an unknown printe</li>
                                                <li className="angle-right">Handard dummy text</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div className="product-one__more">
                                    <div className="product-one__more-title">
                                        More Product by PsdBosS
                                    </div>
                                    <div className="product-one__more-icons">
                                        <div className="product-one__more-icon productmini">
                                            <div className="productmini_img"/>
                                            <div className="productmini_info">
                                                <div className="productmini_name">Grand Ballet - Dance</div>
                                                <div className="productmini_theme">PSD Template</div>
                                                <div className="productmini_price">$12</div>
                                            </div>
                                        </div>

                                        <div className="product-one__more-icon productmini">
                                            <div className="productmini_img"/>
                                            <div className="productmini_info">
                                                <div className="productmini_name">Grand Ballet - Dance</div>
                                                <div className="productmini_theme">PSD Template</div>
                                                <div className="productmini_price">$12</div>
                                            </div>
                                        </div>

                                        <div className="product-one__more-icon productmini">
                                            <div className="productmini_img"/>
                                            <div className="productmini_info">
                                                <div className="productmini_name">Grand Ballet - Dance</div>
                                                <div className="productmini_theme">PSD Template</div>
                                                <div className="productmini_price">$12</div>
                                            </div>
                                        </div>

                                        <div className="product-one__more-icon productmini">
                                            <div className="productmini_img"/>
                                            <div className="productmini_info">
                                                <div className="productmini_name">Grand Ballet - Dance</div>
                                                <div className="productmini_theme">PSD Template</div>
                                                <div className="productmini_price">$12</div>
                                            </div>
                                        </div>

                                        <div className="product-one__more-icon productmini">
                                            <div className="productmini_img"/>
                                            <div className="productmini_info">
                                                <div className="productmini_name">Grand Ballet - Dance</div>
                                                <div className="productmini_theme">PSD Template</div>
                                                <div className="productmini_price">$12</div>
                                            </div>
                                        </div>


                                        <div className="product-one__more-icon productmini">
                                            <div className="productmini_img"/>
                                            <div className="productmini_info">
                                                <div className="productmini_name">Grand Ballet - Dance</div>
                                                <div className="productmini_theme">PSD Template</div>
                                                <div className="productmini_price">$12</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="product-one__aside">
                                <div className="aside__item product__price">
                                    <div className="aside__title">
                                        Product Price
                                    </div>
                                    <div className="price__box">
                                        <div className="price__product">$59.00</div>
                                        <form>
                                            <select>
                                                <option>Regular</option>
                                                <option>Premium</option>
                                            </select>
                                        </form>
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
                                            <img src="img/psdBossr.jpg" alt=""/>
                                        </div>
                                        <div className="author__info">
                                            <div className="author__name">PsdBoss</div>
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
                                        {/*<br>*/}
                                        {/*    IE9, IE10, IE11, Firefox, Safari,*/}
                                        {/*    Opera, Chrome*/}
                                        {/*</br>*/}
                                        </div>

                                </div>


                            </div>

                        </div>
                    </div>
                </section>

            </div>
        </div>
)
}