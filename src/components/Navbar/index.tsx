import React from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-900 z-10 w-[425px]">
      <div className="border-t border-gray-200 dark:border-gray-700"></div>
      <div className="flex justify-between px-4 items-center py-2">
        <button onClick={() => handleNavigation("/home")}>
          <img src="./assets/icons/home.svg" alt="home" className="w-6 h-6" />
        </button>
        <button onClick={() => handleNavigation("/bookmark")}>
          <img src="./assets/icons/bookmark.svg" alt="bookmark" className="w-6 h-6" />
        </button>
        <button onClick={() => handleNavigation("/recipe")}>
          <img src="./assets/icons/recipe.svg" alt="recipe" className="w-6 h-6" />
        </button>
        <button onClick={() => handleNavigation("/profile")}>
          <img src="./assets/icons/profile.svg" alt="profile" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
