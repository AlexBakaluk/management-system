import React from "react";
import {useAppDispatch} from "../../../index";
import {Form, Input, Button, Checkbox} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css'
import './LoginForm.css'
import {login} from "../../../redux/reducers/authReducer";

interface LoginFormValues {
    login: string,
    password: string
}

const LoginForm = () => {

    const dispatch = useAppDispatch();

    const initialValues: LoginFormValues = {
        login: '',
        password: ''
    }

    const onFinish = (values: any) => {
        dispatch(login(values.login, values.password, true))
    }

    return (
        <div className="sign-form-container">
            <div className="sign-in-container">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                >

                    <h2 className="enter-text">Войти</h2>
                    <Form.Item
                        name="login"
                        rules={[{required: true, message: 'Пожалуйста, введите Ваш email!'}]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{required: true, message: 'Пожалуйста, введите Ваш пароль!'}]}
                        className="password-input"
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        {/*<Form.Item name="remember" valuePropName="checked" noStyle hidden>*/}
                        {/*    <Checkbox>*/}
                        {/*        <span className="remember-me-container">Запомнить меня</span>*/}
                        {/*    </Checkbox>*/}
                        {/*</Form.Item>*/}

                        <a className="login-form-forgot" href="">
                            Забыли пароль?
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="form-button login-form-button">
                            Вход
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className="sign-up-container">
                <h2 className="account-text">Добро <br/> пожаловать!</h2>
                <p>Еще нет аккаунта на нашей платформе?</p>
                <p>Заполните необходимые данные и начните работу</p>
                <Button type="default" htmlType="button" className="form-button registration-button">
                    Регистрация
                </Button>
            </div>
        </div>
    )

    // return (
    //     <Formik
    //         initialValues={initialValues}
    //         validationSchema={Yup.object({
    //             login: Yup.string()
    //                 .email('Invalid email address')
    //                 .required('Email required'),
    //             password: Yup.string()
    //                 .required('Password required')
    //         })}
    //         onSubmit={(values, {setSubmitting}) => {
    //             // setTimeout(() => {
    //             //     alert(JSON.stringify(values, null, 2));
    //             //     setSubmitting(false);
    //             // }, 400);
    //             dispatch(login(values.login, values.password, true))
    //         }}
    //     >
    //         <Form>
    //             {/*<img className={styles.backgroundImage} src={cityImg}/>*/}
    //             <div className={styles.container}>
    //                 <div className={styles.loginContainer}>
    //                     <label htmlFor='login'>Email</label>
    //                     <Field name='login' type='text' placeholder='Enter your email address'/>
    //                     <ErrorMessage name='login'/>
    //                 </div>
    //                 <div className={styles.passwordContainer}>
    //                     <label htmlFor='password'>Password</label>
    //                     <Field name='password' type='password' placeholder='Enter your password'/>
    //                     <ErrorMessage name='password'/>
    //                 </div>
    //
    //                 <button type="submit">Submit</button>
    //                 OR
    //                 <NavLink to={"/register"}>
    //                     <button type="button">Register</button>
    //                 </NavLink>
    //             </div>
    //         </Form>
    //     </Formik>
    // )
}

export default LoginForm