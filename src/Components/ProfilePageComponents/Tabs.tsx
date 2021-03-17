import React from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

export default class ProfileTabs extends React.Component {

    render() {
        return (
            <>
                <Tabs tabPosition='left'>
                    <TabPane tab="About Me" key="1">
                        About Me
                    </TabPane>
                    <TabPane tab="Products ( 10 )" key="2" className='icon-user'>
                        Products ( 10 )
                    </TabPane>
                    <TabPane tab="Message Box" key="3">
                        Message Box
                    </TabPane>
                    <TabPane tab="Reviews ( 20 )" key="4">
                        Customer Reviews ( 20 )
                    </TabPane>
                    <TabPane tab="Followers ( 100 )" key="5">
                        Followers ( 100 )
                    </TabPane>
                </Tabs>
            </>
        );
    }
}

