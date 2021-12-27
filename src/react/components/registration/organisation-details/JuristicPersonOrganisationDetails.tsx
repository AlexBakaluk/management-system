import React, {useState} from "react";
import {Col, Divider, Form, FormInstance, Input, Row} from "antd";
import AddressDrawer from "../AddressDrawer";
import {onlyDigitsRegexp, onlyDigitsValidationMessage} from "../RegistrationForm";
import {Address} from "./RegistrationTypes";
import {getAddressStringValueFromObject} from "../../../helpers/AddressHelper";

const {Search} = Input;

interface JuristicPersonDetailsProps {
    form: FormInstance
}

export let juristicAddress: Address = {
    country: undefined,
    region: undefined,
    city: undefined,
    street: undefined,
    house: undefined,
    building: undefined,
    flat: undefined
}

const JuristicPersonOrganisationDetails: React.FC<JuristicPersonDetailsProps> = ({form}) => {

    const [drawerForm] = Form.useForm()

    const [isAddressFilled, setIsAddressFilled] = useState<boolean>(false)

    const [isDrawerVisible, setIsDrawerVisible] = useState<boolean>(false)

    const showDrawer = () => {
        setIsDrawerVisible(true)
    }

    const onDrawerClose = () => {
        setIsDrawerVisible(false)
    }

    const onDrawerFormSubmit = () => {
        juristicAddress = {...drawerForm.getFieldsValue()}
        const addressValue = getAddressStringValueFromObject(juristicAddress)
        setIsAddressFilled(true)
        form.setFieldsValue({juristicAddress: addressValue})
        drawerForm.submit()
        onDrawerClose()
        return addressValue
    }

    return (
        <>
            <Divider orientation="left">Данные юридического лица</Divider>
            <Row justify="space-between">
                <Col span={13} push={2}>
                    <Form.Item
                        name="fullOrganisationName"
                        label="Полное название организации"
                        rules={[
                            {
                                required: true,
                                message: "Пожалуйста, Введите полное название организации!"
                            }
                        ]}
                    >
                        <Input placeholder='ООО "Ромашка"'/>
                    </Form.Item>
                </Col>
                <Col span={6} pull={2}>
                    <Form.Item
                        name="JurOrg_INN_Number"
                        label="Номер ИНН"
                        rules={[
                            {
                                pattern: onlyDigitsRegexp,
                                message: onlyDigitsValidationMessage
                            },
                            {
                                len: 12,
                                message: 'Длина ИНН должна быть 12'
                            }
                        ]}
                    >
                        <Input placeholder='Введите сюда номер ИНН' maxLength={12}/>
                    </Form.Item>
                </Col>
            </Row>
            <Col span={20} push={2}>
                <Form.Item
                    name="juristicAddress"
                    label="Юридический адрес"
                    getValueFromEvent={onDrawerFormSubmit}
                    shouldUpdate
                    rules={[
                        {
                            required: true,
                            message: "Пожалуйста, Введите юридический адрес!"
                        }
                    ]}
                >
                    <Search
                        readOnly
                        enterButton={isAddressFilled ? "Редактировать" : "Заполнить"}
                        size="middle"
                        onSearch={showDrawer}
                        loading={isDrawerVisible}
                        placeholder='Россия, Московская область, Королев, ул. Космонавтов, 17/3, 135'
                    />
                </Form.Item>
            </Col>
            <Row justify="space-between">
                <Col span={6} push={2}>
                    <Form.Item
                        name="KPPNumber"
                        label="Номер КПП"
                        rules={[
                            {
                                pattern: onlyDigitsRegexp,
                                message: onlyDigitsValidationMessage
                            },
                            {
                                len: 9,
                                message: "Длина КПП должна быть 9 символов"
                            }
                        ]}
                    >
                        <Input placeholder='Введите сюда номер КПП' maxLength={9}/>
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        name="OGRN_Number"
                        label="Номер ОГРН"
                        rules={[
                            {
                                pattern: onlyDigitsRegexp,
                                message: onlyDigitsValidationMessage
                            },
                            {
                                len: 13,
                                message: "Длина ОГРН должна быть 13 символов"
                            }
                        ]}
                    >
                        <Input placeholder='Введите сюда номер ОГРН' maxLength={13}/>
                    </Form.Item>
                </Col>
                <Col span={6} pull={2}>
                    <Form.Item
                        name="OKPONumber"
                        label="Номер ОКПО"
                    >
                        <Input placeholder='Введите сюда номер ОКПО'/>
                    </Form.Item>
                </Col>
            </Row>

            <AddressDrawer
                visible={isDrawerVisible}
                showDrawer={showDrawer}
                onClose={onDrawerClose}
                onSubmit={onDrawerFormSubmit}
                initialData={juristicAddress}
                form={drawerForm}
            />
        </>
    )
}

export default JuristicPersonOrganisationDetails