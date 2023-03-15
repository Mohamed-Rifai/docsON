import  { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const UserVerification = ({ children }) => {
      const navigate = useNavigate()
      const location = useLocation()
      

useEffect(() => {

  if (!localStorage.getItem("UserToken")) {
    navigate("/user/login", {
      state: { from: location?.state?.from },
      replace: true,
    });
  }
  // eslint-disable-next-line
},[])

  return children
}

export default UserVerification
