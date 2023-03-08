import { useEffect } from "react"
import { useNavigate } from "react-router-dom"



const  HospitalVerification = ({ children }) => {
 
    const navigate = useNavigate()

    useEffect(()=> {

        if(!localStorage.getItem('HospitalToken')){
            navigate("/hospital/login");
        }
    })

    return children
}

 export default  HospitalVerification
