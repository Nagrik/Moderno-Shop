import React from 'react';
import Header from './Components/Header/Header';
import Search from "./Components/Search/Search";
import Products from "./Components/Products/Products";
import ProductSlider from "./Components/ProductSlider/ProductSlider";
import Benefits from "./Components/Benefits/Benefits";
import Author from "./Components/Author/Author";
import Tutorial from "./Components/Tutorial/Tutorial";
import Footer from "./Components/Footer/Footer";
import axios from 'axios'
import {useSelector, useDispatch} from "react-redux";
import {setClothes} from './redux/actions/clothes'


function App() {
    const dispatch = useDispatch()
    // @ts-ignore


    React.useEffect(() => {
        axios.get('https://modernoshop-b8052-default-rtdb.firebaseio.com/.json').then(({data}) => {
            // setItems(data.pizzas)
            dispatch(setClothes(data.pizzas))
        })
    }, [])
    return (
        <div className="wrapper">
            <div className="content">
                <Header/>
                <Search/>
                {/*//@ts-ignore*/}
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
