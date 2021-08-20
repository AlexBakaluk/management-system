import React, {useState} from 'react';
import {Layout} from 'antd';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import SideBar from "./react/components/menu/SideBar";
import SiteContent from "./react/components/content/SiteContent";
import SiteFooter from "./react/components/footer/SiteFooter";
import LoginForm from "./react/components/login/LoginForm";

const isAuth = true


function App() {
    if (!isAuth) {
        return <LoginForm/>
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [collapsedSideBar, setCollapsedSideBar] = useState<boolean>(false)

    const onCollapse = () => {
        setCollapsedSideBar(!collapsedSideBar)
    }

    return (
        <BrowserRouter>
            <Layout
                className={collapsedSideBar ? "collapsedSideBar" : "notCollapsedSideBar"}
                // style={collapsedSideBar ? {} : {marginLeft: 250}}
            >
                <SideBar isCollapsed={collapsedSideBar} onCollapse={onCollapse}/>
                <Layout className="site-layout">
                    {/*<SiteHeader/>*/}
                    <SiteContent/>
                    <SiteFooter/>
                </Layout>
            </Layout>
        </BrowserRouter>
    )
}

export default App;
