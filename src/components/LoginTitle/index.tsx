import React, { useState, useEffect } from 'react';

const SkeletonTitle = () => (
  <div className="flex flex-col mt-[97px] justify-center items-center animate-pulse">
    <div className="h-8 bg-gray-200 rounded w-48 mb-2"></div>
    <div className="h-6 bg-gray-200 rounded w-32"></div>
  </div>
);

const LoginTitle = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col mt-[97px] justify-center items-center">
      {isLoading ? (
        <SkeletonTitle />
      ) : (
        <div className="">
          <h1 className="text-[33px] font-[700]">Welcome,</h1>
          <h6 className="text-[19px] font-[500]">Are you ready to cook?</h6>
        </div>
      )}
    </div>
  );
};

export default LoginTitle;
