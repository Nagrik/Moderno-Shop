import React from 'react'
import { Tabs } from 'antd';
import Comments from "./Comments";

const { TabPane } = Tabs;



export const TabContentTitle = () => (
    <Tabs defaultActiveKey="1">
        <TabPane tab="Item Features" key="1">
            <div className="tab-item active-tab" id="4">
                <ul className="tab-items__list">
                    <li className="angle-right">Lorem ipsum dolor.</li>
                    <li className="angle-right">Lorem ipsum dolor.</li>
                    <li className="angle-right">Lorem ipsum dolor.</li>
                    <li className="angle-right">Lorem ipsum dolor.</li>
                    <li className="angle-right">Lorem ipsum dolor.</li>
                    <li className="angle-right">Lorem ipsum dolor.</li>
                    <li className="angle-right">Lorem ipsum dolor.</li>
                    <li className="angle-right">Lorem ipsum dolor.</li>
                </ul>
            </div>

        </TabPane>
        {/*@ts-ignore*/}
        <TabPane tab="Comments" centered key="2">
            <Comments/>
        </TabPane>
        <TabPane tab="Review" key="3">
            <div className="tab-item active-tab" id="4">
                <ul className="tab-items__list">
                    <li className="angle-right">Lorem ipsum dolor2.</li>
                    <li className="angle-right">Lorem ipsum dolor2.</li>
                    <li className="angle-right">Lorem ipsum dolor2.</li>
                    <li className="angle-right">Lorem ipsum dolor2.</li>
                    <li className="angle-right">Lorem ipsum dolor2.</li>
                    <li className="angle-right">Lorem ipsum dolor2.</li>
                    <li className="angle-right">Lorem ipsum dolor2.</li>
                    <li className="angle-right">Lorem ipsum dolor2.</li>
                </ul>
            </div>

        </TabPane>
        <TabPane tab="Support" key="4">
            <div className="tab-item active-tab" id="4">
                <ul className="tab-items__list">
                    <li className="angle-right">Lorem ipsum dolor3.</li>
                    <li className="angle-right">Lorem ipsum dolor3.</li>
                    <li className="angle-right">Lorem ipsum dolor3.</li>
                    <li className="angle-right">Lorem ipsum dolor3.</li>
                    <li className="angle-right">Lorem ipsum dolor3.</li>
                    <li className="angle-right">Lorem ipsum dolor3.</li>
                    <li className="angle-right">Lorem ipsum dolor3.</li>
                    <li className="angle-right">Lorem ipsum dolor3.</li>
                </ul>
            </div>
        </TabPane>
    </Tabs>
);