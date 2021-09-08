import axios from "axios";

export const instanceWithToken = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'AUTHORIZATION': 'Bearer ' + localStorage.getItem("token")
    }
})

export const getMyInfoApi = {
    me() {
        return instanceWithToken.get('/me')
    }
}