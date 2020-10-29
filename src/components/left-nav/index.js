import React,{Component} from 'react'
import {Link,withRouter} from 'react-router-dom'
import { Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
  } from '@ant-design/icons';
import logo from '../../assets/images/logo.png'
import menuList from '../../config/menuConfig'
import './index.less'


const { SubMenu } = Menu;
/* 
左侧导航的组件
*/
class LeftNav extends Component{
    
     /**
     * 根据数据数组生成对应标签数组
     * 使用map+递归
     * @param {*} menuList 
     */
    getMenuNodes_map= (menuList)=>{
        return menuList.map(item=>{
             /**
             * title: '商品', 
             * key: '/products', 
             * icon: 'appstore', 
             * children: 可有可没有
             * 
             * 可能返回menu.item/submenu
             */
            if(!item.children){
                return(
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.key}>{item.title}</Link>
                    </Menu.Item>
                )
            }else{
                return(
                    <SubMenu key={item.key} icon={item.icon} title={item.title}>
                        {this.getMenuNodes(item.children)}
                    </SubMenu>
                )
            }

        })
    }
    /**
     * 根据数据数组生成对应标签数组
     * 使用reduce+递归
     * @param {*} menuList 
     */
    getMenuNodes=(menuList)=>{
        return menuList.reduce((pre,item)=>{
            //向pre中添加Meun.item/submenu
            if(!item.children){
                pre.push((
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.key}>{item.title}</Link>
                    </Menu.Item>
                ))
            }else{
                pre.push((
                    <SubMenu key={item.key} icon={item.icon} title={item.title}>
                        {this.getMenuNodes(item.children)}
                    </SubMenu>
                ))
            }
            return pre
        },[])


    
    }
    
    render(){
        //得到当前请求路径
        const path=this.props.location.pathname
        return(
            <div className="left-nav">
            
            <Link to='/'  className="left-nav-header">
                    <img className="img" src={logo} alt="logo" />
                    <h1>home后台</h1>
            </Link>
            <Menu
                selectedKeys={[path]}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                >
            {/* <Menu.Item key="/home" icon={<PieChartOutlined />}>
                    <Link to='/home'>首页</Link>
                </Menu.Item>
                <SubMenu key="sub1" icon={<MailOutlined />} title="商品">
                    <Menu.Item key="/category" icon={<MailOutlined />}><Link to='/category'>品类管理</Link></Menu.Item>
                    <Menu.Item key="/product" icon={<MailOutlined />}><Link to='/product'>商品管理</Link></Menu.Item>
                </SubMenu>
                <Menu.Item key="/user" icon={<PieChartOutlined />}>
                    <Link to='/user'>用户管理</Link>
                </Menu.Item>
                <Menu.Item key="/role" icon={<PieChartOutlined />}>
                    <Link to='/role'>角色管理</Link>
                </Menu.Item>
        */}
        {
            this.getMenuNodes(menuList)
        }
                </Menu>


            </div>
        )
    }
}
/**
 * withRouter包装路由组价就，返回新的组件
 * 新的组件向新路由组件传递三个属性
 */
export default withRouter(LeftNav)
