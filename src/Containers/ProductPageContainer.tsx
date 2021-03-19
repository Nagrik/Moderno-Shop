import React from 'react';
import ProductPage from "../Pages/ProductPage";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuthor} from "../redux/actions/clothes";
import PlaceholderItems from "../Components/Products/ProductsItem/PlaceholderItems";

const ProductPageContainer = () => {
    const dispatch = useDispatch()

    const selectAuthor = ({clothes}:any) => clothes.author
    const author = useSelector(selectAuthor)

    const selectLoading = ({clothes}:any) => clothes.isLoadedProduct
    const isLoadedProduct = useSelector(selectLoading)


    React.useEffect(() => {
        // @ts-ignore
        dispatch(fetchAuthor())
    }, [])
    return (
        <div>
            {isLoadedProduct ?
                <ProductPage clothesItem={author}/>
                : Array(10).fill(0).map((_, index) => (<PlaceholderItems key={index}/> ))
            }
        </div>
    );
};

export default ProductPageContainer;
