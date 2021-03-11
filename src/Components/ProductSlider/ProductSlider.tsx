import React from 'react'
import {Carousel} from 'antd';
import first from '../../img/Carousel/1.jpg'
import {fetchClothesSliderOne, fetchClothesSliderTwo,fetchClothesSliderThird} from "../../redux/actions/clothes";
import {useDispatch, useSelector} from "react-redux";
import ProductSliderItem from './ProductSliderItemOne';
import ProductsItem from "../Products/ProductsItem";
import ProductSliderItemOne from "./ProductSliderItemOne";
import ProductSliderItemTwo from "./ProductSliderItemTwo";
import ProductSliderItemThird from "./ProductSliderItemThird";


export default function ProductsSlider() {
    const dispatch = useDispatch()
    // @ts-ignore
    const sliderItemsOne = useSelector(({clothes}) => clothes.sliderOne)
    React.useEffect(() => {
        // @ts-ignore
        dispatch(fetchClothesSliderOne())
    }, [])


    // @ts-ignore
    const sliderItemsTwo = useSelector(({clothes}) => clothes.sliderTwo)
    React.useEffect(() => {
        // @ts-ignore
        dispatch(fetchClothesSliderTwo())
    }, [])


    // @ts-ignore
    const sliderItemsThird = useSelector(({clothes}) => clothes.sliderThird)
    React.useEffect(() => {
        // @ts-ignore
        dispatch(fetchClothesSliderThird())
    }, [])



    return (
        <section className="product-slider">
            <div className="product-slider__wrapper">
                <div className="container-fluid">
                    <div className="product-slider__title title">
                        This Week Trending Products
                    </div>
                    <Carousel>
                        <div className='CarouselTest'>
                            {/*@ts-ignore*/}
                            {sliderItemsOne.map((obj)  => <ProductSliderItemOne key={Math.random()} {...obj}/>)}
                        </div>
                        <div className='CarouselTest'>
                            {/*@ts-ignore*/}
                            {sliderItemsTwo.map((obj)  => <ProductSliderItemTwo key={Math.random()} {...obj}/>)}
                        </div>
                        <div className='CarouselTest'>
                            {/*@ts-ignore*/}
                            {sliderItemsThird.map((obj)  => <ProductSliderItemThird key={Math.random()} {...obj}/>)}
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
