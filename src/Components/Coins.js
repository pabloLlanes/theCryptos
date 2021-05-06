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

      <section class="dark:bg-black body-font ">
        <div class="overflow-x-auto ">
          <div class="min-w-screen min-h-screen  flex items-center justify-center  font-sans overflow-hidden">
            <div class=" w-5/6 lg:w-4/6">
              <div class="bg-white shadow-md rounded my-6 dark:bg-black">
                <table class="min-w-max w-full table-auto">
                  <thead>
                    <tr class=" uppercase text-sm leading-normal dark:text-white">
                      <th class="py-3 pl-2 text-left "> {lang.Coins.name}</th>
                      <th class="py-3 pl-2 text-left">{lang.Coins.price}</th>
                      <th class="py-3 pl-2 text-left ">{lang.Coins.symbol}</th>
                    </tr>
                  </thead>
                  <tbody class="font-light shadow-2xl">
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
