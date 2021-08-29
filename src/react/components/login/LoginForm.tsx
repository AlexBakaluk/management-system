import React from "react";
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import cityImg from '../../../resources/images/city.jpg'
import styles from './LoginForm.module.css'
import {useAppDispatch} from "../../../index";
import {login} from "../../../redux/reducers/authReducer";

interface LoginFormValues {
    email: string,
    password: string
}

const LoginForm = () => {
    const initialValues: LoginFormValues = {
        email: '',
        password: ''
    }

    const dispatch = useAppDispatch();

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('Email adress required'),
                password: Yup.string().required('Password required')
            })}
            onSubmit={(values, { setSubmitting }) => {
                // setTimeout(() => {
                //     alert(JSON.stringify(values, null, 2));
                //     setSubmitting(false);
                // }, 400);
                dispatch(login(values.email, values.password))
            }}
        >
            <Form>
                <label htmlFor="email">Email</label>
                <Field name="email" type="text" />
                <ErrorMessage name="email" />

                <label htmlFor="password">Password</label>
                <Field name="password" type="password" />
                <ErrorMessage name="password" />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default LoginForm