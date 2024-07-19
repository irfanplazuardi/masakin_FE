import React, { useState } from "react";
import RecipeDetailFirstRow from "./RecipeDetailFirstRow";
import RecipeDetailSecondRowIngredients from "./RecipeDetailSecondRowIngredients";
import CardRecipeDetailIngredients from "./CardRecipeDetailIngredients";
import CardRecipeDetailTools from "./CardRecipeDetailTools";
import CardRecipeDetailSteps from "./CardRecipeDetailSteps";

const RecipeDetail: React.FC = () => {
  const [activeCard, setActiveCard] = useState<
    "ingredients" | "tools" | "steps" | null
  >(null);

  const handleIngredientsClick = () => {
    setActiveCard("ingredients");
  };

  const handleToolsClick = () => {
    setActiveCard("tools");
  };

  const handleStepsClick = () => {
    setActiveCard("steps");
  };

  return (
    <div
      className="bg-white py-2 flex flex-col items-center justify-between"
      style={{
        width: "324px",
        margin: "0 auto",
        gap: "10px",
        borderRadius: "10px 0px 0px 0px",
      }}
    >
      <RecipeDetailFirstRow
        onIngredientsClick={handleIngredientsClick}
        onToolsClick={handleToolsClick}
        onStepsClick={handleStepsClick}
      />
      <RecipeDetailSecondRowIngredients />
      {activeCard === "ingredients" && (
        <div className="space-y-2">
          <CardRecipeDetailIngredients
            leftText="Bahan Utama 1"
            rightText="100 gram"
          />
          <CardRecipeDetailIngredients
            leftText="Bahan Utama 2"
            rightText="200 gram"
          />
          <CardRecipeDetailIngredients
            leftText="Bahan Utama 3"
            rightText="200 gram"
          />
        </div>
      )}
      {activeCard === "tools" && (
        <div className="space-y-2">
          <CardRecipeDetailTools leftText="Alat 1" rightText="1 pcs" />
          <CardRecipeDetailTools leftText="Alat 2" rightText="2 pcs" />
          <CardRecipeDetailTools leftText="Alat 3" rightText="3 pcs" />
        </div>
      )}
      {activeCard === "steps" && (
        <div className="space-y-2">
          <CardRecipeDetailSteps
            stepText="1. Kumpulkan semua bahan."
            imageUrl="/assets/step_1_bulgogi.png"
          />
          <CardRecipeDetailSteps
            stepText="2. Cincang halus 8 siung bawang putih, Siapkan 60 ml Korean soy sauce, 30 ml minyak wijen panggang, 3 sdm brown sugar, tuang dan campur semua bahan ke dalam mangkuk untuk membuat marinasi. 
"
            imageUrl="/assets/step_2_bulgogi.png"
          />
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
