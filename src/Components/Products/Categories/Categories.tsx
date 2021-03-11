import React from 'react'
// @ts-ignore
const Categories = React.memo( function Categories({categoryNames, onClickItem, activeCategory}) {

    // @ts-ignore


    return (
        <div>
                <button className={activeCategory === null ? 'activeCategories' : ''}
                onClick={() => onClickItem(null)}>All</button>
                {categoryNames.map((name:string, index:number) => (
                    <button className={activeCategory === index ? 'activeCategories' : ''}
                        // @ts-ignore
                    onClick={() => onClickItem(index)} key={`${name}_${index}`}>
                        {name}
                    </button>
                ))}
        </div>
    )
})

export default Categories