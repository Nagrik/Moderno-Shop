import React from 'react'
import Search from "../Components/Search/Search";
import Products from "../Components/Products/Products";
import ProductSlider from "../Components/ProductSlider/ProductSlider";
import Benefits from "../Components/Benefits/Benefits";
import Author from "../Components/Author/Author";
import Tutorial from "../Components/Tutorial/Tutorial";

export default function HomePage(){
    return(
        <div className="wrapper">
            <div className="content">
                <Search/>
                <Products/>
                <ProductSlider/>
                <Benefits/>
                <Author/>
                <Tutorial/>
            </div>
        </div>
    )
}