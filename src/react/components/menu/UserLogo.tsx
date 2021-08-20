import React from "react";
import {UserOutlined} from "@ant-design/icons";
import {Avatar, Badge} from 'antd';
import {BellOutlined} from "@ant-design/icons";
import styles from './UserLogo.module.css'

type Props = {
    collapsed: boolean
}

const UserLogo = ({collapsed}: Props) => {
    return (
        <div className={styles.logo}>
            {collapsed
                ? <span className={styles.avatar}>
                      <span className="avatar-item">
                          <Badge count={11}>
                              <Avatar size="small" shape="circle" icon={<UserOutlined/>}/>
                          </Badge>
                      </span>
                  </span>
                : <div className={styles.organisationContainer}>
                    <h1 className={styles.organisationName}>ИП Хватова А. М.</h1>
                    <span className={styles.notifications}>
                         <BellOutlined height={"15px"}/>
                    </span>
                </div>}
        </div>
    )
}

export default UserLogo