import React from 'react'
import user from '../../img/user.jpg'
import RateStars from "../Products/RateStars";
import {HeartOutlined, MessageOutlined} from '@ant-design/icons';

export interface IsProps  {
    author: any;
    imageUrl:string; name:string; category:string
}

export default function OpenProductItems(props:IsProps) {
    console.log(props.author)
    return (
        <div className='ProductsWrapper'>
            <div>
                <img src={props.imageUrl} className='ProductsItemImage' alt='123'/>
            </div>
            <div className='Wrapper'>
                <div className='ContentWrapper'>
                    <div className='Content__top'>
                        <div className='Content__top-text'>
                            <div className='Content__title'>{props.name}</div>
                            <div className='Content__subtitle'>{props.category}</div>
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
                        <div className="avatar">
                            <img src={props.author.imageUrl} alt='' className="avatar"/>
                        </div>
                        <div>{props.author.name}</div>
                    </div>
                    <div className='Stat'>
                        <RateStars rating={5}/>
                        <MessageOutlined/> (20)
                        <HeartOutlined/> (10)
                    </div>
                </div>
            </div>
        </div>
    )
}