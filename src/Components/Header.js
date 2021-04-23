import { useState } from "react";

import useDarkMode from "../hooks/useDarkMode";
const Header = (statics) => {
  const [colorTheme, setTheme] = useDarkMode();

  const changeTheme = () => {
    setTheme(colorTheme);
  };

  return (
    <section className="bg-white   dark:bg-black  ">
      <header class="text-gray-50 shadow-2xl">
        <div class=" container mx-auto flex flex-wrap p-5 items-center ">
          <span className="ml-3 text-xl"> {statics.header.nav.title}</span>

          {colorTheme === "light" ? (
            <span
              onClick={changeTheme}
              className="ml-4  p-2 z-30  text-white bg-yellow-300 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </span>
          ) : (
            <span
              onClick={changeTheme}
              className="  z-30 ml-4 p-2 text-white rounded-full bg-blue-500 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </span>
          )}

          <nav
            className={`nav01 z-50 fixed bg-black shadow-2xl h-full flex flex-wrap dark:bg-blue-600`}
          ></nav>
        </div>
      </header>
    </section>
  );
};

export default Header;
