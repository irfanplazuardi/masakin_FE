import { GetStaticPaths, GetStaticProps } from "next";
import {
  RecipeHeader,
  RecipeReview,
  RecipeDescription,
  RecipeButtonvideo,
  RecipeDetail,
} from "@/components";
import { useState } from "react";
import axios from "axios";
import { RecipeTypes } from "@/Types/Recipetypes";

const base_url = "https://masakin-be.adaptable.app/";

const fetchRecipeById = async (id: string) => {
  const { data } = await axios.get(`${base_url}/recipes/${id}`, {
    headers: {
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNjNlZGVjOC0xNmFjLTQ1M2EtYjZkNy1hYjhlODc1NDQ5YTgiLCJ1c2VybmFtZSI6IlNhcnJhUmV2b1UiLCJpYXQiOjE3MjEyNzIzNjUsImV4cCI6MTcyMTg3NzE2NX0.UxAqXhBj-xYBPA_F574QH4n-FYkmRx_RkaEfrNSJtGU",
    },
  });
  return data;
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch all recipe IDs from the API
  const { data } = await axios.get(`${base_url}/recipes`, {
    headers: {
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNjNlZGVjOC0xNmFjLTQ1M2EtYjZkNy1hYjhlODc1NDQ5YTgiLCJ1c2VybmFtZSI6IlNhcnJhUmV2b1UiLCJpYXQiOjE3MjEyNzIzNjUsImV4cCI6MTcyMTg3NzE2NX0.UxAqXhBj-xYBPA_F574QH4n-FYkmRx_RkaEfrNSJtGU",
    },
  });

  // Map the IDs to paths
  const paths = data.map((recipe: RecipeTypes) => ({
    params: { id: recipe.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const recipe = await fetchRecipeById(id as string);

  return {
    props: {
      recipe,
    },
  };
};

type RecipeProps = {
  recipe: RecipeTypes;
};

const Recipe = ({ recipe }: RecipeProps) => {
  const [showIngredients] = useState(false);
  const [showTools] = useState(false);
  const [showSteps] = useState(false);

  if (!recipe) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <RecipeHeader
        title={recipe?.title || ""}
        imageUrl={recipe?.image_url || ""}
      />
      <RecipeReview
        rating={Number(recipe.recipe_rating)}
        cookingTime={recipe.time_estimation}
        difficultyLevel={recipe.difficulty}
      />
      <RecipeDescription description={recipe.description} />
      <RecipeButtonvideo videoUrl={recipe.video_url} />

      {/* Komponen Memasak (Detailrecipe) */}
      <RecipeDetail recipe={recipe} />

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
          {/* Konten langkah-langkah untuk memasak */}
        </div>
      )}
    </div>
  );
};

export default Recipe;
