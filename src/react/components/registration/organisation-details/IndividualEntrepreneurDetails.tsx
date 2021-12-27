import React from "react";
import {Col, Divider, Form, Input, Row} from "antd";
import {
    onlyDigitsRegexp, onlyDigitsValidationMessage,
    onlyRussianCharactersRegexp,
    onlyRussianCharactersValidationMessage
} from "../RegistrationForm";

const IndividualEntrepreneurDetails: React.FC = () => {
    return (
        <>
            <Divider orientation="left">Данные индивидуального предпринимателя</Divider>
            <Row>
                <Col span={6} offset={2}>
                    <Form.Item
                        name="entrepreneurName"
                        label="Имя"
                        rules={[
                            {
                                required: true,
                                message: "Пожалуйста, Введите имя!"
                            },
                            {
                                pattern: onlyRussianCharactersRegexp,
                                message: onlyRussianCharactersValidationMessage
                            }
                        ]}
                    >
                        <Input placeholder='Валентин'/>
                    </Form.Item>
                </Col>
                <Col span={6} offset={1}>
                    <Form.Item
                        name="entrepreneurSurname"
                        label="Фамилия"
                        rules={[
                            {
                                required: true,
                                message: "Пожалуйста, Введите фамилию!"
                            },
                            {
                                pattern: onlyRussianCharactersRegexp,
                                message: onlyRussianCharactersValidationMessage
                            }
                        ]}
                    >
                        <Input placeholder='Кривцов'/>
                    </Form.Item>
                </Col>
                <Col span={6} offset={1}>
                    <Form.Item
                        name="entrepreneurPatronymic"
                        label="Отчество"
                        rules={[
                            {
                                pattern: onlyRussianCharactersRegexp,
                                message: onlyRussianCharactersValidationMessage
                            }
                        ]}
                    >
                        <Input placeholder='Федорович'/>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={8} offset={2}>
                    <Form.Item
                        name="entrepreneurINNNumber"
                        label="Номер ИНН"
                        rules={[
                            {
                                pattern: onlyDigitsRegexp,
                                message: onlyDigitsValidationMessage
                            },
                            {
                                len: 13,
                                message: 'Длина ИНН для ИП должа быть 13 цифр'
                            }
                        ]}
                    >
                        <Input placeholder="Введите сюда номер ИНН" maxLength={13}/>
                    </Form.Item>
                </Col>
                <Col span={8} offset={4}>
                    <Form.Item
                        name="OGRN_IP_Number"
                        label="ОГРН ИП"
                        rules={[
                            {
                                pattern: onlyDigitsRegexp,
                                message: onlyDigitsValidationMessage
                            },
                            {
                                len: 15,
                                message: 'Длина ОГРН ИП должа быть 15 цифр'
                            }
                        ]}
                    >
                        <Input placeholder="Введите сюда номер ОГРН ИП" maxLength={15}/>
                    </Form.Item>
                </Col>
            </Row>
        </>
    )
}

export default IndividualEntrepreneurDetails