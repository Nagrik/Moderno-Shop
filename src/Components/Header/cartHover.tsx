import React from 'react';

const CartHoverItems = ({name, type, imageUrl, price}: any) => {
    return (
        <div className="circle__item">
            <img className="circle__img" src={imageUrl} alt=""/>

            <div className="circle__info">
                <div className='circle__info-wrapper'>
                    <div className="circle__info-name">{name}</div>
                    <div className="circle__info-theme">{type}</div>
                </div>
                <div className='circle__info-wrapper-price'>
                    <div className="circle__info-price">{price} $</div>
                </div>
            </div>
        </div>
    );
};

export default CartHoverItems;
