export interface RecipePopularTypes {
  id: number;
  title: string;
  image_url: string;
  time_estimation: number;
  recipe_rating: string;
  created_at: Date;
  categories: [
    {
      category_id: number;
      name: string;
    }
  ];
}
