import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080/api',
})

export const authApi = {
    login(email: string, password: string, rememberMe: boolean) {
        return axios.post('http://localhost:8080/api/authenticate', {
            email: email,
            password: password,
            rememberMe: rememberMe
        })
    }
}