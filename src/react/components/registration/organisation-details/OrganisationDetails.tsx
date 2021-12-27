import React from "react";
import {
    individualEntrepreneur,
    individualPerson,
    juristicPersonOrganisation
} from "../../registration-1/RegistrationForm1";
import IndividualPersonDetails from "./IndividualPersonDetails";
import IndividualEntrepreneurDetails from "./IndividualEntrepreneurDetails";
import JuristicPersonOrganisationDetails from "./JuristicPersonOrganisationDetails";
import {FormInstance} from "antd";

interface OrganisationDetailsProps {
    organisationType: string,
    form: FormInstance
}

export const OrganisationDetails: React.FC<OrganisationDetailsProps> = ({organisationType, form}) => {

    switch (organisationType) {
        case individualPerson:
            return <IndividualPersonDetails/>
        case individualEntrepreneur:
            return <IndividualEntrepreneurDetails/>
        case juristicPersonOrganisation:
            return <JuristicPersonOrganisationDetails form={form}/>
        default:
            return (<></>)
    }
}

export default OrganisationDetails