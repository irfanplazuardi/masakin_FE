import React from 'react'
import FormRedText from '../FormRedText';
import Link from 'next/link';

const LoginQuestion = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      <p className="text-[14px] font-[500]">Don't have an account?</p>
      <Link href="/register">
        <FormRedText title="Register" />
      </Link>
    </div>
  );
}

export default LoginQuestion