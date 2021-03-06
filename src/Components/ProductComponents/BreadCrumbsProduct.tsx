import React from 'react'
import {Breadcrumb} from "antd";
import { NavLink } from 'react-router-dom';

export default function BreadCrumbsProduct(){
    return(
        <div className="breadcrumbs">
            <div className="container">
                <div className="breadcrumbs__inner">
                    <ul className="breadcrumbs__list">
                        <div>
                            <Breadcrumb>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    <NavLink to="/Products">Products</NavLink>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    Product
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}