import React from "react";
import {Col, Divider, Form, Input, Row} from "antd";
import {
    onlyDigitsRegexp, onlyDigitsValidationMessage,
    onlyRussianCharactersRegexp,
    onlyRussianCharactersValidationMessage
} from "../RegistrationForm";

const IndividualPersonDetails: React.FC = () => {
    return (
        <>
            <Divider orientation="left">Данные физического лица</Divider>
            <Row justify="space-between">
                <Col span={6} push={2}>
                    <Form.Item
                        name="personName"
                        label="Имя"
                        rules={[
                            {
                                required: true,
                                message: "Пожалуйста, Введите имя физ. лица!"
                            },
                            {
                                pattern: onlyRussianCharactersRegexp,
                                message: onlyRussianCharactersValidationMessage
                            }
                        ]}
                    >
                        <Input placeholder="Алексей"/>
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        name="personSurname"
                        label="Фамилия"
                        rules={[
                            {
                                required: true,
                                message: "Пожалуйста, Введите фамилию физ. лица!"
                            },
                            {
                                pattern: onlyRussianCharactersRegexp,
                                message: onlyRussianCharactersValidationMessage
                            }
                        ]}
                    >
                        <Input placeholder="Попов"/>
                    </Form.Item>
                </Col>
                <Col span={6} pull={2}>
                    <Form.Item
                        name="personPatronymic"
                        label="Отчество"
                        rules={[
                            {
                                pattern: onlyRussianCharactersRegexp,
                                message: onlyRussianCharactersValidationMessage
                            }
                        ]}
                    >
                        <Input placeholder="Сергеевич" minLength={2}/>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={8} offset={2}>
                    <Form.Item
                        name="INNNumber"
                        label="Номер ИНН"
                        rules={[
                            {
                                len: 12,
                                message: "Длина должна быть 12 символов"
                            },
                            {
                                pattern: onlyDigitsRegexp,
                                message: onlyDigitsValidationMessage
                            }
                        ]}
                    >
                        <Input placeholder="Введите сюда Ваш номер ИНН" maxLength={12}/>
                    </Form.Item>
                </Col>
            </Row>
        </>
    )
}

export default IndividualPersonDetails