import LoginForm from '@/components/LoginForm'
import LoginQuestion from '@/components/LoginQuestion';
import LoginSocialIcon from '@/components/LoginSocialIcon';
import LoginTitle from '@/components/LoginTitle'
import React from 'react'

const LoginPage = () => {
  return (
    <div>
      <LoginTitle />
      <LoginForm />
      <LoginSocialIcon />
      <LoginQuestion />
    </div>
  );
}

export default LoginPage