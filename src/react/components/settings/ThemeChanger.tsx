import React from "react";
import {Switch} from "antd";

const ThemeChanger = ({changeTheme} : any) => {
    return (
        <div>
            <Switch defaultChecked onChange={changeTheme}/>
        </div>

    )
}

export default ThemeChanger