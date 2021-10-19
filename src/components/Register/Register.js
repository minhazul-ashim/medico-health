import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('')

    const { error, createUser } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => createUser(data);

    // const getEmail = (e) => {

    //     setEmail(e.target.value)
    //     console.log(email)
    // }

    // const getPassword = (e) => {

    //     setPassword(e.target.value)
    //     console.log(password)
    // }

    return (
        <Container className='p-5 d-flex flex-column align-items-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-75'>

                <input defaultValue="" {...register("email", { required: true })} className='form-control mb-3' placeholder='Enter your email' />
                {errors.email && <span className='d-block'>This field is required</span>}

                <input {...register("password", { required: true })} className='form-control mb-3' type='password' placeholder='Enter password' />
                {errors.password && <span className='d-block'>This field is required</span>}

                <input type="submit" className='btn btn-success' />
            </form>
            <p>Already have an account?<Link to='/login'> Log in</Link></p>
            <p>{error}</p>
        </Container>
    );
};

export default Register;