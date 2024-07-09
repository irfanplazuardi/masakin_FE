import React from 'react';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

const SplashPage: React.FC = () => {
  const router = useRouter();

  const onButtonPrimaryLargeUpClick = useCallback(() => {
    router.push('/login');
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[274px] px-0 pb-0 box-border gap-[102px] leading-[normal] tracking-[normal] text-center text-[14px] text-white font-h5">
      <section className="w-full h-full absolute m-0 top-0 right-0 bottom-0 left-0">
        {/* image background */}
        <img
          className="absolute h-full w-full object-cover"
          alt=""
          src="assets/tastyarrangementnoodlestable-1@2x.png"
        />
        <div className="absolute top-[98px] left-[83px] w-[226.7px] h-[168.5px] z-[1] flex items-center justify-center">
          {/*  image logo */}
          <img
            className="w-full h-full z-[1] object-contain absolute left-[3px] top-[4px] [transform:scale(1.119)]"
            loading="lazy"
            alt=""
            src="assets/group-31.svg"
          />
        </div>
      </section>
      {/* text: Rasa yang dicari, temukan di Masakin */}
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[17px] pl-4 box-border max-w-full">
        <div className="h-[26px] flex-1 relative max-w-full">
          <div className="absolute top-0 left-[36px] rounded-[20px] bg-[#9f1036] w-[287px] h-[26px] z-[1]" />
          <div className="absolute top-[4px] left-0 tracking-[0.15px] font-medium inline-block w-[360px] h-[17px] z-[2]">
            Rasa yang dicari, temukan di Masakin
          </div>
        </div>
      </div>
      <section className="self-stretch [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] flex flex-col items-end justify-start pt-48 pb-[82px] pr-[57px] pl-14 box-border gap-[29px] max-w-full z-[1] text-center text-[33px] text-white font-h5">
        <div className="w-[393px] h-[450px] relative [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-3 pl-[13px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
            {/* text: Start Cooking! */}
            <h1 className="m-0 self-stretch relative text-inherit tracking-[0.25px] font-bold font-inherit z-[2]">
              Start Cooking!
            </h1>
            {/* text: Explore curated recipes from all over the world! */}
            <h3 className="m-0 self-stretch relative text-[19px] leading-[22.99px] tracking-[0.15px] font-medium font-inter text-center z-[2]">
              Explore curated recipes from all over the world!
            </h3>
          </div>
        </div>
        {/* Tombol Sign in */}
        <button
          className="cursor-pointer [border:none] py-3.5 px-9 bg-[#7e9f10] self-stretch rounded-xl flex flex-row items-start justify-start whitespace-nowrap z-[2]"
          onClick={onButtonPrimaryLargeUpClick}
        >
          <div className="h-[54px] w-[280px] relative rounded-xl bg-[#7e9f10] hidden" />
          {/* Text Sign in */}
          <div className="flex-1 relative text-[23px] leading-[27.84px] font-inter font-normal text-white text-center z-[1]">
            Sign in
          </div>
        </button>
      </section>
    </div>
  );
};

export default SplashPage;
