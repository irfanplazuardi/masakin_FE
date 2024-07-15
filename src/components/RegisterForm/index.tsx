import { useRouter } from 'next/navigation';
import React from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { Formik, Field, ErrorMessage } from 'formik';
import FormButton from '../FormButton';
import FormInput from '../FormInput';

const RegisterForm = () => {
    // router for navigation
    const router = useRouter();

    // formik initialValues
    const initialValues = {
      username: '',
      email: '',
      password: '',
    };

    // formik validation schema
    const validationSchema = Yup.object({
      username: Yup.string().required('Username is required'),
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

    // this function will be called when the form is submitted
    const handleRegister = async (values: typeof initialValues) => {
      try {
        const response = await axios.post(
          'https://masakin-be.adaptable.app/api/auth/sign-up',
          values
        );
        if (response.status === 201) {
          router.push('/login');
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          console.error('Registration failed:', error.response.data);
        } else {
          console.error('An unexpected error occurred:', error);
        }
      }
    };
  return (
    
    // formik form
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleRegister}
    >
      {({ values, handleChange, handleSubmit }) => {
        return (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center gap-6 mt-[50px]"
          >
            <div className="flex flex-col gap-6">
                {/* Username */}
              <Field
                component={FormInput}
                id="username"
                name="username"
                label="Username"
                type="text"
                placeholder="Username"
                value={values.username}
                onChange={handleChange}
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-[14px] font-[500]"
              />
                {/* Email */}
              <Field
                component={FormInput}
                id="email"
                name="email"
                label="Email"
                type="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-[14px] font-[500]"
              />
                {/* Password */}
              <Field
                component={FormInput}
                id="password"
                name="password"
                label="Password"
                type="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-[14px] font-[500]"
              />
            </div>

            <div>
              <FormButton text="Register" type="submit" />
            </div>
          </form>
        );
      }}
    </Formik>
  );
}

export default RegisterForm