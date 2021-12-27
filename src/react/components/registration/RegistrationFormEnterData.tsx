import React from "react";
import {Col, Form, Input, Tooltip} from "antd";

const RegistrationFormEnterData = () => {
    return (
        <>
            <Col span={20} push={2}>
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            required: true,
                            message: 'Данное поле обязательно для заполнения!',
                        },
                        {
                            type: "email",
                            message: "Пожалуйста, введите корректный e-mail адрес"
                        }
                    ]}
                    hasFeedback
                >
                    <Input placeholder="Ivanov.Ivan@gmail.com" maxLength={50}/>
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Пароль"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите пароль!',
                        },
                        {
                            pattern: new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\\S+$).{8,}$"),
                            message: "Не соблюдены обязательные требования для пароля. Требования указаны в подсказке"
                        }
                    ]}
                    hasFeedback
                    tooltip='Пароль должен содержать: число; букву в верхнем и нижнем регистре; один из символов [@#$%^&+=!]. Общая длина не менее 8 символов'
                >
                    <Input.Password maxLength={50} size="small" placeholder="*************************"/>
                </Form.Item>

                <Form.Item
                    name="confirmPassword"
                    label="Подтверждение пароля"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, подтвердите Ваш пароль!',
                        },
                        ({getFieldValue}) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Пароли не совпадают!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password maxLength={50} size="small" placeholder="*************************"/>
                </Form.Item>
            </Col>
        </>
    )
}

export default RegistrationFormEnterData