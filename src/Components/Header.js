import { useContext, useEffect } from "react";

import useDarkMode from "../hooks/useDarkMode";
import { LangContext } from "../context/LangContext";
import { spanish, english } from "../data/data";

import { NavLink } from "react-router-dom";

const Header = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const { lang, setLang } = useContext(LangContext);

  const handleButtonEsp = (e) => {
    e.preventDefault();
    setLang(spanish);
  };
  const handleButtonEng = (e) => {
    e.preventDefault();
    setLang(english);
  };
  const changeTheme = () => {
    setTheme(colorTheme);
  };

  return (
    <section className="dark:bg-black  w-full">
      <header className="text-gray-50 shadow-2xl">
        <div className="container mx-auto flex  p-5 md:flex-row items-center">
          <span className=" text-coins02">the cryptos</span>

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

          <div className="flex ml-8 gap-2">
            <button onClick={handleButtonEsp}>
              <img
                className="w-8"
                src="https://res.cloudinary.com/dbqzdrnjd/image/upload/v1619917459/flags/argentina_flags_flag_16969_1_a4f46j.png"
              />
            </button>
            <button onClick={handleButtonEng}>
              <img
                className="w-8"
                src="https://res.cloudinary.com/dbqzdrnjd/image/upload/v1619917459/flags/united_kingdom_flags_flag_17079_xelgvb.png"
              />
            </button>
          </div>
          <nav className="text-lg text-coins01 ml-auto flex flex-wrap items-center justify-center">
            <NavLink
              to="/"
              className="px-2 hover:text-black dark:hover:text-white "
            >
              {lang.Header.navLink01}{" "}
            </NavLink>
            <NavLink
              to="/list"
              className="px-2 hover:text-black dark:hover:text-white"
            >
              {lang.Header.navLink02}{" "}
            </NavLink>
            <NavLink
              to="/luck"
              className="px-2 hover:text-black dark:hover:text-white"
            >
              {lang.Header.navLink03}{" "}
            </NavLink>
          </nav>
        </div>
      </header>
      <div className="bg-full-color h-1"></div>
    </section>
  );
};

export default Header;
