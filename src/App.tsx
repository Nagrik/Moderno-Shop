import React from 'react';
import { Route , Redirect} from 'react-router-dom';

import HomePage from "./Pages/Home";
import NewItemPage from "./Pages/NewItemPage";
import Header from "./Components/Header/Header";
import ProductPage from "./Pages/ProductPage";
import Footer from "./Components/Footer/Footer";
import ProfilePage from "./Pages/ProfilePage";
import {SettingsPage} from "./Pages/SettingsPage";


function App() {
    return (
        <div className="wrapper">
            <div className="content">
                <Header/>
                <Route path='/Products' component={NewItemPage}/>
                <Route path='/Home' component={HomePage}/>
                <Route path='/Product' component={ProductPage}/>
                <Route path='/Profile' component={ProfilePage}/>
                <Route path='/Settings' component={SettingsPage}/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
