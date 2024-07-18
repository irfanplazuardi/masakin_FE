import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Pastikan import ini benar
import axios from 'axios';
import FormInput from '../FormInput';
import FormButton from '../FormButton';
import FormRedText from '../FormRedText';

const SkeletonLoginForm = () => (
  <div className="flex flex-col gap-6 items-center mt-[50px] animate-pulse">
    <div className="w-64 h-10 bg-gray-200 rounded mb-4"></div>
    <div className="w-64 h-10 bg-gray-200 rounded mb-4"></div>
    <div className="w-40 h-6 bg-gray-200 rounded mb-4"></div>
    <div className="w-24 h-10 bg-gray-200 rounded mb-4"></div>
    <div className="flex items-center w-full gap-4">
      <hr className="flex-grow border-t border-gray-300" />
      <div className="w-24 h-6 bg-gray-200 rounded"></div>
      <hr className="flex-grow border-t border-gray-300" />
    </div>
  </div>
);

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const baseUrl = 'https://masakin-be.adaptable.app';

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/api/auth/log-in`, {
        email: loginData.email,
        password: loginData.password,
      });
      console.log('response', response.data);
      const accessToken = response.data.access_token;
      if (accessToken) {
        localStorage.setItem('access_token', accessToken);
        router.push('/home');
      } else {
        console.error('Access token tidak ditemukan dalam respons');
        setErrorMessage('Login failed: Access token not found');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Login failed: Invalid email or password');
    }
  };

  return (
    <div>
      {isLoading ? (
        <SkeletonLoginForm />
      ) : (
        <form onSubmit={handleLogin}>
          <div className="flex flex-col gap-6 items-center mt-[50px]">
            <FormInput
              id="email"
              name="email"
              label="Email"
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
            <div className="flex flex-col gap-4">
              <FormInput
                id="password"
                name="password"
                label="Password"
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
              <FormRedText title="Forgot password?" />
            </div>

            {errorMessage && <div className="text-red-500">{errorMessage}</div>}

            <div className="flex flex-col gap-6 items-center">
              <FormButton text="Login" type="submit" />
              <div className="flex items-center w-full">
                <hr className="flex-grow border-t border-gray-300" />
                <FormRedText title="Or Sign in With" />
                <hr className="flex-grow border-t border-gray-300" />
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
