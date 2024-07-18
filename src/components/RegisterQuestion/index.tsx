import React from 'react'
import FormRedText from '../FormRedText';
import Link from 'next/link';

const RegisterQuestion = () => {
  return (
    <div className="flex justify-center items-center gap-2 mt-[20px]">
      <p className="text-[14px] font-[500]">Already have an account ?</p>
      <Link href="/login">
        <FormRedText title="Login" />
      </Link>
    </div>
  );
}

export default RegisterQuestion