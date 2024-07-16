import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Pastikan import ini benar
import axios from 'axios';
import FormInput from '../FormInput';
import FormButton from '../FormButton';
import FormRedText from '../FormRedText';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter();

  const baseUrl = 'https://masakin-be.adaptable.app';

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
      <form onSubmit={handleLogin}>
        <div className="flex flex-col gap-6 items-center mt-[50px]">
          <FormInput
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
    </div>
  );
};

export default LoginForm;