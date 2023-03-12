import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from '../axios'



const  HospitalVerification = ({ children }) => {
 
    const navigate = useNavigate()

    useEffect(()=> {
      if (!localStorage.getItem("HospitalToken")) {
        navigate("/hospital/login", { replace: true });
      }
      // eslint-disable-next-line
    },[])

    useEffect(()=> {
        if(localStorage.getItem("HospitalToken")){
            const headers = {
                headers : {
                    Authorization: localStorage.getItem("HospitalToken")
                }
            }
         axios.get('/hospital/getHome',headers)

        }
    },[])

    return children
}

 export default  HospitalVerification
