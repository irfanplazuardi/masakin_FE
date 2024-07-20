import React from "react";
import { Navbar, Search, ResepBaru, ResepPopular, HeaderHome, TabFilter } from "@/components";

const Home = () => {
  return (
    <div className="w-[425px] mx-auto p-4">
      <HeaderHome />
      <Search />
      <TabFilter />
      <ResepBaru />
      <ResepPopular />
      <Navbar />
    </div>
  );
};

export default Home;
