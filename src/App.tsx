import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from "./Pages/Home";
import NewItemPage from "./Pages/NewItemPage";
import Header from "./Components/Header/Header";
import ProductPage from "./Pages/ProductPage";
import Footer from "./Components/Footer/Footer";


function App() {
    return (
        <div className="wrapper">
            <div className="content">
                <Header/>
                <Route path='/Products' component={NewItemPage}/>
                <Route path='/Home' component={HomePage}/>
                <Route path='/Product' component={ProductPage}/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
