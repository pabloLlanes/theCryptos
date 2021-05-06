const Coin2 = ({ name, image, current_price }) => {
  return (
    <>
      <div className="shadow-2xl flex flex-col items-center p-4 m-4 bg-white rounded-xl dark:bg-black ">
        <h4 className="text-xl text-coins01">{name}</h4>

        <h3 className="text-2xl text-coins02">u$s {current_price}</h3>
        <img
          className="mt-4 h-8 w-8 transform  transition hover:scale-125 duration-700 ease-in-out "
          src={image}
          alt={image}
        />
      </div>
    </>
  );
};

export default Coin2;
