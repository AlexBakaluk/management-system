import React, {useEffect, useState} from "react";
import {Button, Col, Divider, Form, FormInstance, Input, Row, Select} from 'antd';
import AddressDrawer from "../registration/AddressDrawer";
import {individualEntrepreneur, individualPerson, juristicPersonOrganisation} from "./RegistrationForm1";
import {Address} from "../registration/organisation-details/RegistrationTypes";



const {Option} = Select;

const {Search} = Input;

const initialAddress: Address = {
    country: undefined,
    region: undefined,
    city: undefined,
    street: undefined,
    house: undefined,
    building: undefined,
    flat: undefined
}

interface StepThreeProps {
    prev: () => void,
    submit: () => void
    form: FormInstance
    requiredFieldsNames?: Array<string>
}

const RegistrationStepThree: React.FC<StepThreeProps> = ({form, prev, submit}) => {

    const [drawerForm] = Form.useForm()

    const [address, setAddress] = useState<Address>(initialAddress)

    const [addressValue, setAddressValue] = useState<string | undefined>(undefined)

    const [selectedOrganisationType, setSelectedOrganisationType] = useState<string>('')

    const onDrawerFormSubmit = () => {
        drawerForm.submit()
        setAddressValue(
            address.country + ', ' + address.region + ', ' + address.city + ', ' + address.street + ', ' +
            address.house
        )
    }

    useEffect(() => {
        if (address !== initialAddress) {
            setAddressValue(
                address.country + ', ' + address.region + ', ' + address.city + ', ' + address.street + ', ' +
                address.house + (address.building ? '/' + address.building : '') + (address.flat ? ', ' + address.flat : '')
            )
        }
    }, [address])

    const [visibleDrawer, setVisibleDrawer] = useState<boolean>(false)

    const showDrawer = () => {
        setVisibleDrawer(true)
    }

    const onDrawerClose = () => {
        setVisibleDrawer(false)
    }

    const onCheck = async () => {
        try {
            const values = await form.validateFields();
        } catch (errorInfo) {
            alert("Для продолжения необходимо заполнить все обязательные поля!")
        }
    }

    return (
        <>
            <Row>
                <Col span={12} offset={2}>
                    <Form.Item
                        name="shortName"
                        label="Название организации"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста, заполните название организации!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                <Col span={6} offset={2}>
                    <Form.Item
                        name="phone"
                        label="Номер телефона организации"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста, введите номер организации!',
                            },
                        ]}
                        hasFeedback

                    >
                        <Input/>
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col span={12} offset={2}>
                    <Form.Item
                        name="address"
                        label="Адрес организации"
                        // rules={[{
                        //     required: true,
                        //     message: "Для заполнения адреса используйте кнопку \"Заполнить\""
                        // }]}
                        tooltip="Message"
                    >
                    <span>
                        <Search
                            readOnly
                            value={addressValue}
                            enterButton={addressValue ? "Редактировать" : "Заполнить"}

                            size="small"
                            onSearch={showDrawer}
                            loading={visibleDrawer}
                        />
                    </span>

                    </Form.Item>
                </Col>

                <Col span={6} offset={2}>
                    <Form.Item
                        name="organisationType"
                        label="Тип организации"
                        rules={[
                            {
                                required: true,
                                message: "Пожалуйста, выберите вид Вашей организации!"
                            }
                        ]}

                    >
                        <Select
                            onChange={((value: string) => setSelectedOrganisationType(value))}
                            placeholder={"Укажите тип организации"}
                        >
                            <Option value={individualPerson}>Физическое лицо</Option>
                            <Option value={individualEntrepreneur}>Индивидуальный предприниматель</Option>
                            <Option value={juristicPersonOrganisation}>Юридическое лицо</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <OrganisationDetails
                organisationType={selectedOrganisationType}
                form={form}
            />
            <Button
                size="middle"
                onClick={prev}
                type="primary"
                className="registration-next-button">
                Назад
            </Button>

            <Button
                size="middle"
                onClick={submit}
                type="primary"
                className="registration-prev-button">
                Принять
            </Button>

            <AddressDrawer
                visible={visibleDrawer}
                showDrawer={showDrawer}
                onClose={onDrawerClose}
                onSubmit={onDrawerFormSubmit}
                initialData={address}
                form={drawerForm}
            />
        </>
    )
}

interface OrganisationDetailsProps {
    organisationType: string,
    form: FormInstance
}

export const OrganisationDetails: React.FC<OrganisationDetailsProps> = ({organisationType, form}) => {

    switch (organisationType) {
        case individualPerson:
            return <IndividualPersonDetails form={form}/>
        case individualEntrepreneur:
            return <IndividualEntrepreneurDetails form={form}/>
        case juristicPersonOrganisation:
            return <JuristicPersonOrganisationDetails form={form}/>
        default:
            return (<></>)
    }
}

interface DetailsForm {
    form: FormInstance
}

export const IndividualPersonDetails: React.FC<DetailsForm> = ({form}) => {
    return (
        <>
            <Divider>Данные физического лица</Divider>
            <Row>
                <Col span={6} offset={2}>
                    <Form.Item
                        name="personName"
                        initialValue={form.getFieldValue("organisationDetails")?.personName}
                        label="Имя"
                        rules={[
                            {
                                required: true,
                                message: "Пожалуйста, Введите имя физ. лица!"
                            }
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                <Col span={6} offset={1}>
                    <Form.Item
                        name="personSurname"
                        initialValue={form.getFieldValue("organisationDetails")?.personSurname}
                        label="Фамилия"
                        rules={[
                            {
                                required: true,
                                message: "Пожалуйста, Введите фамилию физ. лица!"
                            }
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                <Col span={6} offset={1}>
                    <Form.Item
                        name="personPatronymic"
                        initialValue={form.getFieldValue("organisationDetails")?.personPatronymic}
                        label="Отчество"
                        rules={[
                            {
                                required: true,
                                message: "Пожалуйста, Введите отчество физ. лица!"
                            }
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={8} offset={2}>
                    <Form.Item
                        name="INNNumber"
                        initialValue={form.getFieldValue("organisationDetails")?.INNNumber}
                        label="Номер ИНН"
                    >
                        <Input/>
                    </Form.Item>
                </Col>
            </Row>
        </>
    )
}

export const IndividualEntrepreneurDetails: React.FC<DetailsForm> = ({form}) => {
    return (
        <>
            <Divider>Данные индивидуального предпринимателя</Divider>
            <Row>
                <Col span={6} offset={2}>
                    <Form.Item
                        name="entrepreneurName"
                        label="Имя"
                        rules={[
                            {
                                required: true,
                                message: "Пожалуйста, Введите имя!"
                            }
                        ]}
                    >
                        <Input/>
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
                            }
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                <Col span={6} offset={1}>
                    <Form.Item
                        name="entrepreneurPatronymic"
                        label="Отчество"
                        rules={[
                            {
                                required: true,
                                message: "Пожалуйста, Введите отчество!"
                            }
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={8} offset={2}>
                    <Form.Item
                        name="entrepreneurINNNumber"
                        label="Номер ИНН"
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                <Col span={8} offset={4}>
                    <Form.Item
                        name="OGRN_IP_Number"
                        label="ОГРН ИП"
                    >
                        <Input/>
                    </Form.Item>
                </Col>
            </Row>
        </>
    )
}

export const JuristicPersonOrganisationDetails: React.FC<DetailsForm> = ({form}) => {
    return (
        <>
            <Divider>Данные юридического лица</Divider>
            <Row justify="space-between">
                <Col span={12} push={2}>
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
                        <Input/>
                    </Form.Item>
                </Col>
                <Col span={6} pull={2}>
                    <Form.Item
                        name="INNNumber"
                        label="Номер ИНН"
                        rules={[
                            {
                                required: true,
                                message: "Пожалуйста, Введите номер ИНН!"
                            }
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
            </Row>
            <Row justify="space-between">
                <Col span={12} push={2}>
                    <Form.Item
                        name="juristicAddress"
                        label="Юридический адрес"
                        rules={[
                            {
                                required: true,
                                message: "Пожалуйста, Введите юридический адрес!"
                            }
                        ]}
                    >
                        <Input placeholder={"Заглушка"}/>
                    </Form.Item>
                </Col>
                <Col span={6} pull={2}>
                    <Form.Item
                        name="KPPNumber"
                        label="Номер КПП"
                    >
                        <Input/>
                    </Form.Item>
                </Col>
            </Row>
            <Row justify="space-between">
                <Col span={6} push={2}>
                    <Form.Item
                        name="OGRN_Number"
                        label="Номер ОГРН"
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                <Col span={6} pull={2}>
                    <Form.Item
                        name="OKPONumber"
                        label="Номер ОКПО"
                    >
                        <Input/>
                    </Form.Item>
                </Col>
            </Row>
        </>
    )
}

export default RegistrationStepThree