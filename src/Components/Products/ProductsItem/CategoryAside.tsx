import React from 'react'

export default function CategoryAside(){
    return(
        <div className="category aside__item">
            <div className="aside__title">
                Categories
            </div>
            <ul className="category__list">
                <li><a href="#">Hoodie</a><span>(150)</span></li>
                <li><a href="#">Glasses</a><span>(100)</span></li>
                <li><a href="#">Pants</a><span>(50)</span></li>
                <li><a href="#">T-Short</a><span>(60)</span></li>
            </ul>
        </div>
    )
}