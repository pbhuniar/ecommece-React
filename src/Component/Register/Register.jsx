import React from 'react'
import './Register.css'
import { useFormik } from 'formik'
import Mynavbar from '../Mynavbar/Mynavbar';
import {Link} from 'react-router-dom'
import {Button,Form} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {register} from '../../Action/user.action'
import About from '../About/About';
const Register = () => {
const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            console.log(values);
            dispatch(register(values))
        },
        validate: (values) => {
            const errors = {}
            if (!values.firstname) {
                errors.firstname = "Values required"
            }
            if (!values.lastname) {
                errors.lastname = "Values required"
            }
            if (!values.email) {
                errors.email = "Email required"
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = "Not Valid"
            }
            if (!values.password) {
                errors.password = "Password required"
            }
            else if(values.password.length<8){
                errors.password="password is too short"
            }
            return errors
        }
    })
    return (
        <div>
            <Mynavbar></Mynavbar>

            <body>
              
                <br />
                <div className="login-box">
                    
                <h1 className="">Register Now</h1>
           
               <p>Already have an account <Link to="/login">click here!</Link></p>
                    <i style={{ color: 'rgb(218, 47, 81)'}} class="fas fa-fingerprint fa-3x"></i>
                    <br />
                    <br />
                    <Form className="from-text-block" onSubmit={formik.handleSubmit}>
                        <Form.Control type="text" name="firstname" id="firstname" placeholder="Enter your first name" onChange={formik.handleChange} />
                        {formik.errors.firstname ? <div style={{ color: 'rgb(245, 98, 127)', fontSize: 15 }}>{formik.errors.firstname}</div> : null}
                        <br />
                        
                        <Form.Control type="text" name="lastname" id="lastname" placeholder="Enter your laste name" onChange={formik.handleChange} />
                        {formik.errors.lastname ? <div style={{ color: 'rgb(245, 98, 127)', fontSize: 15 }}>{formik.errors.lastname}</div> : null}
                        <br />
                        
                        <Form.Control type="email" name="email" id="email" placeholder="Enter your email address" onChange={formik.handleChange} />
                        {formik.errors.email ? <div style={{ color: 'rgb(245, 98, 127)', fontSize: 15 }}>{formik.errors.email}</div> : null}
                        <br />
                        <Form.Control type="password" name="password" id="password" placeholder="Enter your password" onChange={formik.handleChange} />
                        {formik.errors.password ? <div style={{ color: 'rgb(245, 98, 127)', fontSize: 15 }}>{formik.errors.password}</div> : null}
                        <br />
                        
                        <Button type="submit" variant="outline-danger" size="lg"  >Register</Button>
                        

                    </Form>
                </div>

            </body>
            <About/>
        </div>
    )
}

export default Register
