import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

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
import RegisterPage from "./Pages/RegisterPage";
import NewItemsContainer from "./Containers/NewItemsContainer";
import LoginPage from "./Pages/LoginPage";
import NewItemsPageContainer from "./Containers/NewItemsContainer";
import {useSelector} from "react-redux";
import Logout from "./Components/Logout/Logout";


function App() {



    return (
        <div className="wrapper">
            <div className="content">
                <Header/>

                <Switch>
                    <Route path='/Products' component={NewItemPage}/>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/Product/:productId' component={ProductPageContainer}/>
                    <Route path='/NewProduct/:productId' component={NewItemsPageContainer}/>
                    <Route path='/Profile/:userId' component={ProfileContainer}/>
                    <Route path='/Settings' component={SettingsPage}/>
                    <Route path='/Cart' component={CartPage}/>
                    <Route path='/Registration' component={RegisterPage}/>
                    <Route path='/Login' component={LoginPage}/>
                    <Route path='/Logout' component={Logout}/>
                    {/*<Redirect to='/404' component={}*/}
                </Switch>
                <Footer/>

            </div>
        </div>
    );
}

export default App;
