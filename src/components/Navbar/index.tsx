import React from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 z-10">
      <div className="border-t my-2 border-gray-200 dark:border-gray-700"></div>
      <div className="flex justify-between px-14 items-center pb-5">
        <button onClick={() => handleNavigation("/")}>
          <img src="./assets/icons/home.svg" alt="home" />
        </button>
        <button onClick={() => handleNavigation("/")}>
          <img src="./assets/icons/bookmark.svg" alt="bookmark" />
        </button>
        <button onClick={() => handleNavigation("/")}>
          <img src="./assets/icons/recipe.svg" alt="recipe" />
        </button>
        <button onClick={() => handleNavigation("/")}>
          <img src="./assets/icons/profile.svg" alt="profile" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
