import { useRouter } from 'next/navigation';
import React from 'react';
import * as Yup from 'yup';

const RegisterForm = () => {
    // router for navigation
    const router = useRouter();

    // formik initialValues
    const initialValues = {
      username: '',
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      password: '',
    };

    // formik validation schema
    const validationSchema = Yup.object({
      username: Yup.string().required('Username is required'),
      firstname: Yup.string().required('First name is required'),
      lastname: Yup.string().required('Last name is required'),
      phone: Yup.string()
        .matches(/^\+?[0-9]+$/, 'Phone number is not valid')
        .required('Phone is required'),
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          'Invalid email address'
        )
        .required('Email is required'),
      password: Yup.string()
        .min(8, 'Password must contain at least 8 characters')
        .matches(
          /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/,
          'Password must contain at least one letter, one number, and one special character'
        )
        .required('Password is required'),
    });

  return (
    <div>RegisterForm</div>
  )
}

export default RegisterForm