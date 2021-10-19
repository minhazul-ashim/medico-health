import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { BsGoogle, BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { user, error, signInUsingGoogle, signInUsingGithub } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Container className='p-5 d-flex flex-column align-items-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-75'>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="" {...register("email", { required: true })} className='form-control mb-3' placeholder='Enter your email' />
                {errors.email && <span className='d-block'>This field is required</span>}

                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("password", { required: true })} className='form-control mb-3' type='password' placeholder='Enter password' />
                {errors.password && <span className='d-block'>This field is required</span>}

                <input type="submit" className='btn btn-success' />
            </form>
            <div>
                <p>Log in using</p>
                <Button onClick={signInUsingGoogle} variant='danger me-2'><BsGoogle /></Button>
                <Button onClick={signInUsingGithub} variant='dark'><BsGithub /></Button>
                <p>New Here? <Link to='/register'> Register</Link></p>
                <p>{error}</p>
            </div>
        </Container>
    );
};

export default Login;