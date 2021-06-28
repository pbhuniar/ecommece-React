import {useFormik } from 'formik'
import React from 'react'
import {Button,Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {signin} from '../../Action/user.action'
import {useDispatch} from 'react-redux'
import Mynavbar from '../Mynavbar/Mynavbar'
import './Login.css'
const Login = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            console.log(values);
            dispatch(signin(values))
        },
        validate: (values) => {
            const errors = {}
            if (!values.email) {
                errors.email = "can't keep this empty"
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = "invalid email formate "
            }
            if (values.password.length < 8) {
                errors.password = "password is short"
            }
            return errors
        }
    })
    return (
        <div>
            <Mynavbar></Mynavbar>
            <body>
                <br />
                <br />
                <div className="login-box">
                    <br />
                    <h1>Login Here</h1>
                    <br />
                    <i style={{color:'rgb(9, 245, 40)'}} class="fas fa-user-shield fa-3x"></i>
                    <br />
                    <br />
                    <Form className="from-text-block" onSubmit={formik.handleSubmit}>
                        <Form.Control className="from-text" type="email" name="email" id="email" placeholder="Enter your email address" onChange={formik.handleChange} />
                        {formik.errors.email ? <div className="login-error">{formik.errors.email}</div> : null}
                        <br />
                        
                        <Form.Control className="from-text" type="password" name="password" id="password" placeholder="Enter your password" onChange={formik.handleChange} />
                        {formik.errors.password ? <div className="login-error">{formik.errors.password}</div> : null}
                        <br />
                        
                        <Button variant="outline-success" size="lg" type="submit">Login</Button>
                        <br />
                        <br />
                        <p>New in ShoppyModel?   <Link to="/register">join now!</Link></p>
                    </Form>
                </div>

            </body>


        </div>
    )
}

export default Login
