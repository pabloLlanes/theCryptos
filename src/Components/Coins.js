import React, { useContext } from "react";
import { CoinContext } from "../context/CoinContext";
import { LangContext } from "../context/LangContext";
import Coin from "./Coin";

const Coins = () => {
  const coins = useContext(CoinContext);
  const { lang } = useContext(LangContext);

  return (
    <>
      <div className="bg-full-color h-1"></div>

      <section className="dark:bg-black body-font ">
        <div className="overflow-x-auto ">
          <div className="min-w-screen min-h-screen  flex items-center justify-center  font-sans overflow-hidden">
            <div className=" w-5/6 lg:w-4/6">
              <div className="bg-white shadow-md rounded my-6 dark:bg-black">
                <table className="min-w-max w-full table-auto">
                  <thead>
                    <tr className=" uppercase text-sm leading-normal dark:text-white">
                      <th className="py-3 pl-2 text-left ">
                        {" "}
                        {lang.Coins.name}
                      </th>
                      <th className="py-3 pl-2 text-left">
                        {lang.Coins.price}
                      </th>
                      <th className="py-3 pl-2 text-left ">
                        {lang.Coins.symbol}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-light shadow-2xl">
                    {coins.map((coin, i) => (
                      <Coin key={i} {...coin} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-full-color h-1"></div>
    </>
  );
};

export default Coins;
