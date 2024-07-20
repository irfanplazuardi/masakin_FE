import {
  RecipeHeader,
  RecipeReview,
  RecipeDescription,
  RecipeButtonvideo,
  RecipeDetail,
  Navbar,
} from "@/components";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { RecipeTypes } from "@/Types/Recipetypes";

const base_url = "https://masakin-be.adaptable.app/";

const fetchRecipe = async () => {
  const { data } = await axios.get(base_url + "/recipes/2", {
    headers: {
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNjNlZGVjOC0xNmFjLTQ1M2EtYjZkNy1hYjhlODc1NDQ5YTgiLCJ1c2VybmFtZSI6IlNhcnJhUmV2b1UiLCJpYXQiOjE3MjEyNzIzNjUsImV4cCI6MTcyMTg3NzE2NX0.UxAqXhBj-xYBPA_F574QH4n-FYkmRx_RkaEfrNSJtGU",
    },
  });
  return data;
};

const Recipe = () => {
  const { data } = useQuery<RecipeTypes>({
    queryKey: ["Recipe"],
    queryFn: fetchRecipe,
  });

  const rating = 5;

  // State untuk menampilkan konten bahan, alat, dan cara masak
  const [showIngredients] = useState(false);
  const [showTools] = useState(false);
  const [showSteps] = useState(false);

  return (
    <div>
      <RecipeHeader
        title={data?.title || "No Recipe"}
        imageUrl={data?.image_url || "/assets/default_image.jpg"}
      />
      <RecipeReview
        rating={Number(data?.recipe_rating) || rating}
        cookingTime={data?.time_estimation || 0}
        difficultyLevel={data?.difficulty || 0}
      />
      <RecipeDescription description={data?.description || "No Description"} />
      <RecipeButtonvideo
        videoUrl={
          data?.video_url || "https://www.youtube.com/watch?v=guwu8I2VDTI"
        }
      />

      {/* Komponen Memasak (Detailrecipe) */}
      <RecipeDetail recipe={null} />

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

      <Navbar />
    </div>
  );
};

export default Recipe;
