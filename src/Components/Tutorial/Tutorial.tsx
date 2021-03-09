import React from 'react'
import pens from "../../img/tutorial/pens.jpg";
import press from "../../img/tutorial/press.jpg";
import css from "../../img/tutorial/css.jpg";

export default function Tutorial(){
    return(
        <section className="tutorial">
            <div className="container">
                <div className="tutorial__title title">
                    Free Monthly Tutorials To Help You With Your Project
                </div>

                <div className="tutorial__inner">
                    <div className="tutorial__item">
                        <div className="tutorial__tutorial__item-img">
                            <img src={pens} alt=""/>
                        </div>
                        <div className="tutorial__item-title">
                            Web Design Tutorials
                        </div>
                    </div>


                    <div className="tutorial__item">
                        <div className="tutorial__tutorial__item-img">
                            <img src={press} alt=""/>
                        </div>
                        <div className="tutorial__item-title">
                            WordPress Tutorials
                        </div>
                    </div>


                    <div className="tutorial__item">
                        <div className="tutorial__tutorial__item-img">
                            <img src={css} alt=""/>
                        </div>
                        <div className="tutorial__item-title">
                            HTML & CSS Tutorials
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}