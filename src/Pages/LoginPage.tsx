import 'react-app-polyfill/ie11';
import * as React from 'react';
import {Formik, Field} from 'formik';
import * as Yup from 'yup';
import {auth} from "../redux/actions/auth";
import {connect} from "react-redux";


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



const LoginPage = (props:any) => {
    const  loginHandler = async (values:any, {setSubmitting}:any) => {
        props.auth(
            values.email,
            values.password,
            true,
        )
        try {
        }catch (e){
            console.log(e)
        }finally {
            setSubmitting(false)
        }
    }
    return (
        <div className="wrapper">
            <div className="content page-content">
                <div className='Settings'>
                    <div className='settings-title'>
                        <h1>Log In</h1>
                    </div>
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            password:''
                        }}
                        validationSchema={SignupSchema}
//@ts-ignore
                        onSubmit={loginHandler}
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
                                            ? <button type="submit" className='settings-button' onSubmit={loginHandler}>Login</button>
                                            : <button type="submit" className='settings-button-disabled'
                                                      disabled>Login</button>
                                    }
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};
function mapDispatchToProps(dispatch:any) {
    return{
        auth: (email:any,password:any, isLogin:any) => dispatch(auth(email, password, isLogin))
    }
}

export default connect(null , mapDispatchToProps)(LoginPage)

