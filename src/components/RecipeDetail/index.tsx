import React, { useState } from "react";
import RecipeDetailFirstRow from "./RecipeDetailFirstRow";
import RecipeDetailSecondRowIngredients from "./RecipeDetailSecondRowIngredients";
import RecipeDetailSecondRowTools from "./RecipeDetailSecondRowTools";
import RecipeDetailSecondRowSteps from "./RecipeDetailSecondRowSteps";
import CardRecipeDetailIngredients from "./CardRecipeDetailIngredients";
import CardRecipeDetailTools from "./CardRecipeDetailTools";
import CardRecipeDetailSteps from "./CardRecipeDetailSteps";
import Navbar from "../Navbar";
import { RecipeTypes } from "@/Types/Recipetypes";

type RecipeProps = {
  recipe: RecipeTypes | null;
};

const RecipeDetail: React.FC<RecipeProps> = ({ recipe }) => {
  console.log("masuk deatil");
  console.log(recipe);
  const [activeSection, setActiveSection] = useState<
    "ingredients" | "tools" | "steps" | null
  >(null);

  const handleIngredientsClick = () => {
    setActiveSection("ingredients");
  };

  const handleToolsClick = () => {
    setActiveSection("tools");
  };

  const handleStepsClick = () => {
    setActiveSection("steps");
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
      {activeSection === "ingredients" && <RecipeDetailSecondRowIngredients />}
      {activeSection === "tools" && <RecipeDetailSecondRowTools />}
      {activeSection === "steps" && <RecipeDetailSecondRowSteps />}

      {activeSection === "ingredients" && (
        <div className="space-y-2">
          {recipe !== null &&
            recipe.ingredients.map((ingredient, index) => (
              <CardRecipeDetailIngredients
                key={index}
                leftText={ingredient.name}
                rightText={
                  ingredient.quantity + " " + ingredient.measurement_unit
                }
              />
            ))}
        </div>
      )}
      {activeSection === "tools" && (
        <div className="space-y-2">
          {recipe !== null &&
            recipe.equipments.map((equipment, index) => (
              <CardRecipeDetailTools
                key={index}
                leftText={equipment.name}
                rightText={""}
              />
            ))}
        </div>
      )}
      {activeSection === "steps" && (
        <div className="space-y-2">
          {recipe !== null &&
            recipe.instructions.map((instruction, index) => (
              <CardRecipeDetailSteps
                key={index}
                stepText={
                  instruction.step_number + ". " + instruction.description
                }
                imageUrl1={instruction?.image_url_1 || null}
                imageUrl2={instruction?.image_url_2 || null}
              />
            ))}
        </div>
      )}

      <Navbar />
    </div>
  );
};

export default RecipeDetail;
