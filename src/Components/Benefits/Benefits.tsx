import React from 'react'
import lock from "../../img/we/lock.png";
import heart from "../../img/we/heart.png";

export default function Benefits(){
    return(
        <section className="choose-foxtar">
            <div className="container">
                <div className="product-choose__title foxtar-title">
                    Why You Choose Foxtar Market Place?
                </div>
                <div className="advantages__inner">
                    <div className="choose-items">

                        <div className="choose-item lock">
                            <img className="picture" src={lock} alt=""/>
                            <div className="sentense">
                                Easily Buy & Sell
                            </div>
                            <div className="text">
                                Dorem Ipsum is simply dummy text of the pring and typesetting industry. Lorem
                                Ipsum has been the
                                industry's standaum.
                            </div>
                        </div>

                        <div className="choose-item lock">
                            <img src={lock} alt=""/>
                            <div className="sentense">
                                Quality Products
                            </div>
                            <div className="text">
                                Dorem Ipsum is simply dummy text of the pring and typesetting industry. Lorem
                                Ipsum has been the
                                industry's standaum.
                            </div>
                        </div>

                        <div className="choose-item lock">
                            <img src={heart} alt=""/>
                            <div className="sentense">
                                100% Secure Payment
                            </div>
                            <div className="text">
                                Dorem Ipsum is simply dummy text of the pring and typesetting industry. Lorem
                                Ipsum has been the
                                industry's standaum.
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}