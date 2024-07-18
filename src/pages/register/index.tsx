import RegisterForm from '@/components/RegisterForm'
import RegisterQuestion from '@/components/RegisterQuestion'
import RegisterTitle from '@/components/RegisterTitle'
import React from 'react'

const RegisterPage = () => {
  return (
    <div>
      <RegisterTitle />
      <RegisterForm />
      <RegisterQuestion />
    </div>
  )
}

export default RegisterPage