/* 
能发送异步ajax请求的函数模块
封装axios库
函数的返回值是一个promise对象
*/
import { message } from 'antd';
import axios from 'axios';
//赋值默认值，防止未有参数
export default function ajax(url,data={},type='GET'){
    return new Promise((resolve,reject)=>{
        let promise
        if(type==='GET'){
            promise = axios.get(url,{//配置参数
                params:data//指定请求参数
            })
        }else{//post请求
            promise = axios.post(url,data)
        }
        promise.then(response=>{
            resolve(response)
        }).catch(error=>{
            // reject(error)
            message.error('请求出错了：'+error.message)
        })
    })
    //请求登录接口
    //ajax("/login",{username:'admin',password:'admin'},'POST').then()

}