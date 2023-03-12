import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setHospital } from "../app/slices/authHospital"
import axios from '../axios'



const  HospitalVerification = ({ children }) => {
 
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=> {
      if (!localStorage.getItem("HospitalToken")) {
        navigate("/hospital/login", { replace: true });
      }
      // eslint-disable-next-line
    },[])

    useEffect(()=> {
      if (localStorage.getItem("HospitalToken")) {
        const headers = {
          headers: {
            Authorization: localStorage.getItem("HospitalToken"),
          },
        };
        axios.get("/hospital/getHome", headers).then((res) => {
        
          dispatch(setHospital(res.data));
        });
      }
      // eslint-disable-next-line
    },[])

    return children
}

 export default  HospitalVerification
