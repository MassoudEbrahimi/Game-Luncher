import http from './httpsService'
import config from '../config.json'
import httpsService from './httpsService'

export function LoginAuth(data) {
    return http.post(config.api_SendLogin, data)
}
export function SignUpuser(data){
    return http.post(config.api_SendSignUp ,data)
}