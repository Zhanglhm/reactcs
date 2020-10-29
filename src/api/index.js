/*包含应用中所有请求函数的模块
要求：根据接口文档定义接口请求 
每个函数的返回值都是promise*/
import Password from 'antd/lib/input/Password'
import ajax from './ajax'
//登录
// export function reqLogin(username,password){
//     ajax('/login',{username,password},'POST')
// }
export const reqLogin=(username,password)=>ajax('./login',{username,password},'POST')
export const reqAddUser=(user)=>ajax('./manage/user/add',user,'POST')