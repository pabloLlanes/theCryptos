import { useContext, useState } from "react";
import { CoinContext } from "../context/CoinContext";
import Spinner from "./Spinner";

const RandomCoin = ({ title, button }) => {
  const coin = useContext(CoinContext);
  const [state, setstate] = useState("?");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  if (Object.keys(coin).length === 0) return null;

  //Shuffle an Array Using Fisher-Yates Shuffle Algorithm
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  const handleButton = (e) => {
    setLoading(true);
    setSearch("hidden");
    e.preventDefault();
    const arr = [...coin];
    shuffle(arr);

    setTimeout(() => {
      setstate([arr[0].name, arr[0].image]);
      setLoading(false);
    }, 4000);
  };
  return (
    <>
      <section className=" body-font dark:bg-black">
        <div className="container px-16 py-32 mx-auto">
          <div className=" flex flex-col  sm:flex-row items-center justify-between ">
            <h1 className=" text-3xl font-medium title-font text-coins02">
              {title}
            </h1>

            {loading && <Spinner />}
            {state === "?" ? (
              <div className=" p-4 m-4 flex items-center bg-white  dark:bg-black ">
                <button
                  onClick={handleButton}
                  className={`${search}mt-4 animate-bounce 5s flex-shrink-0  bg-full-color p-6 rounded-xl text-white`}
                >
                  {button}
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center p-4 m-4 bg-white rounded-xl dark:bg-black ">
                <h3 className="text-3xl text-coins02"> {state[0]}</h3>
                <img
                  className=" h-32 w-32 m-8 transform  transition hover:scale-125 duration-700 ease-in-out "
                  src={state[1]}
                />
              </div>
            )}

            {/*   )} */}
          </div>
        </div>
        <div className="bg-full-color h-1"></div>
      </section>
    </>
  );
};

export default RandomCoin;
