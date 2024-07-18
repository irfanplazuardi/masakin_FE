import React from 'react';

interface CardRecipeDetailIngredientsProps {
  ingredient: string;
}

const CardRecipeDetailIngredients: React.FC<CardRecipeDetailIngredientsProps> = ({ ingredient }) => {
  return (
    <div className="flex items-center justify-between p-2 bg-[#ECEAFE] rounded-tl-lg w-[320px] h-[40px] opacity-0">
      <span className="font-poppins text-xs font-semibold text-gray-800">
        {ingredient}
      </span>
    </div>
  );
};

export default CardRecipeDetailIngredients;
