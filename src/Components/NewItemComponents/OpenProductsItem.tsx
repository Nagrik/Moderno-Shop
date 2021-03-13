import React from 'react'
import image from '../../img/tutorial/css.jpg'
import user from '../../img/user.jpg'
import RateStars from "../Products/RateStars";
import {HeartOutlined, MessageOutlined} from '@ant-design/icons';

//@ts-ignore
export default function OpenProductItems({imageUrl, name, category}) {
    return (
        <div className='ProductsWrapper'>
            <div>
                <img src={imageUrl} className='ProductsItemImage'/>
            </div>
            <div className='Wrapper'>
                <div className='ContentWrapper'>
                    <div className='Content__top'>
                        <div className='Content__top-text'>
                            <div className='Content__title'>{name}</div>
                            <div className='Content__subtitle'>{category}</div>
                        </div>
                        <div className='Price'>$19</div>
                    </div>
                    <div className='Caption'>
                        <div className='Caption__text'>Lorem ipsum dolor sit amet, consectetur.</div>
                        <div className='Caption__sales'>Sales (14)</div>
                    </div>
                </div>
                <div className='bottom__content'>
                    <div className='UserStat'>
                        <img src={user}/>
                        <div>Rad</div>
                    </div>
                    <div className='Stat'>
                        {/*@ts-ignore*/}
                        <RateStars rating={5}/>
                        <MessageOutlined/> (20)
                        <HeartOutlined/> (10)
                    </div>
                </div>
            </div>
        </div>
    )
}