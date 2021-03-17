import React from 'react'
import {Breadcrumb} from "antd";
import { NavLink } from 'react-router-dom';

export default function BreadCrumbsProfile(){
    return(
        <div className="breadcrumbs">
            <div className="container">
                <div className="breadcrumbs__inner">
                    <ul className="breadcrumbs__list">
                        <div>
                            <Breadcrumb>
                                <Breadcrumb.Item>
                                    <NavLink to='/Home'>Home</NavLink>
                                </Breadcrumb.Item>

                                <Breadcrumb.Item>
                                   Profile
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}