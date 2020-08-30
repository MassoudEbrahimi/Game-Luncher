import axios from "axios";
import { toast } from "react-toastify";
import Cookie from 'js-cookie';
// import Clinet from '../utils/client';
// const clientInfo = Clinet.getInfo();

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common['Authorization'] = "Bearer  " + Cookie.get('token')
// axios.defaults.headers.common['browserName'] = clientInfo.browserName;
// axios.defaults.headers.common['browserVersion'] = clientInfo.browserVersion;
// axios.defaults.headers.common['os'] = clientInfo.os;
// axios.defaults.headers.common['isMobile'] = clientInfo.isMobile;


// axios.interceptors.response.use(null, (error) => {
//   console.log(error);
//   const expectedError =
//     error.response &&
//     error.response.status >= 400 &&
//     error.response.status < 500;

//   if (!expectedError) {


//     toast.error("خطا در خواندن پایگاه داده ");
//   }
//   return Promise.reject(error);
// });

// export default {
//   get: axios.get,
//   post: axios.post,
//   put: axios.put,
//   delete: axios.delete,
// };

// request interceptor for authorization
axios.interceptors.response.use(response => response, (error) => {
    try {
        if (!error.response || error.response.status === 404 || error.response.status === 500 || error.response.status === 501 || error.response.status === 504) {

            return Promise.resolve(
                {
                    data: {
                        Message: 'عدم اتصال به پایگاه داده',
                        Error: true,
                    }
                }
            );
        }
        else if (error.response.status === 401 || error.response.status === 403) {
            return Promise.resolve(
                {
                    data: {
                        Message: 'عدم اعتبار سنجی درست',
                        Error: true
                    }
                }
            );
        }
        else if (error.response.status === 10) {
            return Promise.resolve(
                {
                    data: {
                        Message: error.response.data,
                        Error: true
                    }
                }
            )
        }
        else {
            return Promise.resolve(
                {
                    data: {
                        Message: error,
                        Error: true
                    }
                }
            );
        }
    }
    catch (e) {

    }

});



export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
}