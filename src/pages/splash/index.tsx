import FormButton from '@/components/FormButton';
import Image from 'next/image';
import { useRouter } from 'next/router'; // Perbaiki import ini
import { useEffect, useState } from 'react';

const SplashPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true); // State untuk loading

  useEffect(() => {
    // Menambahkan kelas Tailwind CSS ke body
    document.body.classList.add('flex', 'justify-center', 'bg-black');

    // Simulasikan proses loading selama 1 detik
    const timer = setTimeout(() => {
      setIsLoading(false); // Setelah 1 detik, set loading menjadi false
    }, 1000);

    // Membersihkan kelas dan timer ketika komponen di-unmount
    return () => {
      clearTimeout(timer);
      document.body.classList.remove('flex', 'justify-center', 'bg-black');
    };
  }, []);

  if (isLoading) {
    // Tampilkan loading page
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  return (
    <main className="w-[425px] mx-auto p-4">
      <div className="h-screen flex flex-col items-center justify-centergap-2">
        <div className="absolute inset-0 bg-[url('/assets/Splash-bg.png')] bg-no-repeat bg-cover w-[425px] mx-auto p-4">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <div className="flex justify-center items-center pt-[98px] relative z-10">
          <Image
            src="/assets/Splash-title.png"
            alt="Splash-bg"
            width={226.69}
            height={168.47}
            priority
          />
        </div>

        <div className="bg-[#9F1036] pt-[4px] px-[20px] pb-[4px] rounded-[20px] w-fit relative z-10">
          <p className=" text-[14px] text-white font-[500] flex justify-center items-center">
            Rasa yang dicari, temukan di Masakin
          </p>
        </div>

        <div className="mt-[275px] relative z-10">
          <div className="flex flex-col justify-center items-center text-white">
            <h1 className="text-[33px] font-[700]">Start Cooking!</h1>
            <h6 className="text-[19px] font-[500]">Explore curated recipes</h6>
            <h6 className="text-[19px] font-[500]">from all over the world!</h6>
          </div>
        </div>

        <div className="mt-[20px] z-10">
          <FormButton
            text="Sign In"
            onClick={() => router.push('/login')}
            type="button"
          />
        </div>
      </div>
    </main>
  );
};

export default SplashPage;
