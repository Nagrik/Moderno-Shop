import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from "./Pages/Home";
import NewItemPage from "./Pages/NewItemPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {SettingsPage} from "./Pages/SettingsPage";
import CartPage from "./Pages/CartPage";
import ProductPageContainer from "./Containers/ProductPageContainer";
import ProfileContainer from "./Containers/ProflePageContainer";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import NewItemsPageContainer from "./Containers/NewItemsContainer";
import Logout from "./Components/Logout/Logout";
import ScrollToTop from "./Containers/ScrollToTop";


function App() {
    return (
        <div className="wrapper">
            <div className="content">
                <Header/>

                    <ScrollToTop/>
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
                <Footer/>

            </div>
        </div>
    );
}

export default App;
