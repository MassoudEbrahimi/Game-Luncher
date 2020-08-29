import { toast } from 'react-toastify'



class Handler {
    apiHandler(response = {}, callback) {
        if (response.data && response.data.Error) {
            this.message(response.data.message)
        }
        callback(response.data, response.status)
    }
    message(msg) {
        toast.error(msg, {
            autoClose: 3000,
            closeOnClick: true
        })
    }
}
const _Handler = new Handler()
export default _Handler