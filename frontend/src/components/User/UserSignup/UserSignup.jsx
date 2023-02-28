import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from '../../../axios'


const UserSignup = () => {


  const initialValues = {name : "" , email: "", password: "", confirmPassword: ""}
  const [formData,setFormData] = useState(initialValues)
  const [errors, setErrors] = useState(null)
  const navigate = useNavigate()
    const onChangeHandle = (e) => {
     
        const {name, value} = e.target;
        setFormData({...formData,[name]: value})
       
    }

    const handleSubmit = (e) =>{
        
        e.preventDefault()  
        axios.post('auth/signup',{
            name:formData.name,
            email:formData.email,
            password:formData.password,
            confirmPassword:formData.confirmPassword
        }).then((res)=>{
            console.log(res.data);
            navigate('/login')
        }).catch((err)=>{
            console.log(err);
            const obj = err.response.data
            const arr = [...Object.values(obj)]
            setErrors(arr[0])
           

        })
       

    }
    

  return (
    <div>
     

      <div>
        
        <h2>Sign Up</h2>
              {errors && <p style={{ color: "red" }}>{errors}</p>}
   <form onSubmit={handleSubmit}>
        <label >Name</label>
        <input 
         name='name'
         onChange={onChangeHandle}
         type="text"
         value={formData.name}
        placeholder="Enter name" /> <br />
       
              <label >Email</label>
              <input
                  name='email'
                  type="email"
                  value={formData.email}
                  onChange={onChangeHandle}

                  placeholder="Enter email" /> <br />

              <label >Password</label>
              <input
                  name='password'
                  type="password"
                  value={formData.password}
                  onChange={onChangeHandle}

                  placeholder="Password"/>

              <label >confirm Password</label>
              <input
                  name='confirmPassword'
                  type="password"
                  value={formData.confirmPassword}
                  onChange={onChangeHandle}
                  placeholder="Confirm Password" /> 

  <button type='submit'>Signup</button>
              </form>
      </div>

      </div>
  )
}

export default UserSignup



