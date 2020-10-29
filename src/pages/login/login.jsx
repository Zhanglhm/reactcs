import React,{Component,useEffect} from 'react'
import './login.less'
import logo from '../../assets/images/logo.png'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {reqLogin} from '../../api'
/*
登录的路由组件
*/
const Demo = () => {
    const [form] = Form.useForm();
    // 表单点击提交触发的方法
    // values是表单中的值
    
}
export default class Login extends Component{
   
    constructor(props) {
        super(props);
        this.formRef = React.createRef();
    }
    // handleSubmit = (value) =>{
    //     console.log("formData:",this.formRef.current.getFieldValue());
    //     // 获取form的值
    //     let formData = this.formRef.current.getFieldValue();
    //     console.log("123",formData.username);

    // }
   
    onClick = async() => { 
        const {username,password}=this.formRef.current.getFieldValue();
        console.log(username,password)
        this.props.history.replace('/')
        
        // try {
        //     const response=await reqLogin(username,password);
        //     const result=response.data
        //     if(result.status===0){
        //         message.success('登录成功')
        //         this.props.history.replace('/')

        //         // this.props.history.push()
        //     }else{
        //         message.error('登录失败')
        //     }
        //     console.log('成功')
        // // } catch (error) {
        //     console.log('失败')
        // }
        
        // reqLogin(this.formRef.current.getFieldValue().username,this.formRef.current.getFieldValue().password).then(response=>{
        //     console.log('成功了',response.data);
        // }).catch(error=>{
        //     console.log('失败了',error);
        // })
        console.log("form:",this.formRef.current);
        console.log("formData:",this.formRef.current.getFieldValue().username);
    }
                
    validator=(rule, value) => {
          console.log("1212",rule,value);
          if(!value){
              Promise.reject('密码必须输入！')
          }else if(value.length<4){
              Promise.reject('密码必须大于4位！')
          }else if(value.length>12){
              Promise.reject('密码必须小于12位！')
          }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
              Promise.reject('用户名需要由数组下划线字母组成！')
          }else{
              Promise.resolve()
          }
       
      }
    
    render(){
        
        return(
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"></img>
                    <h1>React项目：后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form
                    name="normal_login"
                    className="login-form"
                    ref={this.formRef}
                    initialValues={{ remember: true }}
                    // onFinish={this.onCheck}
                    >
                    
                    <Form.Item
                        name="username"
                        rules={[{ required: true, whitespace:true,message: '用户名必须输入!' },
                                { min: 4, message: '用户名至少4位!' },
                                {max:12,message:"用户名最多12位！"},
                                {pattern:/^[a-zA-Z0-9_]+$/,message:"用户名需要由数组下划线字母组成！"}
                            ]} 
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" style={{color:'rgba(0,0,0,.5)'}}/>} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ validator:this.validator}]}
                    >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" style={{color:'rgba(0,0,0,.5)'}}/>}
                        type="password"
                        placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.onClick}>
                        登录
                        </Button>
                    </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
    /*1.前台表单验证 2.收集表单上数据  */

}
