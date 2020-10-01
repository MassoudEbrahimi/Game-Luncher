import {toast} from 'react-toastify'




class Toast {
    Success(){
        toast.success("Create User Success Compelete",{
            autoClose : 2000
        })
    }
    Error(){
        toast.error("Wrong User name OR Password",{
            autoClose : 2000
        })
    }
    Warning(){
        toast.warning("",{
            autoClose : 2000
        })
    }
    Vanila(){
        toast("",{
            autoClose : 2000
        })
    }
    Info(){
        toast.info("",{
            autoClose : 2000
        })
    }
}
const _Toast = new Toast();
export default _Toast