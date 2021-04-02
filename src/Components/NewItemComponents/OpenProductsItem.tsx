import React, {useState} from 'react'
import RateStars from "../Products/RateStars";
import {HeartOutlined, MessageOutlined} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

export interface IsProps  {
    author: any;
    imageUrl:string; name:string; category:string, items:any, id:number, price:number
}

export default function OpenProductItems(props:IsProps) {
    const [likeCount, setLikeCount] = useState(0);
    const [like, setLike] = useState(true);
    const addLikeCount = () => {
        setLikeCount(likeCount + 1)
        setLike(false)
    }
    const minusLikeCount = () => {
        setLikeCount(likeCount + -1)
        setLike(true)
    }

    const id = props.author.id - 1
    return (
        <div className='ProductsWrapper'>
            <NavLink to={'/NewProduct/' + id}>
                <img src={props.imageUrl} className='ProductsItemImage' alt='123'/>
            </NavLink>
            <div className='Wrapper'>
                <div className='ContentWrapper'>
                    <div className='Content__top'>
                        <div className='Content__top-text'>
                            <div className='Content__title'>{props.name}</div>
                            <div className='Content__subtitle'>{props.category}</div>
                        </div>
                        <div className='Price'>$ {props.price}</div>
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
                        {like ?
                        <HeartOutlined onClick={addLikeCount}/>
                        : <HeartOutlined onClick={minusLikeCount} className='activeHeart'/>
                        }

                        ({likeCount})
                    </div>
                </div>
            </div>
        </div>
    )
}