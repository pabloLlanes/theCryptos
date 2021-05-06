import { useContext } from "react";
import { CoinContext } from "../context/CoinContext";
import Coin2 from "./Coin2";

const Pictures = () => {
  const coin = useContext(CoinContext);
  if (Object.keys(coin).length === 0) return null;

  /*  const BTCandETH = coin.filter((coin) => {
    return coin.name === "Bitcoin" || coin.name === "Ethereum";
  });
  console.log(BTCandETH); */
  const BTCandETH = coin.slice(0, 2);

  const first = coin.slice(2, 10);

  return (
    <>
      {" "}
      <section className="overflow-hidden  dark:bg-black  ">
        <div className="container px-5  py-16 mx-auto lg:px-32">
          <div className="flex flex-wrap   mx-auto ">
            <div className="flex  flex-col justify-center items-center text-center w-full p-8 mt-6 sm:w-2/4 sm:pl-10 md:py-6 md:mt-0">
              <img
                alt="image"
                className="transform  transition hover:scale-110 duration-700 ease-in-out shadow-2xl object-cover object-center w-full h-64 rounded-lg lg:h-auto"
                src="https://res.cloudinary.com/dbqzdrnjd/image/upload/v1619926652/cryptos/btc02_rlv6zc.jpg"
              />

              <h4 className="text-btc mt-3">{BTCandETH[0].name}</h4>
              <img
                className="shadow-2xl h-12 w-12 transform  transition hover:scale-125 duration-700 ease-in-out"
                src={BTCandETH[0].image}
              />

              <h3 className=" animate-bounce 5s my-4 text-4xl   font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-l from-yellow-200 via-yellow-400 to-yellow-600  ">
                u$s {BTCandETH[0].current_price}
              </h3>
            </div>
            <div class="flex flex-col justify-center items-center text-center w-full p-8 mt-6 sm:w-2/4 sm:pl-10 md:py-6 md:mt-0">
              <img
                alt="image"
                className="transform  transition hover:scale-110 duration-700 ease-in-out shadow-2xl object-cover object-center w-full h-64 rounded-lg lg:h-auto"
                src="https://res.cloudinary.com/dbqzdrnjd/image/upload/v1619990505/cryptos/eth05_qbofxs.jpg"
              />
              <h4 className="text-eth mt-3 ">{BTCandETH[1].name}</h4>
              <img
                className="h-12 w-12  transform  transition hover:scale-125 duration-700 ease-in-out"
                src={BTCandETH[1].image}
              />

              <h3 className=" animate-bounce 5s my-4 text-4xl   font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-l from-purple-800 via-purple-600 to-blue-700">
                u$s {BTCandETH[1].current_price}
              </h3>
            </div>
          </div>
        </div>
        <div className="bg-full-color h-1"></div>
      </section>{" "}
      <section className="overflow-hidden  dark:bg-black ">
        <div className=" img03  py-32 px-8 md:px-32 ">
          <div className=" flex flex-wrap  justify-center">
            {first.map((coins, i) => (
              <Coin2 key={i} {...coins} />
            ))}
          </div>
        </div>
      </section>
      <div className="bg-full-color h-1"></div>
    </>
  );
};

export default Pictures;
