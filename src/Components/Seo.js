import { Helmet } from "react-helmet";

const Seo = () => {
  return (
    <Helmet>
      {/* <!-- HTML Meta Tags --> */}
      <title>the Cryptos</title>
      <meta name="description" content="las criptomonedas mas famosas" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* <!-- Google / Search Engine Tags --> */}
      <meta itemprop="name" content="Reed" />
      <meta itemprop="description" content="las criptomonedas mas famosas" />
    </Helmet>
  );
};

export default Seo;
