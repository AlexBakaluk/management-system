import React, {useState} from "react";
import {Col, Form, FormInstance, Input, Row, Select} from "antd";
import {
    individualEntrepreneur,
    individualPerson,
    juristicPersonOrganisation
} from "../registration-1/RegistrationForm1";
import OrganisationDetails from "./organisation-details/OrganisationDetails";
import AddressDrawer from "./AddressDrawer";
import {Address} from "./organisation-details/RegistrationTypes";
import {getAddressStringValueFromObject} from "../../helpers/AddressHelper";

const {Option} = Select;

const {Search} = Input;

export let registrationAddress: Address = {
    country: undefined,
    region: undefined,
    city: undefined,
    street: undefined,
    house: undefined,
    building: undefined,
    flat: undefined
}

interface OrganisationDataProps {
    form: FormInstance
}

const RegistrationFormOrganisationData: React.FC<OrganisationDataProps> = ({form}) => {

    const [drawerForm] = Form.useForm()

    const [visibleDrawer, setVisibleDrawer] = useState<boolean>(false)

    const [selectedOrganisationType, setSelectedOrganisationType] = useState<string>('')

    const [addressFilled, setAddressFilled] = useState<boolean>(false)

    const showDrawer = () => {
        setVisibleDrawer(true)
    }

    const onDrawerClose = () => {
        setVisibleDrawer(false)
    }

    const onDrawerFormSubmit = () => {
        registrationAddress = {...drawerForm.getFieldsValue()}
        const addressValue = getAddressStringValueFromObject(registrationAddress)
        setAddressFilled(true)
        form.setFieldsValue({registrationAddress: addressValue})
        drawerForm.submit()
        onDrawerClose()
        return addressValue
    }

    return (
        <>
            <Row justify="space-between">
                <Col span={10} push={2}>
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
                        <Input placeholder="ИП Иванов Иван Иванович"/>
                    </Form.Item>
                </Col>
                <Col span={8} pull={2}>
                    <Form.Item
                        name="phone"
                        label="Номер телефона организации"
                        hasFeedback

                    >
                        <Input placeholder="+7-915-111-22-33"/>
                    </Form.Item>
                </Col>
            </Row>

            <Col span={20} push={2}>
                <Form.Item
                    getValueFromEvent={onDrawerFormSubmit}
                    shouldUpdate
                    name="registrationAddress"
                    label="Адрес организации"
                    rules={[{
                        required: true,
                        message: "Для заполнения адреса используйте кнопку \"Заполнить\""
                    }]}
                    tooltip="Message"
                >
                    <Search
                        readOnly
                        enterButton={addressFilled ? "Редактировать" : "Заполнить"}
                        size="middle"
                        onSearch={showDrawer}
                        loading={visibleDrawer}
                        placeholder="Россия, Московская область, Королев, ул. Космонавтов, 17/3, 135"
                    />
                </Form.Item >
            </Col>

            <Col span={8} push={2}>
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
                        placeholder="Укажите вид организации"
                    >
                        <Option value={individualPerson}>Физическое лицо</Option>
                        <Option value={individualEntrepreneur}>Индивидуальный предприниматель</Option>
                        <Option value={juristicPersonOrganisation}>Юридическое лицо</Option>
                    </Select>
                </Form.Item>
            </Col>
            <OrganisationDetails
                organisationType={selectedOrganisationType}
                form={form}
            />
            <AddressDrawer
                visible={visibleDrawer}
                showDrawer={showDrawer}
                onClose={onDrawerClose}
                onSubmit={onDrawerFormSubmit}
                initialData={registrationAddress}
                form={drawerForm}
            />
        </>
    )
}

export default RegistrationFormOrganisationData