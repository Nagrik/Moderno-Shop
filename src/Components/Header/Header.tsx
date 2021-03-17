import React from 'react'
import logo from "../../img/logo.png";
import mess from "../../img/basket/mess.jpg";
import mess2 from "../../img/basket/mass2.jpg";
import mess3 from "../../img/basket/mass3.jpg";
import bassket from "../../img/basket/basket_git.png";
import bassketTelegram from "../../img/basket/basket_telegram.png";
import userPro from "../../img/user-pro.jpg";
import { NavLink } from 'react-router-dom';

export default function Header(){
    return(
        <header className="header">
            <div className="header__top">
                <div className="container">

                    <div className="header__top-inner">
                        <div className="header__logo">
                            <NavLink to='/Home'>
                                <img src={logo} alt="Logo" width="150" height="50"/>
                            </NavLink>
                        </div>

                        <div className="header__text">
                            <a href="#">
                                <span>Need help?</span>
                            </a>
                            Talk to an expert:
                            <a className="header__phone" href="tel:61383766284">+61 3 8376 6284</a>
                        </div>

                        <div className="header__box">
                            <div className="notification__box header__btn-login--off">
                                <a className="notification header__circle active icon-bell" href="#">
                                    <span>8</span>
                                </a>
                                <div className="circle__menu notification__menu">
                                    <a href="#" className="circle__item icon-bell icons-color">
                                        <img className="circle__img" src={mess} alt=""/>

                                        <div className="circle__info">
                                            <div className="circle__info-theme">Need WP Help!</div>
                                            <div className="circle__info-date">2 Nov, 2016</div>
                                        </div>
                                    </a>

                                    <a href="#" className="circle__item icon-bell">
                                        <img className="circle__img" src={mess2} alt=""/>

                                        <div className="circle__info">
                                            <div className="circle__info-theme">Need WP Help!</div>
                                            <div className="circle__info-date">6 Nov, 2016</div>
                                        </div>
                                    </a>

                                    <a href="#" className="circle__item icon-bell">
                                        <img className="circle__img" src={mess3} alt=""/>

                                        <div className="circle__info">
                                            <div className="circle__info-theme">Need WP Help!</div>
                                            <div className="circle__info-date">26 Nov, 2016</div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="message__box header__btn-login--off">
                                <a className="message header__circle active icon-envelop" href="#">
                                    <span>5</span>
                                </a>
                                <div className="circle__menu message__menu">
                                    <a href="#" className="circle__item icon-envelop icons-color">
                                        <img className="circle__img" src={mess3} alt=""/>

                                        <div className="circle__info">
                                            <div className="circle__info-name">Kazi Fahim</div>
                                            <div className="circle__info-theme">Need WP Help!</div>
                                            <div className="circle__info-date">2 Nov, 2016</div>
                                        </div>
                                    </a>

                                    <a href="#" className="circle__item icon-envelop">
                                        <img className="circle__img" src={mess2} alt=""/>

                                        <div className="circle__info">
                                            <div className="circle__info-name">Richi Lenal</div>
                                            <div className="circle__info-theme">Need WP Help!</div>
                                            <div className="circle__info-date">6 Nov, 2016</div>
                                        </div>
                                    </a>

                                    <a href="#" className="circle__item icon-undo2">
                                        <img className="circle__img" src={mess} alt=""/>

                                        <div className="circle__info">
                                            <div className="circle__info-name">PsdBosS</div>
                                            <div className="circle__info-theme">Need WP Help!</div>
                                            <div className="circle__info-date">26 Nov, 2016</div>
                                        </div>
                                    </a>
                                </div>
                            </div>


                            <div className="basket__box">
                                <a className="basket header__circle active icon-shopping-basket" href="#">
                                    <span>6</span>
                                </a>
                                <div className="circle__menu">

                                    <div className="circle__item">
                                        <img className="circle__img" src={bassket} alt=""/>

                                        <div className="circle__info">
                                            <div className="circle__info-name">Grand Ballet</div>
                                            <div className="circle__info-theme">WordPress</div>
                                            <div className="circle__info-price">$59</div>
                                        </div>
                                    </div>

                                    <div className="circle__item">
                                        <img className="circle__img" src={bassketTelegram} alt=""/>
                                        <div className="circle__info">
                                            <div className="circle__info-name">Apple Device</div>
                                            <div className="circle__info-theme">WordPress</div>
                                            <div className="circle__info-price">$59</div>
                                        </div>
                                    </div>

                                    <div className="basket__summ">
                                        <div className="basket__title">
                                            <div className="basket__summ-total">
                                                Total
                                            </div>
                                            <div className="basket__summ-price">
                                                $118
                                            </div>
                                        </div>

                                        <a className="basket_btn" href="#">Go to Cart</a>
                                        <a className="basket_btn basket_btn-checkout" href="#">Go to Checkout</a>
                                    </div>
                                </div>
                            </div>

                            <div className="user__box">
                                <a className="user header__btn-login--off" href="#">
                                    <div className="user__inner">
                                        <div className="user__img">
                                            <img src={userPro} alt=""/>
                                        </div>
                                        <div className="user__info">
                                            <div className="user__name">
                                                Mike Hussy
                                            </div>
                                            <div className="user__money">
                                                $171.00
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <div className="user__menu">
                                    <ul>
                                        <li><a className="angle-right" href="#">Profile Page</a></li>
                                        <li><a className="angle-right" href="#">Portfolio</a></li>
                                        <li><a className="angle-right" href="#">Account Setting</a></li>
                                        <li><a className="angle-right" href="#">Downloads</a></li>
                                        <li><a className="angle-right" href="#">Wishlist</a></li>
                                        <li><a className="angle-right" href="#">Upload Item</a></li>
                                        <li><a className="angle-right" href="#">Statement</a></li>
                                        <li><a className="angle-right" href="#">Withdraws</a></li>
                                    </ul>
                                </div>
                            </div>

                            <a className="header__btn header__btn-login" href="#" data-fancybox data-src="#modal">Login</a>
                            <a className="header__btn header__btn-logout header__btn-login--off" href="#">Logout</a>
                            <a className="header__btn header__btn-register" href="#">Register</a>
                        </div>

                        <div className="header__btn-menu icon-user">

                        </div>
                    </div>
                </div>
            </div>


            <div className="header__menu">
                <div className="container">
                    <nav className="menu">
                        <div className="menu__btn">
                            <div/>
                            <div/>
                            <div/>
                        </div>
                        <ul className="menu__list">
                            <li><a href="../public/404.html">404</a></li>
                            <li><a href="../public/about.html">About</a></li>
                            <li><NavLink to="/Products">New Products</NavLink></li>
                            <li><NavLink to="/Product">Product</NavLink></li>
                            <li><NavLink to="/Profile">Profile</NavLink></li>
                            <li><NavLink to="/Settings">Settings</NavLink></li>
                            <li><a href="../public/upload.html">upload</a></li>
                            <li><a href="../public/withdrawals.html">withdrawals</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Help</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}