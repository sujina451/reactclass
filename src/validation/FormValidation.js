import React from 'react'
import { Formik, Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'

const FormValidation = () => {
    return (
        <>
            <Formik
            initialValues={{firstname:'',lastname:'',email:'',password:'',cpassword:''}}
            validationSchema={Yup.object({
                firstname:Yup.string()
                .max(20,'Must be 20 characters or less')
                .required('FirstName must be required'),

                lastname:Yup.string()
                .max(20,'Must be 20 characters or less')
                .required('Lastname is required'),

                email:Yup.string()
                .email('Inavlid email please write valid one')
                .required('Email is required'),

                password:Yup.string()
                .matches(/(?=.*[A-Za-z])(?=.*\d)(?=.*@$!%#?&])[A-Za-z\d@$!%#?&]{8,}$/,
                "Must Contain 8 characters,One Uppercase;One Lowercase,One Number and one special case character")
                .required('Required Field'),

                cpassword:Yup.string()
                .required('Required Field')
                .oneOf([Yup.ref("password"),null],"password and confirm password must match")
            }

            )}
            >
                <div className="col-md-6 offset-md-3 p-3 mt-4 shadow-lg">
                <Form>
                    <div className="mb-3">
                        <label htmlFor="firstname">Firstname</label>
                        <Field type="text" name="firstname" className="form-control" />
                        <ErrorMessage name="firstname">
                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastname">Lastname</label>
                        <Field type="text" name="lastname" className="form-control" />
                        <ErrorMessage name="lastname">
                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <Field type="email" name="email" className="form-control" />
                        <ErrorMessage name="email">
                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <Field type="password" name="password" className="form-control" />
                        <ErrorMessage name="password">
                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpassword">Confirm Password</label>
                        <Field type="password" name="cpassword" className="form-control" />
                        <ErrorMessage name="cpassword">
                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </Form>
                </div>
            </Formik>
        </>
    )
}

export default FormValidation
