import React from 'react'
import {Carousel} from 'antd';
import {
    fetchClothesSliderOne,
    fetchClothesSliderTwo,
    fetchClothesSliderThird,
    fetchProfile
} from "../../redux/actions/clothes";
import {useDispatch, useSelector} from "react-redux";
import ProductSliderItemOne from "./ProductSliderItemOne";
import ProductSliderItemTwo from "./ProductSliderItemTwo";
import ProductSliderItemThird from "./ProductSliderItemThird";


export default function ProductsSlider() {

    const dispatch = useDispatch()

    type RootState = {
        clothes:any,
        sliderOne:any,
        sliderTwo:any,
        sliderThree:any,
    }

    const selectClothesOne = ({clothes}:RootState) => clothes.sliderOne
    const sliderItemsOne = useSelector(selectClothesOne)

    const selectClothesTwo = ({clothes}:RootState) => clothes.sliderTwo
    const sliderItemsTwo = useSelector(selectClothesTwo)

    const selectClothesThree = ({clothes}:RootState) => clothes.sliderThird
    const sliderItemsThree = useSelector(selectClothesThree)

    const selectAuthor = ({clothes}:any) => clothes.author
    const author = useSelector(selectAuthor)
    React.useEffect(() => {
        // @ts-ignore
        dispatch(fetchClothesSliderOne())
        dispatch(fetchClothesSliderTwo())
        dispatch(fetchClothesSliderThird())
    dispatch(fetchProfile())
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
                            {sliderItemsOne.map((obj:any)  => <ProductSliderItemOne key={Math.random()} {...obj}/>)}
                        </div>
                        <div className='CarouselTest'>
                            {sliderItemsTwo.map((obj:any)  => <ProductSliderItemTwo key={Math.random()} {...obj}/>)}
                        </div>
                        <div className='CarouselTest'>
                            {sliderItemsThree.map((obj:any)  => <ProductSliderItemThird key={Math.random()} {...obj}/>)}
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
