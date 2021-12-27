import React from "react";
import {Button, Col, Form, FormInstance, Input, message} from 'antd';
import { NamePath } from "antd/lib/form/interface";

interface StepOneProps {
    nextStep: () => void
    form: FormInstance
    requiredFieldsNames: Array<string>
}

const RegistrationStepOne: React.FC<StepOneProps> = ({nextStep, form, requiredFieldsNames}) => {

    const onCheck = async () => {
        try {
            await form.validateFields(requiredFieldsNames)
            nextStep()
        } catch (errorInfo) {
            message.error("Для перехода на следующий этап необходимо заполнить все поля, помеченные символом *", 10)
        }
    }

    return (
        <>

            <Col offset={4} span={16}>
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                    validateFirst
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Пароль"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback

                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item
                    name="confirmPassword"
                    label="Подтверждение пароля"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({getFieldValue}) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password/>
                </Form.Item>
            </Col>

            <Button
                size="middle"
                onClick={onCheck}
                type="primary"
                className="registration-next-button">
                Вперед
            </Button>
        </>
    )
}

export default RegistrationStepOne