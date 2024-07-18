import React from 'react';

const CardRecipeDetailIngredient: React.FC = () => {
  return (
    <div>
      {/* Tombol pertama */}
      <div className="relative w-[320px] h-[40px] bg-[#ECEAFE] rounded-lg flex items-center mb-2">
        <span className="absolute left-2 top-603px w-[135px] h-[15px] font-inter font-semibold text-xs text-black">
          1/2 buah / 50 gram
        </span>
        <span className="absolute right-2 top-604px w-[110px] h-[15px] font-inter font-semibold text-xs text-black">
          bawang bombay
        </span>
      </div>

      {/* Tombol kedua */}
      <div className="relative w-[320px] h-[40px] bg-[#ECEAFE] rounded-lg flex items-center mb-2">
        <span className="absolute left-2 top-603px w-[135px] h-[15px] font-inter font-semibold text-xs text-black">
          3 batang / 150 gram
        </span>
        <span className="absolute right-2 top-604px w-[110px] h-[15px] font-inter font-semibold text-xs text-black">
          daun bawang
        </span>
      </div>

      {/* Tombol ketiga */}
      <div className="relative w-[320px] h-[40px] bg-[#ECEAFE] rounded-lg flex items-center">
        <span className="absolute left-2 top-603px w-[135px] h-[15px] font-inter font-semibold text-xs text-black">
          10 cm / 200 gram
        </span>
        <span className="absolute right-2 top-604px w-[110px] h-[15px] font-inter font-semibold text-xs text-black">
          wortel
        </span>
      </div>
    </div>
  );
};

export default CardRecipeDetailIngredient;
