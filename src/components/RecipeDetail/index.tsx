import React, { useState } from 'react';
import RecipeDetailFirstRow from './RecipeDetailFirstRow';
import RecipeDetailSecondRow from './RecipeDetailSecondRow';
import CardRecipeDetailIngredients from './CardRecipeDetailIngredients';

interface RecipeDetailProps {
  showIngredients: boolean;
  showTools: boolean;
  showSteps: boolean;
  onIngredientsClick: () => void;
  onToolsClick: () => void;
  onStepsClick: () => void;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ onIngredientsClick, onToolsClick, onStepsClick }) => {
  const [showIngredientsDetail, setShowIngredientsDetail] = useState(true); // Set initial state to true

  return (
    <div className="bg-white py-4 px-6 flex flex-col items-center justify-between" style={{ width: '370px', margin: '0 auto', gap: '10px', borderRadius: '10px 0px 0px 0px' }}>
      <RecipeDetailFirstRow onIngredientsClick={onIngredientsClick} onToolsClick={onToolsClick} onStepsClick={onStepsClick} />
      {showIngredientsDetail && <RecipeDetailSecondRow />}
      <CardRecipeDetailIngredients ingredient={''} />
    </div>
  );
};

export default RecipeDetail;
