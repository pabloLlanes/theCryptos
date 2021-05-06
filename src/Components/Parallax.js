import React from "react";

const Parallax = ({ title, css }) => {
  return (
    <section className="bg-black text-white relative z-10 dark:bg-gray-500">
      <div className={`${css} bg-right-bottom bg-cover bg-fixed flex`}>
        <div className="relative container mx-auto p-4 flex items-center text-white z-10 dark:text-gray-50">
          <div>
            <div className="content float-left py-4 px-5 my-5 bg-black opacity-80">
              <h3 className="text-full-color01 heading mb-3 text-2xl md:text-3xl">
                {title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Parallax;
