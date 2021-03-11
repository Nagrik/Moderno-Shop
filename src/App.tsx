import React from 'react';
import Header from './Components/Header/Header';
import Search from "./Components/Search/Search";
import Products from "./Components/Products/Products";
import ProductSlider from "./Components/ProductSlider/ProductSlider";
import Benefits from "./Components/Benefits/Benefits";
import Author from "./Components/Author/Author";
import Tutorial from "./Components/Tutorial/Tutorial";
import Footer from "./Components/Footer/Footer";


function App() {
    return (
        <div className="wrapper">
            <div className="content">
                <Header/>
                <Search/>
                <Products/>
                <ProductSlider/>
                <Benefits/>
                <Author/>
                <Tutorial/>
            </div>
           <Footer/>
        </div>
    );
}

export default App;
