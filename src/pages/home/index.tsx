import React from "react";
import { Navbar, Search, ResepBaru, ResepPopular, HeaderHome } from "@/components";

const Home = () => {
  return (
    <div className="w-[425px] mx-auto p-4">
      <HeaderHome />
      <Search />
      <ResepBaru />
      <ResepPopular />
      <Navbar />
    </div>
  );
};

export default Home;
