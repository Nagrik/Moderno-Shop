import React from 'react'
import search from "../../img/icons/search.png";

export default function Search(){
    return(
        <section className="search">
            <div className="container">
                <div className="search__inner">
                    <div className="search__inner-title">
                        Welcome To Foxtar Market Place!
                    </div>
                    <div className="search__inner-text">
                        Premium WordPress Themes, Web Templates and Many More ...
                    </div>
                    <div className="search__inner-form">
                        <form>
                            <input type="text" placeholder="Search Your Keywords . . ." required/>
                            <button type="submit">
                                <img src={search} alt=""/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}