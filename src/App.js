import React,{Component} from 'react'
import {message} from 'antd';
import {BrowserRouter,Route,Switch}from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
/*
应用的根组件
*/
export default class App extends Component{
    handleClick=()=>{
        message.success('成功啦This is a success message');
    }
    render(){
        return (
            <BrowserRouter>
                <Switch>{/* 只匹配其中一个*/}
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Admin}></Route>
                </Switch>
            </BrowserRouter>
        )
        // <Button type="primary" onClick={this.handleClick}>Button</Button>
    }
}