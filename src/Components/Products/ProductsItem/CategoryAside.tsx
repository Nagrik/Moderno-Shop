import React from 'react'

export default function CategoryAside(){
    const [activeHoodie, setActiveHoodie] = React.useState(false);
    const [activeGlasses, setActiveGlasses] = React.useState(false);
    const [activePants, setActivePants] = React.useState(false);
    const [activeShort, setActiveShort] = React.useState(false);
    return(
        <div className="category aside__item">
            <div className="aside__title">
                Categories
            </div>
            <ul className="category__list">
                <li className={!activeHoodie ? 'category__list-in' : 'category__list-in-active'} onClick={() => setActiveHoodie(!activeHoodie)}>Hoodie<span>(150)</span></li>
                { activeHoodie && <div>
                    <ul className='InListItem'>
                        <li>(23) Hoodie</li>
                        <li>(45) Hoodie</li>
                        <li>(9) Hoodie</li>
                    </ul>
                </div>}
                <li className={!activeGlasses ? 'category__list-in' : 'category__list-in-active'} onClick={() => setActiveGlasses(!activeGlasses)}>Glasses<span>(150)</span></li>
                { activeGlasses && <div>
                    <ul className='InListItem'>
                        <li>(15) Glasses</li>
                        <li>(12) Glasses</li>
                        <li>(23) Glasses</li>
                    </ul>
                </div>}                <li className={!activePants ? 'category__list-in' : 'category__list-in-active'} onClick={() => setActivePants(!activePants)}>Pants<span>(150)</span></li>
                { activePants && <div>
                    <ul className='InListItem'>
                        <li>(12) Pants</li>
                        <li>(31) Pants</li>
                        <li>(4) Pants</li>
                    </ul>
                </div>}                <li className={!activeShort ? 'category__list-in' : 'category__list-in-active'} onClick={() => setActiveShort(!activeShort)}>T-Short<span>(150)</span></li>
                { activeShort && <div>
                    <ul className='InListItem'>
                        <li>(11) T-Short</li>
                        <li>(33) T-Short</li>
                        <li>(21) T-Short</li>
                    </ul>
                </div>}
            </ul>
        </div>
    )
}