import {Address} from "../components/registration/organisation-details/RegistrationTypes";

export const getAddressStringValueFromObject = (address: Address) => {
    return address.country + ', ' +
    address.region + ', ' +
    address.city + ', ' +
    address.street + ', ' +
    address.house +
    (address.building ? '/' + address.building : '') +
    (address.flat ? ', ' + address.flat : '')
}