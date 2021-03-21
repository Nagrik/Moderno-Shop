import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import HomePage from "./Pages/Home";
import NewItemPage from "./Pages/NewItemPage";
import Header from "./Components/Header/Header";
import ProductPage from "./Pages/ProductPage";
import Footer from "./Components/Footer/Footer";
import ProfilePage from "./Pages/ProfilePage";
import {SettingsPage} from "./Pages/SettingsPage";
import CartPage from "./Pages/CartPage";
import ProductPageContainer from "./Containers/ProductPageContainer";
import ProfileContainer from "./Containers/ProflePageContainer";


function App() {
    return (
        <div className="wrapper">
            <div className="content">
                <Header/>
                <Route path='/Products' component={NewItemPage}/>
                <Route path='/Home' component={HomePage}/>
                <Route path='/Product/:productId' component={ProductPageContainer}/>
                <Route path='/Profile/:userId' component={ProfileContainer}/>
                <Route path='/Settings' component={SettingsPage}/>
                <Route path='/Cart' component={CartPage}/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
