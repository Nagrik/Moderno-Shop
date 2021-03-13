import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import HomePage from "./Pages/Home";
import NewItemPage from "./Pages/NewItemPage";
import Header from "./Components/Header/Header";


function App() {
    return (
        <div className="wrapper">
            <div className="content">
                <Header/>
                <Route path='/NewItem' component={NewItemPage}/>
                <Route path='/HomePage' component={HomePage}/>
            </div>
        </div>
    );
}

export default App;
