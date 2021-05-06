const Coin = ({ name, image, current_price }) => {
  return (
    <>
      <tr className="border-b  text-left border-gray-200  dark:text-white  ">
        <td className="py-4 px-2 text-coins01 text-md sm:text-2xl">{name}</td>

        <td className="py-4 px-2  text-coins02 text-md sm:text-2xl">
          {current_price}
        </td>
        <td className="py-4 flex justify-start">
          <img
            className="h-8 px-2 transform  transition hover:scale-125 duration-700 ease-in-out "
            src={image}
            alt={name}
          />
        </td>
      </tr>
    </>
  );
};

export default Coin;
