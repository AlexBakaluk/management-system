import React from "react";
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import styles from './LoginForm.module.css'
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../../index";
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

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
                login: Yup.string()
                    .email('Invalid email address')
                    .required('Email required'),
                password: Yup.string()
                    .required('Password required')
            })}
            onSubmit={(values, {setSubmitting}) => {
                // setTimeout(() => {
                //     alert(JSON.stringify(values, null, 2));
                //     setSubmitting(false);
                // }, 400);
                dispatch(login(values.login, values.password, true))
            }}
        >
            <Form>
                {/*<img className={styles.backgroundImage} src={cityImg}/>*/}
                <div className={styles.container}>
                    <div className={styles.loginContainer}>
                        <label htmlFor='login'>Email</label>
                        <Field name='login' type='text' placeholder='Enter your email address'/>
                        <ErrorMessage name='login'/>
                    </div>
                    <div className={styles.passwordContainer}>
                        <label htmlFor='password'>Password</label>
                        <Field name='password' type='password' placeholder='Enter your password'/>
                        <ErrorMessage name='password'/>
                    </div>

                    <button type="submit">Submit</button>
                    OR
                    <NavLink to={"/register"}>
                        <button type="button">Register</button>
                    </NavLink>
                </div>
            </Form>
        </Formik>
    )
}

export default LoginForm