import axios from '../../../axios';
import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
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
        <Container>
            <Row className="justify-content-center mt-5">
                <Col md={6}>
                    <h2 className="text-center mb-4">Login</h2>
                    {errors && <p className='text-danger'>{errors}</p>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name="email"
                                type="email"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={onChangeHandle}
                                className="form-control mb-3"
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name='password'
                                type="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={onChangeHandle}
                                className="form-control mb-3"
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="btn-block">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default UserLogin;

