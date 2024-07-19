"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const RecipeArrowleft: React.FC = () => {
  const router = useRouter();

  return (
    <div className="fixed left-7 top-4 cursor-pointer z-50">
      <Image
        src="/assets/arrow-left.png"
        alt="Arrow Left"
        width={20}
        height={20}
        onClick={() => router.push("/home")}
      />
    </div>
  );
};

export default RecipeArrowleft;
