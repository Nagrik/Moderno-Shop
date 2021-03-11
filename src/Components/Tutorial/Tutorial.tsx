import React from 'react'
import photo1 from "../../img/tutorial/1.jpg";
import photo2 from "../../img/tutorial/2.jpg";
import photo3 from "../../img/tutorial/3.png";


export default function Tutorial(){
    return(
        <section className="tutorial">
            <div className="container">
                <div className="tutorial__title title">
                    Free Monthly To Help You With Your Project
                </div>

                <div className="tutorial__inner">
                    <div className="tutorial__item">
                        <div className="tutorial__tutorial__item-img">
                            <img src={photo1} alt="" className='tutorial__item-img'/>
                        </div>
                        <div className="tutorial__item-title">
                            Free trade
                        </div>
                    </div>


                    <div className="tutorial__item">
                        <div className="tutorial__tutorial__item-img">
                            <img src={photo2} alt="" className='tutorial__item-img'/>
                        </div>
                        <div className="tutorial__item-title">
                            Free shipping
                        </div>
                    </div>


                    <div className="tutorial__item">
                        <div className="tutorial__tutorial__item-img">
                            <img src={photo3} alt="" className='tutorial__item-img'/>
                        </div>
                        <div className="tutorial__item-title">
                            Premium account
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}