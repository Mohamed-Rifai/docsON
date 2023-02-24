import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
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
      <Container>
          <Row>
              <Col md={{ span: 6, offset: 3 }}>
                  <h1>Sign Up</h1>
                  {errors && <p style={{color:"red"}}>{errors}</p>}
                  <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="formBasicName">
                          <Form.Label>Nama</Form.Label>
                          <Form.Control
                          name='name'
                           type="text"
                           value={formData.name}
                           onChange={onChangeHandle}

                           placeholder="Enter name" />
                      </Form.Group>

                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control 
                          name='email'
                          type="email"
                          value={formData.email}
                              onChange={onChangeHandle}

                          placeholder="Enter email"
                           />
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                          name='password'
                           type="password"
                           value={formData.password}
                              onChange={onChangeHandle}

                            placeholder="Password" />
                      </Form.Group>

                      <Form.Group controlId="formBasicConfirmPassword">
                          <Form.Label>Confirm Password</Form.Label>
                          <Form.Control
                          name='confirmPassword'
                           type="password"
                           value={formData.confirmPassword}
                           onChange={onChangeHandle}
                           placeholder="Confirm Password" />
                      </Form.Group>

                      <Button variant="primary" type="submit">
                          Sign Up
                      </Button>
                  </Form>
              </Col>
          </Row>
      </Container>
  )
}

export default UserSignup



