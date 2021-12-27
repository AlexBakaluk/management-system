import React from "react";
import {Button, Col, DatePicker, Form, FormInstance, Input, message, Row, Select} from 'antd';

const {Option} = Select;

const formItemLayout = {
    labelCol: {
        xs: {span: 22},
        sm: {span: 3},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 9},
    },
};

interface StepTwoProps {
    form: FormInstance
    nextStep: () => void,
    prevStep: () => void
    requiredFieldsNames: Array<string>
}

const RegistrationStepTwo: React.FC<StepTwoProps> = ({form, nextStep, prevStep, requiredFieldsNames}) => {

    const onCheck = async () => {
        try {
            await form.validateFields(requiredFieldsNames);
            nextStep()
        } catch (errorInfo) {
            message.error("Для перехода на следующий этап необходимо заполнить все поля, помеченные символом *", 10)
        }
    }

    return (
        <>
            <Col offset={4} span={16}>
                <Form.Item
                    name="name"
                    label="Имя"
                    rules={[
                        {
                            required: true,
                            message: "Пожалуйста, введите Ваше имя!"
                        }
                    ]}
                >
                    <Input placeholder="пример: Иван"/>

                </Form.Item>
                <Form.Item
                    name="surname"
                    label="Фамилия"
                    rules={[
                        {
                            required: true,
                            message: "Пожалуйста, введите Вашу фамилию!"
                        }
                    ]}
                >
                    <Input placeholder="пример: Иванов"/>

                </Form.Item>
                <Form.Item
                    name="patronymic"
                    label="Отчество"
                >
                    <Input placeholder="пример: Иванович"/>

                </Form.Item>
            </Col>

            <Row>
                <Col offset={4} span={6}>
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
                        <Select placeholder={"Укажите Ваш пол"}>
                            <Option value="male">Мужчина</Option>
                            <Option value="female">Женщина</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col offset={2}>
                    <Form.Item
                        name="birthDate"
                        label="Дата рождения"
                        rules={[
                            {
                                required: true,
                                message: ""
                            }
                        ]}
                    >
                        <DatePicker/>
                    </Form.Item>
                </Col>
            </Row>
            <Button size="middle" onClick={onCheck} type="primary" className="registration-next-button">
                Вперед
            </Button>
            <Button size="middle" onClick={prevStep} type="primary" className="registration-prev-button">
                Назад
            </Button>
        </>
    )
}

export default RegistrationStepTwo