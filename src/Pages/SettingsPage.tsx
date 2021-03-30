import 'react-app-polyfill/ie11';
import * as React from 'react';
import {Formik, Field, Form, FormikHelpers} from 'formik';
import * as Yup from 'yup';
import axios from "axios";

interface Values {
    firstName: string;
    lastName: string;
    email: string;
    Company: string,
    City: string,
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
    Company: Yup.string()
        .min(2, 'Too Short!')
        .max(15, 'Too Long!'),
    City: Yup.string()
        .min(2, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

export const SettingsPage = () => {
    return (
        <div className="wrapper">
            <div className="content page-content">
                <div className='Settings'>
                    <div className='settings-title'>
                        <h1>Personal Information</h1>
                    </div>
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            Company: '',
                            City: '',
                        }}

                        validationSchema={SignupSchema}
                        onSubmit={(
                            values: Values,
                            {setSubmitting}: FormikHelpers<Values>,
                        ) => {
                            setTimeout(async () => {

                                try {
                                    const response = await axios.post('https://modernoshop-b8052-default-rtdb.firebaseio.com/UserInfo.json', values)
                                } catch (e) {
                                    console.log(e)
                                }


                                setSubmitting(false);
                            }, 500);
                        }}
                    >
                        {({errors, touched}) => (
                            <Form className='SettingsForm'>
                                <div className='InputItem'>
                                    <Field id="firstName" name="firstName" placeholder="First name"
                                           className='FieldSettings'/>

                                    {errors.firstName && touched.firstName ? (
                                        <div className='error'>{errors.firstName}</div>
                                    ) : null}
                                </div>

                                <div className='InputItem'>
                                    <Field id="lastName" name="lastName" placeholder="Surname" className='FieldSettings'/>

                                    {errors.lastName && touched.lastName ? (
                                        <div className='error'>{errors.lastName}</div>
                                    ) : null}
                                </div>

                                <div className='InputItem'>
                                    <Field id="City" name="City" placeholder="City" className='FieldSettings'/>

                                    {errors.City && touched.City ? (
                                        <div className='error'>{errors.City}</div>
                                    ) : null}
                                </div>

                                <div className='InputItem'>
                                    <Field id="Company" name="Company" placeholder="Company name" className='FieldSettings'/>

                                    {errors.Company && touched.Company ? (
                                        <div className='error'>{errors.Company}</div>
                                    ) : null}
                                </div>

                                <div className='InputItem'>
                                    <Field
                                        id="email"
                                        name="email"
                                        placeholder="email@gmail.com"
                                        type="email"
                                        className='FieldSettings'
                                    />

                                    {errors.email && touched.email ? (
                                        <div className='error'>{errors.email}</div>
                                    ) : null}
                                </div>

                                <div className='settings-button-wrapper'>
                                    {
                                        !errors.email && !errors.firstName && !errors.lastName && !errors.City && !errors.Company
                                            ? <button type="submit" className='settings-button'>Submit</button>
                                            : <button type="submit" className='settings-button-disabled'
                                                      disabled>Submit</button>

                                    }

                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

