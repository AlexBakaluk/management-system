import React from "react";
import {Col, DatePicker, Form, Input, Row, Select} from "antd";
import {onlyRussianCharactersRegexp, onlyRussianCharactersValidationMessage} from "./RegistrationForm";

const {Option} = Select;


const eighteenYearsAgo = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 18)
    return date
}

const RegistrationFormPersonalData = () => {
    return (
        <>
            <Row justify="space-between">
                <Col span={6} push={2}>
                    <Form.Item
                        name="name"
                        label="Имя"
                        rules={[
                            {
                                required: true,
                                message: "Пожалуйста, введите Ваше имя!"
                            },
                            {
                                pattern: onlyRussianCharactersRegexp,
                                message: onlyRussianCharactersValidationMessage
                            }
                        ]}
                    >
                        <Input placeholder="Иван" minLength={1} maxLength={100}/>
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        name="surname"
                        label="Фамилия"
                        rules={[
                            {
                                required: true,
                                message: "Пожалуйста, введите Вашу фамилию!"
                            },
                            {
                                pattern: onlyRussianCharactersRegexp,
                                message: onlyRussianCharactersValidationMessage
                            }
                        ]}
                    >
                        <Input placeholder="Иванов" minLength={1} maxLength={100}/>

                    </Form.Item>
                </Col>
                <Col span={6} pull={2}>
                    <Form.Item
                        name="patronymic"
                        label="Отчество"
                        rules={[
                            {
                                pattern: onlyRussianCharactersRegexp,
                                message: onlyRussianCharactersValidationMessage
                            }
                        ]}
                    >
                        <Input placeholder="Иванович" minLength={1} maxLength={100}/>

                    </Form.Item>
                </Col>
            </Row>

            <Row justify="start">
                <Col span={6} push={2}>
                    <Form.Item
                        name="gender"
                        label="Пол"
                        rules={[
                            {
                                required: true,
                                message: "Пожалуйста, выберите Ваш пол!"
                            }
                        ]}
                    >
                        <Select placeholder="Выберите Ваш пол">
                            <Option value="male">Мужчина</Option>
                            <Option value="female">Женщина</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={4} push={3}>
                    <Form.Item
                        name="birthDate"
                        label="Дата рождения"
                        rules={[
                            {
                                required: true,
                                message: "Пожалуйста, укажите Вашу дату рождения!"
                            },
                            ({getFieldValue}) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('birthDate') < eighteenYearsAgo()) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Доступно только совершеннолетним!'));
                                },
                            }),
                        ]}
                    >
                        <DatePicker placeholder="1991-01-01"/>
                    </Form.Item>
                </Col>
            </Row>
        </>
    )
}

export default RegistrationFormPersonalData