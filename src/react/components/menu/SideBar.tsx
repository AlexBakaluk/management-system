import React from "react";
import {NavLink} from "react-router-dom";
import {Layout, Menu} from "antd";
import {
    AreaChartOutlined,
    FundViewOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    TagOutlined,
    TeamOutlined,
    ToolOutlined,
    WalletOutlined
} from "@ant-design/icons";
import 'antd/dist/antd.css'
import UserLogo from "./UserLogo";
import {getWordsByCurrentLanguage} from "../../helpers/GetWordsByCurrentLanguage";
import {useAppSelector} from "../../../index";

const {Sider} = Layout;
const {SubMenu} = Menu;

const SideBar = ({isCollapsed, onCollapse}: any) => {

    const {sideBarWords} = getWordsByCurrentLanguage()

    // const [collapsed, setCollapsed] = useState<boolean>(false)

    useAppSelector(state => state.languages.language)



    return (
        <Sider style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
        }}
            theme="dark" width="250px" collapsible collapsed={isCollapsed} onCollapse={onCollapse}>

            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <UserLogo collapsed={isCollapsed}/>
                <SubMenu key="1" icon={<ShoppingCartOutlined/>} title={sideBarWords.goods}>
                    <Menu.Item key="11">
                        <NavLink to={'/goods/goodsList'}>
                            {sideBarWords.goodsAndServices}
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="12">
                        <NavLink to={'/goods/remains'}>
                            {sideBarWords.remains}
                        </NavLink>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="2" icon={<ShopOutlined/>}
                         title={sideBarWords.procurement}>
                </SubMenu>
                <SubMenu key="3" icon={<TagOutlined/>}
                         title={sideBarWords.sales}>
                </SubMenu>
                <SubMenu key="4" icon={<TeamOutlined/>}
                         title={sideBarWords.counterparties}>
                </SubMenu>
                <SubMenu key="5" icon={<WalletOutlined/>}
                         title={sideBarWords.money}>
                </SubMenu>
                <SubMenu key="6" icon={<FundViewOutlined/>}
                         title={sideBarWords.analytics}>
                    <Menu.Item key="3">Tom</Menu.Item>
                </SubMenu>
                <SubMenu key="7" icon={<AreaChartOutlined/>}
                         title={sideBarWords.administration}>
                </SubMenu>
                <Menu.Item key="8" icon={<ToolOutlined/>}>
                    <NavLink to={"/settings"}>
                        {sideBarWords.settings}
                    </NavLink>
                </Menu.Item>
                {/*<SubMenu key="sub1" icon={<UserOutlined/>} title="User">*/}
                {/*    <Menu.Item key="3">Tom</Menu.Item>*/}
                {/*    <Menu.Item key="4">Bill</Menu.Item>*/}
                {/*    <Menu.Item key="5">Alex</Menu.Item>*/}
                {/*</SubMenu>*/}
                {/*<SubMenu key="sub2" icon={<TeamOutlined/>} title="Team">*/}
                {/*    <Menu.Item key="6">Team 1</Menu.Item>*/}
                {/*    <Menu.Item key="8">Team 2</Menu.Item>*/}
                {/*</SubMenu>*/}
                {/*<Menu.Item key="9" icon={<FileOutlined/>}>*/}
                {/*    Files*/}
                {/*</Menu.Item>*/}
            </Menu>
        </Sider>

    )
}

export default SideBar