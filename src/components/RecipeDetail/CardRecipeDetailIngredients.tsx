import React from "react";

interface CardRecipeDetailIngredientsProps {
  leftText: string;
  rightText: string;
}

const CardRecipeDetailIngredients: React.FC<
  CardRecipeDetailIngredientsProps
> = ({ leftText, rightText }) => {
  return (
    <div
      className="flex items-center justify-between p-2"
      style={{
        width: "320px",
        height: "40px",
        borderRadius: "10px",
        backgroundColor: "#ECEAFE",
        opacity: 1,
      }}
    >
      <span
        className="font-inter text-sm font-medium"
        style={{
          width: "135px",
          height: "15px",
          lineHeight: "15.73px",
          letterSpacing: "0.1px",
          textAlign: "left",
          color: "#000000",
        }}
      >
        {leftText}
      </span>
      <span
        className="font-inter text-sm font-medium"
        style={{
          width: "110px",
          height: "15px",
          lineHeight: "15.73px",
          letterSpacing: "0.1px",
          textAlign: "right",
          color: "#000000",
        }}
      >
        {rightText}
      </span>
    </div>
  );
};

export default CardRecipeDetailIngredients;
