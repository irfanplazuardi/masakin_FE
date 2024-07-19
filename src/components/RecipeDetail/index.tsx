import React, { useState } from "react";
import RecipeDetailFirstRow from "./RecipeDetailFirstRow";
import RecipeDetailSecondRow from "./RecipeDetailSecondRow";
import CardRecipeDetailIngredients from "./CardRecipeDetailIngredients";

interface RecipeDetailProps {
  showIngredients: boolean;
  showTools: boolean;
  showSteps: boolean;
  onIngredientsClick: () => void;
  onToolsClick: () => void;
  onStepsClick: () => void;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({
  showIngredients,
  showTools,
  showSteps,
  onIngredientsClick,
  onToolsClick,
  onStepsClick,
}) => {
  const [showIngredientsDetail, setShowIngredientsDetail] = useState(true); // Set initial state to true

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
        onIngredientsClick={onIngredientsClick}
        onToolsClick={onToolsClick}
        onStepsClick={onStepsClick}
      />
      {showIngredientsDetail && <RecipeDetailSecondRow />}
      <div className="space-y-2">
        {" "}
        {/* Add spacing between the buttons */}
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
    </div>
  );
};

export default RecipeDetail;
