import { RecipeHeader, RecipeReview, RecipeDescription, RecipeButtonvideo, RecipeDetail } from '@/components';
import { useState } from 'react';
import RecipeTabs from '@/components/RecipeTabs';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { RecipeTypes } from '@/Types/Recipetypes';

const base_url='https://masakin-be.adaptable.app/'

const fetchRecipe = async () => {
  const { data } = await axios.get(base_url+'/recipes/2',{
    headers:{
      Authorization:'Bearer '+ 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNjNlZGVjOC0xNmFjLTQ1M2EtYjZkNy1hYjhlODc1NDQ5YTgiLCJ1c2VybmFtZSI6IlNhcnJhUmV2b1UiLCJpYXQiOjE3MjEyNzIzNjUsImV4cCI6MTcyMTg3NzE2NX0.UxAqXhBj-xYBPA_F574QH4n-FYkmRx_RkaEfrNSJtGU'
    }
  })
  return data
}

const Recipe = () => {
  const {data}=useQuery<RecipeTypes>({ queryKey: ['Recipe'], queryFn: fetchRecipe})
  console.log(data)
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
      <RecipeHeader title={data?.title ||''} imageUrl={data?.image_url ||''} />
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