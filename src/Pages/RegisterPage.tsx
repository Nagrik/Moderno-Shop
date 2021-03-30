import 'react-app-polyfill/ie11';
import * as React from 'react';
import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { NavLink } from 'react-router-dom';

interface Values {
    firstName: string;
    lastName: string;
    email: string;
    password:any

}


const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password:Yup.string()
        .min(6, 'Too Short!')
        .max(12, 'Too long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

const  loginHandler = async (values:any, {setSubmitting}:any) => {
    const payload = {
        email:values.email,
        password:values.password,
        returnSecureToken:true,
    }
    try {
        const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAPwJZ37KJ1j_dgSa_LJryFhD9H2U7eB84', payload)
        console.log(response.data)
    }catch (e){
        console.log(e)
    }finally {
        setSubmitting(false)
    }
}

const registerHandler = async (values:any, {setSubmitting}:any) => {
            const payload = {
                    email: values.email,
                    password: values.password,
                    returnSecureToken: true
    }
    try {
        const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAPwJZ37KJ1j_dgSa_LJryFhD9H2U7eB84', payload)
        console.log(response.data)
    }catch (e){
        console.log(e)
    }finally {
        setSubmitting(false)
    }
}
export const RegisterPage = () => {
    // @ts-ignore
    return (
        <div className="wrapper">
            <div className="content page-content">
                <div className='Settings'>
                    <div className='settings-title'>
                        <h1>Registration</h1>
                    </div>
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            password:''
                        }}
                        validationSchema={SignupSchema}

                     onSubmit={registerHandler}
                    >
                        {(formik:any) => (
                            <form onSubmit={formik.handleSubmit}>
                                <div className='InputItem'>

                                <Field id="firstName" name="firstName" placeholder="Name"
                                       className='FieldSettings'
                                       type='text'
                                       {...formik.getFieldProps('firstName')}
                                />

                                {formik.touched.firstName && formik.errors.firstName ? (
                                    <div className='error'>{formik.errors.firstName}</div>
                                ) : null}
                                </div>

                                <div className='InputItem'>
                                    <Field id="lastName" name='lastName' type='text' placeholder="Surname" className='FieldSettings'  {...formik.getFieldProps('lastName')}/>

                                    {formik.errors.lastName && formik.touched.lastName ? (
                                        <div className='error'>{formik.errors.lastName}</div>
                                    ) : null}
                                </div>

                                <div className='InputItem'>
                                    <Field
                                        id="email"
                                        name="email"
                                        placeholder="Email@gmail.com"
                                        type="email"
                                        className='FieldSettings'
                                    />

                                    {formik.errors.email && formik.touched.email ? (
                                        <div className='error'>{formik.errors.email}</div>
                                    ) : null}
                                </div>
                                <div className='InputItem'>
                                    <Field
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        type="password"
                                        className='FieldSettings'
                                    />

                                    {formik.errors.password && formik.touched.password ? (
                                        <div className='error'>{formik.errors.password}</div>
                                    ) : null}
                                </div>

                                <div className='settings-button-wrapper'>
                                    {
                                        !formik.errors.email && !formik.errors.firstName && !formik.errors.lastName
                                            //@ts-ignore
                                            ? <button type="submit" className='settings-button' onSubmit={registerHandler}>Register</button>
                                            : <button type="submit" className='settings-button-disabled'
                                                      disabled>Register</button>
                                    }
                                    <NavLink to='/Login' type="submit" >I'm already have an account</NavLink>

                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

