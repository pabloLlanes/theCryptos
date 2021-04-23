const Parallax = (statics) => {
  return (
    <section className="bg-black text-white relative z-10 dark:bg-gray-500">
      <div
        className={`${statics.parallax.img.src} min-h-screen hero-image bg-right-bottom bg-cover bg-fixed flex  "`}
      >
        <div className="relative container mx-auto p-4 flex items-center text-white z-10 dark:text-gray-50">
          <div>
            <div className="content float-left py-4 px-5 my-5">
              <h2 className="heading mb-3 text-3xl md:text-4xl">
                {" "}
                {statics.parallax.text.title}{" "}
              </h2>
              <h3 className="text leading-normal hidden sm:block">
                {statics.parallax.text.subtitle}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Parallax;
