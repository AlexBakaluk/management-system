import axios from "axios";
import {getAccessToken} from "../redux/reducers/tokensReducer";

const instance = axios.create({
    // withCredentials: true,
    baseURL: 'http://localhost:8080/api/'
})

const loginInstance = axios.create({
    baseURL: 'http://localhost:8080/api/login',
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        // 'Access-Control-Allow-Credentials':true,
        // 'Access-Control-Allow-Origin': "*"
    }

})

export const authApi = {
    login(email: string, password: string) {
        const data = new URLSearchParams();
        data.append("email", email)
        data.append("password", password)
        return loginInstance.post('', data.toString())
    },
    me(accessToken: string) {
        const token = 'Bearer ' + accessToken
        console.log(token)
        return instance.get('/me', {
            headers: {
                "Authorization": token
            }
        })
    }
}