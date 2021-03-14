import React from 'react'

export default function Links(){
    return(
        <div className="product-one__box">
            <div className="product-one__link">
                <a className="link-live" href="#">Live Preview</a>
                <a className="link-screenshots" href="#">Screenshots</a>
                <a className="link-documentation" href="#">Documentation</a>
            </div>
            <div className="product-one__social">
                <a className="icon-facebook" href="#"/>
                <a className="icon-twitter" href="#"/>
                <a className="icon-linkedin2" href="#"/>
                <a className="icon-pinterest" href="#"/>
            </div>
        </div>
    )
}