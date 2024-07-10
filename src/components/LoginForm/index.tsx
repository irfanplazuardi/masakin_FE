import React from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useState } from 'react';
import FormInput from '../FormInput';
import FormButton from '../FormButton';
import FormRedText from '../FormRedText';

const LoginForm = () => {

    const [loginData, setLoginData] = useState({
      email: '',
      password: '',
    });

    const router = useRouter();

    const baseUrl = 'https://masakinprojectbe.vercel.app';

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const response = await axios.post(`${baseUrl}/user/login`, {
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
        }
      } catch (error) {
        console.error(error);
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
}

export default LoginForm