import { Breadcrumb } from 'antd';

import React from 'react'

export default function BreadCrumbs(){
    return(

    <div className="breadcrumbs">
        <div className="container">
            <div className="breadcrumbs__inner">
                <ul className="breadcrumbs__list">
                    <div>
                        <Breadcrumb>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <a href="">new-item</a>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </ul>
            </div>
        </div>
    </div>
        );
}