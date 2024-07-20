"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import Image from "next/image";
import { RecipePopularTypes } from "@/Types/RecipePopularTypes";
import { useRouter } from "next/router";

const ResepPopular = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [recipeData, setRecipeData] = useState<RecipePopularTypes[]>([]);
  const router = useRouter();

  useEffect(() => {
    const bearerToken = localStorage.getItem("access_token");
    fetch("https://masakin-be.adaptable.app/recipes/popular", {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        setRecipeData(data);
        console.log(data);
      });
  }, []);

  function handleClick(id: number) {
    router.push(`/recipe/${id}`);
  }

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className="mb-20">
      <h1 className="text-2xl font-bold p-5">Resep Populer</h1>
      <Carousel className="w-[425px] px-7">
        <CarouselContent className="-ml-2 flex gap-28 ">
          {recipeData.map((recipe) => (
            <CarouselItem onClick={() => handleClick(recipe.id)} key={recipe.id} className="w-[425px] m basis-1/3 sm:basis-1/3 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="w-[50vw] bg-slate-200">
                  <CardContent className="flex flex-col items-center justify-center p-6 gap-2">
                    <div className="h-24 w-full">
                      <Image className="object-cover w-full h-full" src={recipe.image_url} alt="image" width={80} height={80} />
                    </div>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%",
                      }}>
                      <Typography className="truncate" component="legend" align="center" sx={{ width: "100%" }}>
                        {recipe.title}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <Rating
                          name="read-only"
                          value={parseInt(recipe.recipe_rating)}
                          readOnly
                          sx={{
                            "& .MuiRating-iconFilled": {
                              color: "#4CAF50",
                            },
                          }}
                        />
                      </Box>
                    </Box>
                    <div className="flex justify-between gap-12">
                      <div className="flex justify-items-start">
                        <Image src={"./assets/icons/timer.svg"} alt="time" width={18} height={18} />
                        <p className="pl-1">{recipe.time_estimation} mins</p>
                      </div>
                      <Image src={"./assets/icons/bookmarkGreen.svg"} alt="bookmark-active" width={18} height={18} />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ResepPopular;
