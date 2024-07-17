import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const ResepPopular = () => {
  const [value, setValue] = React.useState<number | null>(3);
  return (
    <div className="mb-20">
      <h1 className="text-2xl font-bold p-5">Resep Populer</h1>
      <Carousel className="w-full max-w-sm px-7">
        <CarouselContent className="-ml-2 flex gap-28">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="w-full m basis-1/3 sm:basis-1/3 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="w-[50vw] bg-slate-200">
                  <CardContent className="flex flex-col items-center justify-center p-6 gap-2">
                    <img src="./assets/soto.jpg" alt="soto" />
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                      <Typography component="legend" align="center" sx={{ width: "100%" }}>
                        Soto Ayam Lamongan
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <Rating
                          name="read-only"
                          value={value}
                          readOnly
                          sx={{
                            "& .MuiRating-iconFilled": {
                              color: "#4CAF50",
                            },
                          }}
                        />
                      </Box>
                    </Box>
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
