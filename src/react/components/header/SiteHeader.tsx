import React from "react";
import {Layout} from "antd";
import 'antd/dist/antd.css'
import UserLogo from "../menu/UserLogo";
import styles from './Header.module.css'

const {Header} = Layout;

const SiteHeader = () => {
    return (
            <Header className={styles.header} style={{padding: 0}}>
                <UserLogo/>
            </Header>
    )
}

export default SiteHeader