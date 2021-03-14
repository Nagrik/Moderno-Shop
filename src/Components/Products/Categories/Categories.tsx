import React from 'react'

type PropsType = {
    categoryNames:Array<any>,
    onClickItem:any
    activeCategory:any
}
const Categories = React.memo( function Categories(props:PropsType) {



    return (
        <div>
                <button className={props.activeCategory === null ? 'activeCategories' : ''}
                onClick={() => props.onClickItem(null)}>All</button>
                {props.categoryNames.map((name:string, index:number) => (
                    <button className={props.activeCategory === index ? 'activeCategories' : ''}
                    onClick={() => props.onClickItem(index)} key={`${name}_${index}`}>
                        {name}
                    </button>
                ))}
        </div>
    )
})

export default Categories