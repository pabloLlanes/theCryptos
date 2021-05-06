const Footer = () => {
  return (
    <footer className=" dark:bg-black">
      <div className="bg-full-color h-1"></div>

      <div class="container px-5 py-2  flex items-center justify-between">
        <span className="ml-3  text-2xl font-bold text-coins02 ">
          the cryptos
        </span>

        <span className="inline-flex sm:ml-auto sm:mt-0 gap-2  ">
          <svg
            fill="currentColor"
            stroke-width="2"
            className="w-8 h-8 p-1 rounded-full bg-full-color"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>

          <svg
            fill="currentColor"
            stroke="currentColor"
            stroke-width="0"
            className="w-8 h-8 p-1 rounded-full bg-full-color"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            ></path>
          </svg>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
