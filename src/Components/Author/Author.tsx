import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Author(){
    return(
        <section className="author">
            <div className="author__box">
                <div className="author__title">
                    Over <span>20,000</span> Author
                    Are Involved Here!
                </div>
                <NavLink to='/Registration' className="author__link">
                    Become a Author
                </NavLink>
            </div>
        </section>
    )
}