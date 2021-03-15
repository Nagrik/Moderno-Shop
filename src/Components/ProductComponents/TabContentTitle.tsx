import React from 'react'
import { Tabs } from 'antd';
import Comments from "./Comments";

const { TabPane } = Tabs;



export const TabContentTitle = () => (
    <Tabs defaultActiveKey="1">
        <TabPane tab="Item Features" key="1">
            <div className="tab-item active-tab" id="4">
                <ul className="tab-items__list">
                    <li className="angle-right">Printing and typesetting industry</li>
                    <li className="angle-right">Bhen an unknown printe</li>
                    <li className="angle-right">Handard dummy text</li>
                    <li className="angle-right">Desktop publishing software</li>
                    <li className="angle-right">Bhen an unknown printe</li>
                    <li className="angle-right">Printing and typesetting industry</li>
                    <li className="angle-right">Bhen an unknown printe</li>
                    <li className="angle-right">Handard dummy text</li>
                </ul>
            </div>

        </TabPane>
        {/*@ts-ignore*/}
        <TabPane tab="Comments" centered key="2">
            <Comments/>
        </TabPane>
        <TabPane tab="Review" key="3">
            qwe
        </TabPane>
        <TabPane tab="Support" key="4">
            Content of Tab Pane 4
        </TabPane>
    </Tabs>
);