const Coin = ({ name, image, current_price }) => {
  return (
    <>
      <tr class="border-b text-left border-gray-200 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-900">
        <td class="py-4 px-6 ">{name}</td>
        <td class="py-4 px-6">{current_price}</td>
        <td class="py-4 px-6">
          <img className="h-8 " src={image} alt={name} />
        </td>
      </tr>
    </>
  );
};

export default Coin;
