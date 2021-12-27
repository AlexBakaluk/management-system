interface OrganisationType {
    organisationType: string
}

export interface IndividualPersonDetailsI extends OrganisationType {
    personName: string,
    personSurname: string,
    personPatronymic: string | undefined,
    INNNumber: string | undefined,
    registrationAddress: Address,
}

export interface IndividualEntrepreneurDetailsI extends OrganisationType {
    entrepreneurName: string,
    entrepreneurSurname: string,
    entrepreneurPatronymic: string | undefined,
    entrepreneurINNNumber: string | undefined,
    OGRN_IP_Number: string | undefined,
    organisationType: string,
    registrationAddress: Address,
}

export interface JuristicPersonDetailsI extends OrganisationType {
    fullOrganisationName: string,
    INNNumber: string,
    juristicAddress: Address,
    KPPNumber: string | undefined,
    OGRNNumber: string | undefined,
    OKPONumber: string | undefined,
    actualAddress: Address,
}

export interface RegistrationData {
    email: string,
    password: string,
    name: string,
    surname: string,
    patronymic: string | undefined,
    gender: string,
    birthDate: string,
    organisationShortName: string,
    phoneNumber: string,
    details: IndividualPersonDetailsI | IndividualEntrepreneurDetailsI | JuristicPersonDetailsI | undefined
}

export interface Address {
    country: string | undefined,
    region: string | undefined,
    city: string | undefined,
    street: string | undefined,
    house: string | undefined,
    building: string | undefined,
    flat: string | undefined
}