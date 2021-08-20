import React from "react";
import {Breadcrumb, Layout} from "antd";
import {Route} from "react-router-dom";
import GoodsList from "./goods/GoodsList";
import Settings from '../settings/Settings'
import 'antd/dist/antd.css'

const {Content} = Layout;

const SiteContent = () => {
    return (
            <Content style={{margin: '0 16px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                    <Route exact path={'/goods/goodsList'} component={GoodsList}/>
                    <Route exact path={'/settings'} component={Settings}/>
                </div>
            </Content>
    )
}

export default SiteContent