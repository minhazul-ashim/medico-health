import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { BsGoogle, BsGithub } from 'react-icons/bs'
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'
import './Login.css'

const Login = () => {

    const location = useLocation().state?.from || '/home';

    let history = useHistory();

    const { error, signInUsingGoogle, signInUsingGithub, passwordAuth } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        passwordAuth(data)
            .then(result => {
                history.push(location)
            });
    };

    const googleLogin = () => {

        signInUsingGoogle()
            .then(result => {
                history.push(location)
            })
            .finally()
    }
    const githubLogin = () => {

        signInUsingGithub()
            .then(result => {
                history.push(location)
            })
    }

    return (
        <Container className='p-5'>
            <div className="d-flex flex-column align-items-center w-75  mx-auto login-form">
                <div className="w-25">
                    <img className='img-fluid' src={logo} alt="" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='w-75 p-5'>

                    <input defaultValue="" {...register("email", { required: true })} className='form-control mb-3' placeholder='Enter your email' />
                    {errors.email && <span className='d-block'>This field is required</span>}

                    <input {...register("password", { required: true })} className='form-control mb-3' type='password' placeholder='Enter password' />
                    {errors.password && <span className='d-block'>This field is required</span>}

                    <input type="submit" className='btn btn-success' />
                </form>
                <div className='d-flex flex-column align-items-center'>
                    <p>Log in using</p>
                    <div>
                        <Button onClick={googleLogin} variant='danger me-2'><BsGoogle /></Button>
                        <Button onClick={githubLogin} variant='dark'><BsGithub /></Button>
                    </div>
                    <p>New Here? <Link to='/register'> Register</Link></p>
                    <p>{error}</p>
                </div>
            </div>
        </Container>
    );
};

export default Login;