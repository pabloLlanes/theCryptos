import React, { useContext, useEffect } from "react";
import { LangContext } from "../context/LangContext";

const Parallax = () => {
  const { lang } = useContext(LangContext);

  return (
    <section className="bg-black text-white relative z-10 dark:bg-gray-500">
      <div className={"img01   bg-right-bottom bg-cover bg-fixed flex  "}>
        <div className="relative container mx-auto p-4 flex items-center text-white z-10 dark:text-gray-50">
          <div>
            <div className="content float-left py-4 px-5 my-5">
              <h2 className="heading mb-3 text-3xl md:text-4xl">
                {lang.Header.title}
              </h2>
              <h3 className="text leading-normal hidden sm:block"></h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Parallax;
