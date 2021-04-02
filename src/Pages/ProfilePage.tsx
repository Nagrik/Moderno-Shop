import React from 'react'
import BreadCrumbsProfile from "../Components/ProfilePageComponents/BreadCrumbs";
import RateStars from "../Components/Products/RateStars";
import MoreProducts from "../Components/ProductComponents/MoreProducts";


export default function ProfilePage({author}:any) {

    return (
        <div className="wrapper">
            <div className="content page-content">
                <BreadCrumbsProfile/>
                <section className="profile">
                    <div className="container">
                        <div className="profile__inner">
                            <div className="profile__aside">
                                <div className="aside__item">

                                    <div className="aside__title">
                                        Product Author
                                    </div>

                                    <div className="product-author__box">
                                        <div className="author__avatar">
                                            <img src={author.imageUrl} alt="" className='author__avatar'/>
                                        </div>
                                        <div className="author__info">
                                            <div className="author__name">{author.name}</div>
                                            <div className="profile-status profile-on">Online</div>
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
                                <ul className="footer__social-link">
                                    <li><a className="link-facebook" href="/"/></li>
                                    <li><a className="link-twitter" href="/"/></li>
                                    <li><a className="link-youtube" href="/"/></li>
                                </ul>

                                <div className="profile__aside-btn">
                                    <a className="profile__aside-message" href="/">Send Message</a>
                                    <a className="profile__aside-following" href="/">Following</a>
                                </div>

                            </div>
                            <div className="profile__content">
                                <div className="profile__banner">
                                    <div className="profile__banner-img">
                                        <img src={author.bannerUrl} alt='' className="profile__banner-img"/>
                                    </div>
                                </div>
                                <div className="profile__items">
                                    <div className="profile__item">
                                        <div className="profile__item-title">Country:</div>
                                        <div className="profile__item-content">{author.country}</div>
                                    </div>
                                    <div className="profile__item">
                                        <div className="profile__item-title">Member Since:</div>
                                        <div className="profile__item-content">{author.memberSince}</div>
                                    </div>
                                    <div className="profile__item">
                                        <div className="profile__item-title">Author Rating:</div>
                                        <div className="profile__item-content">
                                            <div className="rate-star"/>
                                            <RateStars rating={author.rating}/>
                                        </div>
                                    </div>
                                    <div className="profile__item">
                                        <div className="profile__item-title">Total Sales:</div>
                                        <div className="profile__item-content profile__item-sales">$ 5,030</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="settings profile-settings">
                    <div className="container">
                        <div className="product-one__tabs settings__tabs">
                            <div className="tab_content tab_content-settings">
                                <div className="tab-item active-tab" id="1">
                                    <div className="personal-box">
                                        <div className="personal-box__title">
                                            About Me:
                                        </div>
                                        <div className="personal-box__text">
                                            <p>
                                                Bimply dummy text of the printing and typesetting industry. Lorem Ipsum
                                                has been the industry's standard dummy text ever since the 1500s, when
                                                an unknown printer took a galley of type and scrambled it to make a type
                                                specimen book. It has survived not only five centuries, but also the
                                                leap into electronic.
                                            </p>
                                        </div>
                                        <div className="personal-box__items">
                                            <div className="personal-box__title">
                                                Progress performance
                                            </div>
                                            <div className="personal-box__item">
                                                <div className="personal-box__head">
                                                    <div className="personal-box__item-name">
                                                        Successful deals
                                                    </div>
                                                    <div className="personal-box__item-number"/>
                                                </div>
                                            </div>
                                            <div className="personal-box__item-line-first">
                                                <span/>
                                            </div>
                                        </div>

                                        <div className="personal-box__item">
                                            <div className="personal-box__head">
                                                <div className="personal-box__item-name">
                                                    Satisfied customers
                                                </div>
                                                <div className="personal-box__item-number"/>
                                            </div>
                                        </div>
                                        <div className="personal-box__item-line-second">
                                            <span/>
                                        </div>

                                        <div className="personal-box__item">
                                            <div className="personal-box__head">
                                                <div className="personal-box__item-name">
                                                    Overall rating
                                                </div>
                                                <div className="personal-box__item-number"/>
                                            </div>
                                        </div>
                                        <div className="personal-box__item-line-third">
                                            <span/>
                                        </div>
                                    </div>
                                        {/*@ts-ignore*/}
                                    <MoreProducts author={author}/>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}