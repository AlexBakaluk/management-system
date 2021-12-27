import React from "react";
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import styles from './../menu/UserLogo.module.css'
import axios from 'axios'

interface RegistrationFormValues {
    email: string,
    password: string,
    name: string,
    surname: string,
    patronymic: string,
    gender: string,
    birthDate: string,
    organisationShortName: string,
}

const RegistrationFormDep = () => {
    const initialValues: RegistrationFormValues = {
        email: '',
        password: '',
        name: '',
        surname: '',
        patronymic: '',
        gender: '',
        birthDate: '',
        organisationShortName: ''
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Email required'),
                password: Yup.string()
                    .required('Password required'),
                name: Yup.string()
                    .required('Name required'),
                surname: Yup.string()
                    .required('Surname required'),
                gender: Yup.string()
                    .oneOf(
                        ['male', 'female'],
                        'Invalid Gender'
                    )
                    .required('Gender required'),
                birthDate: Yup.string()
                    .required('Birth date required'),
                organisationShortName: Yup.string()
                    .required('organisationShortName required')
            })}
            onSubmit={(values, {setSubmitting}) => {
                axios.post("http://localhost:8080/register", values
                ).then(r => alert(r.data))
            }}

        >
            <Form>
                <div className={styles.container}>
                    <div className={styles.loginContainer}>
                        <label htmlFor='email'>Email</label>
                        <Field name='email' type='text' placeholder='Enter your email address'/>
                        <ErrorMessage name='email'/>
                    </div>
                    <div className={styles.passwordContainer}>
                        <label htmlFor='password'>Password</label>
                        <Field name='password' type='password' placeholder='Enter your password'/>
                        <ErrorMessage name='password'/>
                    </div>
                    <div className={styles.passwordContainer}>
                        <label htmlFor='name'>Name</label>
                        <Field name='name' type='input' placeholder='Enter your name'/>
                        <ErrorMessage name='name'/>
                    </div>
                    <div className={styles.passwordContainer}>
                        <label htmlFor='surname'>Surname</label>
                        <Field name='surname' type='input' placeholder='Enter your surname'/>
                        <ErrorMessage name='surname'/>
                    </div>
                    <div className={styles.passwordContainer}>
                        <label htmlFor='patronymic'>Patronymic</label>
                        <Field name='patronymic' type='input' placeholder='Enter your patronymic'/>
                        <ErrorMessage name='patronymic'/>
                    </div>
                    <div className={styles.passwordContainer}>
                        <label htmlFor='gender'>Gender</label>
                        <Field name="gender" as="select">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Field>
                        <ErrorMessage name='gender'/>
                    </div>

                    <div className={styles.passwordContainer}>
                        <label htmlFor='organisationShortName'>organisationShortName</label>
                        <Field name='organisationShortName' type='input' placeholder='Enter your organisationShortName'/>
                        <ErrorMessage name='organisationShortName'/>
                    </div>

                    <div className={styles.passwordContainer}>
                        <label htmlFor='birthDate'>birthDate</label>
                        <Field name='birthDate' type='date' placeholder='Enter your birthDate'/>
                        <ErrorMessage name='birthDate'/>
                    </div>

                    <button type="submit">Submit</button>
                </div>
            </Form>
        </Formik>
    )
}

export default RegistrationFormDep