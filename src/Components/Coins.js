import React, { useContext } from "react";
import { CoinContext } from "../context/CoinContext";
import Coin from "./Coin";

const Coins = () => {
  const coins = useContext(CoinContext);

  return (
    <>
      <section class="dark:bg-black body-font">
        <div class="overflow-x-auto">
          <div class="min-w-screen min-h-screen  flex items-center justify-center  font-sans overflow-hidden">
            <div class=" w-5/6 lg:w-4/6">
              <div class="bg-white shadow-md rounded my-6 dark:bg-black">
                <table class="min-w-max w-full table-auto">
                  <thead>
                    <tr class="bg-blue-200 text-gray-600  uppercase text-sm leading-normal dark:text-white">
                      <th class="py-3 px-6 text-left">name</th>
                      <th class="py-3 px-6 text-left">price</th>
                      <th class="py-3 px-6 text-left">symbol</th>
                    </tr>
                  </thead>
                  <tbody class="text-gray-600 text-sm font-light">
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
    </>
  );
};

export default Coins;
