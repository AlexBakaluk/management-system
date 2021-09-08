import React, {useState} from 'react';
import {Layout} from 'antd';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import SideBar from "./react/components/menu/SideBar";
import SiteContent from "./react/components/content/SiteContent";
import SiteFooter from "./react/components/footer/SiteFooter";
import LoginForm from "./react/components/login/LoginForm";
import RegistrationForm from "./react/components/login/RegistrationForm";
import GoodsList from "./react/components/content/goods/GoodsList";
import {useAppDispatch, useAppSelector} from "./index";
import {setLogin, setUserInfo} from "./redux/reducers/actions/Actions";
import {useCookies} from "react-cookie";
import {getMyInfoApi} from "./api/GetMyInfoApi";
import SiteHeader from "./react/components/header/SiteHeader";

function App() {

    const isAuth = useAppSelector(state => state.auth.isAuth)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [collapsedSideBar, setCollapsedSideBar] = useState<boolean>(false)

    const onCollapse = () => {
        setCollapsedSideBar(!collapsedSideBar)
    }

    const dispatch = useAppDispatch()

    const tryLogin = () => {
        if (localStorage.getItem("token")) {
            getMyInfoApi.me().then((response) => {
                    if (response.status === 200) {
                        dispatch(setLogin())
                        dispatch(setUserInfo(response.data))
                    } else if (response.status === 401) {
                        localStorage.removeItem("token")
                    }
                }
            )
        }
    }

    if (!isAuth) {
        tryLogin()
        return (
            <BrowserRouter>
                <LoginForm/>
                {/*<RegistrationForm/>*/}
                {/*<Route path={'/register'} component={RegistrationForm}/>*/}
            </BrowserRouter>
        )
    }


    return (
        <BrowserRouter>
            <Layout
                className={collapsedSideBar ? "collapsedSideBar" : "notCollapsedSideBar"}
            >
                <SideBar isCollapsed={collapsedSideBar} onCollapse={onCollapse}/>
                <Layout className="site-layout">
                    <SiteHeader/>
                    <SiteContent/>
                    <SiteFooter/>
                </Layout>
            </Layout>
        </BrowserRouter>
    )
}

export default App;
