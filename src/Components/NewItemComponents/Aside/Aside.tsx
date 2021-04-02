import React from 'react'
import AsideProductsItem from "./AsideProductItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchProductsAsideItems} from "../../../redux/actions/newItems";
import PriceRange from "./PriceRange";
import CategoryAside from "../../Products/ProductsItem/CategoryAside";

export default function Aside() {
    const dispatch = useDispatch()
    const asideItems = useSelector(({aside}:any) => aside.asideItems)

    React.useEffect(() => {
        dispatch(fetchProductsAsideItems())
    }, [])
    return (
        <aside className="product-page__aside">
            <CategoryAside/>
            <PriceRange/>

            <div className="top-sellers-item aside__item-products">
                <div className="aside__title-product">
                    Top 10 Sellers
                </div>

                <div className="aside__product-item">
                    {asideItems.map((obj: any) => (
                        //@ts-ignore
                        <AsideProductsItem key={Math.random()} {...obj} />))}
                </div>

                <a className="top-sellers__link" href="/">View All</a>
            </div>
        </aside>
    )
}