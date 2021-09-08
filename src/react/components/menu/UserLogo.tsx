import React from "react";
import {UserOutlined} from "@ant-design/icons";
import {Avatar, Badge} from 'antd';
import {BellOutlined} from "@ant-design/icons";
import styles from './UserLogo.module.css'
import {useAppDispatch, useAppSelector} from "../../../index";
import userLogo from '../../../resources/images/user-logo.svg'
import {setLogout} from "../../../redux/reducers/actions/Actions";

const UserLogo = () => {

    const {name, surname} = useAppSelector(state => state.userInfo.userDetails)

    const dispatch = useAppDispatch()

    const logout = () => {
        localStorage.removeItem("token")
        dispatch(setLogout())
    }

    return (
        <div className={styles.logoutBtn}>
            <button onClick={logout} title='Выйти' name='Logout'>Выход</button>
        </div>

        // <div className={styles.logo}>
        //    <span className={styles.avatar}>
        //               <span className="avatar-item">
        //                   <Badge count={11}>
        //                       <Avatar size="small" shape="circle" icon={<UserOutlined/>}/>
        //                   </Badge>
        //               </span>
        //    </span>
        // </div>
    )
}

export default UserLogo