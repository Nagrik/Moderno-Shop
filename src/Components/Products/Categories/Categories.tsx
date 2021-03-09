import React from 'react'
// @ts-ignore
const Categories = React.memo( function Categories({category, onClickItem}) {
    const [activeItem, setActiveItem] = React.useState(null)

    // @ts-ignore
    const onSelectItem = index => {
        setActiveItem(index)
        onClickItem(index)
    }

    return (
        <div>
                <button className={activeItem === null ? 'activeCategories' : ''}
                onClick={() => onSelectItem}>All</button>
                {category.map((name:string, index:number) => (
                    <button className={activeItem === index ? 'activeCategories' : ''}
                        // @ts-ignore
                    onClick={() => onSelectItem(index)} key={`${name}_${index}`}>
                        {name}
                    </button>
                ))}
        </div>
    )
})

export default Categories