import React, {useEffect, useState} from "react";
import {Button, Col, DatePicker, Divider, Form, Input, Row, Select} from "antd";
import './RegistrationForm.css'
import RegistrationFormEnterData from "./RegistrationFormEnterData";
import RegistrationFormPersonalData from "./RegistrationFormPersonalData";
import RegistrationFormOrganisationData, {registrationAddress} from "./RegistrationFormOrganisationData";
import {
    IndividualEntrepreneurDetailsI,
    IndividualPersonDetailsI, JuristicPersonDetailsI,
    RegistrationData
} from "./organisation-details/RegistrationTypes";
import axios from "axios";
import {
    individualEntrepreneur,
    individualPerson,
    juristicPersonOrganisation
} from "../registration-1/RegistrationForm1";
import {juristicAddress} from "./organisation-details/JuristicPersonOrganisationDetails";
import {Redirect} from "react-router-dom";

export const onlyRussianCharactersRegexp = new RegExp("^[а-яёА-ЯЁ]+$")
export const onlyRussianCharactersValidationMessage = 'Допустимы только русские буквы'
export const onlyDigitsRegexp = new RegExp("^[0-9]+$")
export const onlyDigitsValidationMessage = 'Допустимы только цифры'

const RegistrationForm = () => {

    const [form] = Form.useForm()

    const [redirect, setRedirect] = useState<boolean>(false)

    const createDetailsFromValues = (values: any) => {
        switch (values.organisationType) {
            case individualEntrepreneur:
                const individualEntrepreneurDetails: IndividualEntrepreneurDetailsI = {
                    entrepreneurINNNumber: values.entrepreneurINNNumber,
                    entrepreneurName: values.entrepreneurName,
                    entrepreneurPatronymic: values.entrepreneurPatronymic,
                    entrepreneurSurname: values.entrepreneurSurname,
                    OGRN_IP_Number: values.OGRN_IP_Number,
                    registrationAddress: registrationAddress,
                    organisationType: individualEntrepreneur
                }
                return individualEntrepreneurDetails
            case individualPerson:
                const individualPersonDetails: IndividualPersonDetailsI = {
                    INNNumber: values.INNNumber,
                    personName: values.personName,
                    personPatronymic: values.personPatronymic,
                    personSurname: values.personSurname,
                    registrationAddress: registrationAddress,
                    organisationType: individualPerson
                }
                return individualPersonDetails
            case juristicPersonOrganisation:
                const juristicPersonDetails: JuristicPersonDetailsI = {
                    fullOrganisationName: values.fullOrganisationName,
                    INNNumber: values.JurOrg_INN_Number,
                    juristicAddress: juristicAddress,
                    OGRNNumber: values.OGRN_Number,
                    OKPONumber: values.OKPONumber,
                    KPPNumber: values.KPPNumber,
                    actualAddress: registrationAddress,
                    organisationType: juristicPersonOrganisation
                }
                return juristicPersonDetails
            default: return undefined
        }
    }

    const sendData = async (data: RegistrationData) => {
        const response = await axios.post('http://localhost:8080/api/register', data);
        if (response.status === 202) {
            alert("Успешная регистрация. Вы будете перенаправлены на страницу входа")
            setTimeout(() => {
                setRedirect(true)
            }, 3000)
        }
    }

    const onSubmit = (values: any) => {

        const details = createDetailsFromValues(values)

        const data: RegistrationData = {
            email: values.email,
            password: values.password,
            name: values.name,
            surname: values.surname,
            patronymic: values.patronymic,
            gender: values.gender,
            birthDate: values.birthDate,
            organisationShortName: values.shortName,
            phoneNumber: values.phone,
            details: details
        }
        sendData(data)
    }

    if (redirect) {
        return <Redirect to='/login/'/>
    }

    return (
        <Col span={16} offset={4}>
            <div className="registration-form">
                <h1>Регистрация</h1>
                <Form
                    name="registration-form"
                    form={form}
                    layout="vertical"
                    onFinish={onSubmit}
                >
                    <Divider orientation="left">Данные для входа</Divider>
                    <RegistrationFormEnterData/>
                    <Divider orientation="left">Персональные данные</Divider>
                    <RegistrationFormPersonalData/>
                    <Divider orientation="left">Данные организации</Divider>
                    <RegistrationFormOrganisationData form={form}/>
                    <Divider/>
                    <Col push={2}>

                        <Button
                            className="submit-button"
                            type="primary"
                            size="large"
                            htmlType="submit"
                        >
                            Зарегистрироваться
                        </Button>
                    </Col>
                </Form>
            </div>
            <br/>
            <br/>
        </Col>
    )
}

export default RegistrationForm