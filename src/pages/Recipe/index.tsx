import { RecipeHeader, RecipeReview, RecipeDescription, RecipeButtonvideo, RecipeDetail } from '@/components';
import { useState } from 'react';
import RecipeTabs from '@/components/RecipeTabs';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchRecipe = async () => {
  const { data } = await axios.get('/api/users')
  return data
}

export const useUsers = () => {// Queries
  return useQuery({ queryKey: ['Recipe'], queryFn: fetchRecipe})
}

const Recipe = () => {
  const recipeTitle = 'Bulgogi';
  const recipeImageUrl = '/assets/Bulgogi.jpg';
  const rating = 5;
  const cookingTime = 50;
  const difficultyLevel = 3;
  const maxDifficultyLevel = 3;
  const recipeDescription = "Bulgogi adalah daging sapi panggang klasik khas Korea yang lezat, cocok dinikmati saat makan siang ataupun makan malam.\n\ Dengan langkah-langkah yang sederhana, Bulgogi sangat mudah untuk dibuat.\n\ Hidangkan Bulgogi bersama nasi dan kimchi untuk sensasi makan yang benar-benar autentik.";

  // State untuk menampilkan konten bahan, alat, dan cara masak
  const [showIngredients, setShowIngredients] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [showSteps, setShowSteps] = useState(false);

  return (
    <div>
      <RecipeHeader title={recipeTitle} imageUrl={recipeImageUrl} />
      <RecipeReview
        rating={rating}
        cookingTime={cookingTime}
        difficultyLevel={difficultyLevel}
        maxDifficultyLevel={maxDifficultyLevel}
      />
      <RecipeDescription description={recipeDescription} />
      <RecipeButtonvideo videoUrl="https://www.youtube.com/watch?v=cmxaIPr_1kI" />
      
      {/* Komponen Memasak (Detailrecipe) */}
      <RecipeDetail
        showIngredients={showIngredients}
        showTools={showTools}
        showSteps={showSteps}
        onIngredientsClick={() => setShowIngredients(!showIngredients)}
        onToolsClick={() => setShowTools(!showTools)}
        onStepsClick={() => setShowSteps(!showSteps)}
      />

      {/* Konten Bahan-bahan */}
      {showIngredients && (
        <div className="bg-white py-4 px-6">
          {/* Konten bahan-bahan masakan */}
        </div>
      )}

      {/* Konten Alat-alat */}
      {showTools && (
        <div className="bg-white py-4 px-6">
          {/* Konten alat-alat memasak */}
        </div>
      )}

      {/* Konten Cara Masak */}
      {showSteps && (
        <div className="bg-white py-4 px-6">
          {/* Konten langkah-langkah untuk memasak*/}
        </div>
      )}
      <RecipeTabs />
    </div>
  );
};

export default Recipe;