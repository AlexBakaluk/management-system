import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080/api/address'
})

export const addressApi = {
    getAllCountries() {
        return instance.get('/country')
    },
    getAllRegionsByCountry(countryName: string) {
        return instance.get("/region", {
            params: {countryName}
        })
    },
    getAllCities(regionId: number) {
        return instance.get("/city", {
            params: {regionId}
        })
    },
    getAllStreetsByCity(cityId: number) {
        return instance.get("/street", {
            params: {cityId}
        })
    }
}