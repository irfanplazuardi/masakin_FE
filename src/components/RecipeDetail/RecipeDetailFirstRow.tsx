import React, { useState } from "react";

interface RecipeDetailFirstRowProps {
  onIngredientsClick: () => void;
  onToolsClick: () => void;
  onStepsClick: () => void;
}

const RecipeDetailFirstRow: React.FC<RecipeDetailFirstRowProps> = ({
  onIngredientsClick,
  onToolsClick,
  onStepsClick,
}) => {
  const [activeButton, setActiveButton] = useState<
    "ingredients" | "tools" | "steps" | null
  >(null);

  const handleIngredientsClick = () => {
    setActiveButton("ingredients");
    onIngredientsClick();
  };

  const handleToolsClick = () => {
    setActiveButton("tools");
    onToolsClick();
  };

  const handleStepsClick = () => {
    setActiveButton("steps");
    onStepsClick();
  };

  return (
    <div className="flex items-center justify-between w-full">
      <button
        className={`py-2 px-2 rounded-lg flex justify-center items-center mr-2${
          activeButton === "ingredients"
            ? "bg-green-600 text-white"
            : "text-green-600"
        }`}
        onClick={handleIngredientsClick}
        style={{
          width: "104px",
          height: "33px",
          borderRadius: "10px",
          backgroundColor:
            activeButton === "ingredients" ? "#7E9F10" : "transparent",
          color: activeButton !== "ingredients" ? "#7E9F10" : "#FFFFFF",
        }}
      >
        <span className="font-poppins text-xs font-semibold whitespace-nowrap">
          Bahan-bahan
        </span>
      </button>
      <button
        className={`py-2 px-2 rounded-lg flex justify-center items-center ${
          activeButton === "tools"
            ? "bg-green-600 text-white"
            : "text-green-600"
        }`}
        onClick={handleToolsClick}
        style={{
          width: "106px",
          height: "33px",
          borderRadius: "10px",
          backgroundColor: activeButton === "tools" ? "#7E9F10" : "transparent",
          color: activeButton !== "tools" ? "#7E9F10" : "#FFFFFF",
        }}
      >
        <span className="font-poppins text-xs font-semibold whitespace-nowrap">
          Alat-alat
        </span>
      </button>
      <button
        className={`py-2 px-2 rounded-lg flex justify-center items-center ${
          activeButton === "steps"
            ? "bg-green-600 text-white"
            : "text-green-600"
        }`}
        onClick={handleStepsClick}
        style={{
          width: "105px",
          height: "33px",
          borderRadius: "10px",
          backgroundColor: activeButton === "steps" ? "#7E9F10" : "transparent",
          color: activeButton !== "steps" ? "#7E9F10" : "#FFFFFF",
        }}
      >
        <span className="font-poppins text-xs font-semibold whitespace-nowrap">
          Cara Masak
        </span>
      </button>
    </div>
  );
};

export default RecipeDetailFirstRow;
