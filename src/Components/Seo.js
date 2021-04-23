import { Helmet } from "react-helmet";

const Seo = (statics) => {
  return (
    <Helmet>
      {/* <!-- HTML Meta Tags --> */}
      <title>{statics.Seo.title}</title>
      <meta name="description" content={statics.Seo.description} />

      {/* <!-- Google / Search Engine Tags --> */}
      <meta itemprop="name" content="Reed" />
      <meta itemprop="description" content={statics.Seo.description} />
      <meta itemprop="image" content={statics.Seo.img} />
    </Helmet>
  );
};

export default Seo;
