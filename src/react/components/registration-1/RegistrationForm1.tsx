import React from "react";
import {Button, Col, Form, Row, Steps} from 'antd';
import '../registration/RegistrationForm.css'
import RegistrationStepOne from "./RegistrationStepOne";
import RegistrationStepTwo from "./RegistrationStepTwo";
import RegistrationStepThree from "./RegistrationStepThree";

const {Step} = Steps;

export const individualPerson = "ORGANISATION_TYPE/INDIVIDUAL_PERSON"
export const individualEntrepreneur = "ORGANISATION_TYPE/INDIVIDUAL_ENTREPRENEUR"
export const juristicPersonOrganisation = "ORGANISATION_TYPE/JURISTIC_PERSON"

interface IndividualPerson {
    personName: string | undefined,
    personSurname: string | undefined,
    personPatronymic: string | undefined,
    INNNumber: string | undefined,
}

interface IndividualEntrepreneur {
    entrepreneurName: string | undefined,
    entrepreneurNameSurname: string | undefined,
    entrepreneurNamePatronymic: string | undefined,
    entrepreneurNameINNNumber: string | undefined,
    OGRN_IP_Number: string | undefined
}

interface JuristicPerson {
    fullOrganisationName: string | undefined,
    INNNumber: string | undefined,
    juristicAddress: string | undefined,
    KPPNumber?: string | undefined,
    OGRN_Number?: string | undefined,
    OKPONumber?: string | undefined,
}

export interface FormData {
    email: string | undefined,
    password: string | undefined,
    confirmPassword: string | undefined,
    name: string | undefined,
    surname: string | undefined,
    patronymic: string | undefined,
    gender: string | undefined,
    birthDate: string | undefined,
    shortName: string | undefined,
    phone: string | undefined,
    actualAddress: string | undefined,
    organisationType: string | undefined,
    leaderName: string | undefined,
    organisationDetails: IndividualPerson | IndividualEntrepreneur | JuristicPerson | undefined
}

let formInitialData: FormData = {
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
    name: undefined,
    surname: undefined,
    patronymic: undefined,
    gender: undefined,
    birthDate: undefined,
    shortName: undefined,
    actualAddress: undefined,
    phone: undefined,
    leaderName: undefined,
    organisationType: undefined,
    organisationDetails: undefined
}

const RegistrationForm1 = () => {

    const [currentStep, setCurrentStep] = React.useState(0);

    const stepOneRequiredFieldsNames: Array<string> = ["email", "password", "confirmPassword"]
    const stepTwoRequiredFieldsNames: Array<string> = ["name", "surname", "gender", "birthDate"]

    const [form] = Form.useForm()

    const next = () => {
        setCurrentStep(currentStep + 1);

    };

    const prev = () => {
        setCurrentStep(currentStep - 1);
    };

    const submit = () => {
        if (currentStep === 2) {
            alert("Последняя")
            formInitialData = {...formInitialData,
                organisationDetails: {...form.getFieldsValue()}}
            alert(JSON.stringify(formInitialData))
            console.log(formInitialData)
        } else {
            alert("Не последняя")
            formInitialData = {...formInitialData, ...form.getFieldsValue()}
            setCurrentStep(currentStep + 1);
            alert(JSON.stringify(formInitialData))
        }

    }

    const onFinish = (values: any) => {
        // alert(JSON.stringify(form.getFieldsValue()))
        alert(JSON.stringify(values))
        // alert(JSON.stringify(formInitialData))
        // console.log(logform)
    }

    const registrationSteps = [
        {
            title: 'Данные для входа',
            content: <RegistrationStepOne
                form={form}
                nextStep={submit}
                requiredFieldsNames={stepOneRequiredFieldsNames}
            />
        },
        {
            title: 'Персональные данные',
            content: <RegistrationStepTwo
                form={form}
                nextStep={submit}
                prevStep={prev}
                requiredFieldsNames={stepTwoRequiredFieldsNames}
            />
        },
        {
            title: 'Данные организации',
            content: <RegistrationStepThree
                form={form}
                submit={submit}
                prev={prev}
            />
        },
    ]

    return (

        <div className="steps-container">
            <div className="steps-header">
                <Row align="middle">

                    <Col span={20} offset={2}>
                        <Steps current={currentStep} status="process">
                            {registrationSteps.map(item => (
                                <Step key={item.title} title={item.title}/>
                            ))}
                        </Steps>
                    </Col>

                </Row>
            </div>
            <Col span={20} offset={2}>
                <div className="steps-content">

                    <Form

                        name="registration-form"
                        form={form}
                        layout="vertical"
                        initialValues={formInitialData}
                        onFinish={onFinish}
                    >
                        {registrationSteps[currentStep].content}
                    </Form>

                </div>
            </Col>
            <div className="steps-action">
                {/*{currentStep < registrationSteps.length - 1 && (*/}
                {/*    <Button htmlType="submit" type="primary" onClick={() => next()}>*/}
                {/*        Вперед*/}
                {/*    </Button>*/}
                {/*)}*/}
                {/*{currentStep === registrationSteps.length - 1 && (*/}
                {/*    // <Button htmlType="submit" type="primary">*/}
                {/*    //     Завершить*/}
                {/*    // </Button>*/}
                {/*)}*/}
                {/*{currentStep > 0 && (*/}
                {/*    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>*/}
                {/*        Назад*/}
                {/*    </Button>*/}
                {/*)}*/}
            </div>
        </div>
    )

}


export default RegistrationForm1