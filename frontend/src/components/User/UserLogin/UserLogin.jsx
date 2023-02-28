import axios from '../../../axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
    const initialState = {email : "", password: "" }
    const [formData, setFormData] = useState(initialState)
    const [errors,setErrors] = useState(null)
    const navigate = useNavigate()

    const onChangeHandle = (event) => {
       
        const {name, value} = event.target

         setFormData({...formData,[name]:value })

    }


    const handleSubmit = (event) => {
        event.preventDefault();
       axios.post('/auth/login',{
         email:formData.email,
         password:formData.password
       }).then((res)=>{
        console.log(res);
        navigate('/')
       }).catch((err)=>{
         console.log(err);
           const obj = err.response.data
           const arr = [...Object.values(obj)]
           setErrors(arr[0])
       })
    };

    return (

        <div>
    <h1>Login</h1>
                {errors && <p className='text-danger'>{errors}</p>}

            <form onSubmit={handleSubmit}>
            <label >Name</label>
            <input 
             name="email"                       
              type="email"
            placeholder="Enter email"
             value={formData.email}
            onChange={onChangeHandle}/>

           <label >Name</label>
            <input 
             name='password'
              type="password"
              placeholder="Password"
             value={formData.password}
             onChange={onChangeHandle} />

             <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default UserLogin;

