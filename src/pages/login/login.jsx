import React,{Component} from 'react'
import './login.less'
import logo from './images/logo.png'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

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
    onReset = (e) => {
        e.preventDefault();
        this.formRef.current.resetFields();
    };
    onCheck = async () => {
        try {
          const values = await this.formRef.current.validateFields();
          console.log('Success:', values);
        } catch (errorInfo) {
          console.log('Failed:', errorInfo);
        }
      };
    onFinish = () => {
        
        console.log("form:",this.formRef.current);
        console.log("formData:",this.formRef.current.getFieldValue());
        this.formRef.current.validateFields()
            .then(values => {
                console.log("values",values);
                /*
            values:
                {
                username: 'username',
                password: 'password',
                }
            */
            })
            .catch(errorInfo => {
                console.log("errorinfo",errorInfo);
               
                /*
                errorInfo:
                {
                    values: {
                    username: 'username',
                    password: 'password',
                    },
                    errorFields: [
                    { password: ['username'], errors: ['Please input your Password!'] },
                    ],
                    outOfDate: false,
                }
                */
            });
      };
      /* */
    validatorPassWord=(rule, value,callback)=>{
        console.log("1212",rule,value);
        if(!value){
            Promise.reject(callback('密码必须输入！'))
        }else if(value.length<4){
            Promise.reject(callback('密码必须大于4位！'))
        }else if(value.length>12){
            Promise.reject(callback('密码必须小于12位！'))
        }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
            Promise.reject(callback('用户名需要由数组下划线字母组成！'))
        }else{
            Promise.resolve(callback())
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
                    onFinish={this.onCheck}
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
                        rules={[{ validator:this.validatorPassWord}]}
                    >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" style={{color:'rgba(0,0,0,.5)'}}/>}
                        type="password"
                        placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.onReset.bind(this)}>
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
