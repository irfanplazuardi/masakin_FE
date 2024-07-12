import React from 'react'
import SocialIcon from '@/components/SocialIcon'

const LoginSocialIcon = () => {
  return (
    <div className="flex justify-center items-center gap-6 mt-[20px] mb-[20px]">
      <SocialIcon src="/assets/google.png" alt="Google icon" />
      <SocialIcon src="/assets/facebook.png" alt="Facebook icon" />
    </div>
  );
}

export default LoginSocialIcon