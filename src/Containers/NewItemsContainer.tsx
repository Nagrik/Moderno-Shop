import React from 'react';
import ProductPage from "../Pages/ProductPage";
import {useDispatch, useSelector} from "react-redux";
import {setLoadedProduct, setProfile} from "../redux/actions/clothes";
import PlaceholderItems from "../Components/Products/ProductsItem/PlaceholderItems";
import { withRouter } from 'react-router-dom';
import axios from "axios";
import NewProductPage from "../Pages/NewItemsProducts";
import {setLoadedNewProduct, setNewProfile} from "../redux/actions/newItems";

const ProductPageContainer = (props:any) => {

    let clothesId = props.match.params.productId


    const dispatch = useDispatch()

    const selectAuthor = ({clothes}:any) => clothes.author
    const author = useSelector(selectAuthor)
    console.log(author)

    const selectLoading = ({clothes}:any) => clothes.isLoadedProduct
    const isLoadedProduct = useSelector(selectLoading)
    console.log(isLoadedProduct)




    React.useEffect(() => {
        dispatch(setLoadedNewProduct(false))
        axios.get(`https://modernoshop-b8052-default-rtdb.firebaseio.com/Clothes/${clothesId}.json`).then(({data}) => {
            dispatch(setNewProfile(data))
        })
    }, [])
    return (
        <div>
            {isLoadedProduct ?
                <NewProductPage clothesItem={author}/>
                : Array(10).fill(0).map((_, index) => (<PlaceholderItems key={index}/> ))
            }
        </div>
    );
};

export default withRouter(ProductPageContainer) ;
