import RedirectToProductBtn from "../../../components/RedirectToProductPage";
import { MdDelete } from "react-icons/md";

interface CartItem {
  id: number;
  created_at: string;
  product_id: number;
  user_id: string;
  stripe_product_id: string;
  stripe_price_id: string;
  products: Product;
}

interface Product {
  name: string;
  image_link: string;
  price: number;
}

const Page = async () => {
  const response = await fetch("http://localhost:3000/api/cart", {
    cache: "no-store",
  });
  const cart: CartItem[] = await response.json();

  return (
    <div className="w-[70vw] p-6 mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Cart</h1>
      {cart.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-sm font-medium text-gray-700"></th>
                <th className="px-6 py-3 text-sm font-medium text-gray-700">
                  Product Name
                </th>
                <th className="px-6 py-3 text-sm font-medium text-gray-700">
                  Quantity
                </th>
                <th className="px-6 py-3 text-sm font-medium text-gray-700">
                  Price per item
                </th>
                <th className="px-6 py-3 text-sm font-medium text-gray-700">
                  Total Price
                </th>
                <th className="px-6 py-3 text-sm font-medium text-gray-700"></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="px-6 py-4">
                    <img
                      src={item.products.image_link}
                      alt={item.products.name}
                      className="min-w-[20px] max-w-[60px] rounded-lg"
                    />
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {item.products.name}
                  </td>
                  <td className="px-6 py-4">
                    <form className="flex gap-2 flex-wrap">
                      <input
                        type="number"
                        className="input w-[70px] border border-gray-300 rounded-md p-1"
                        min="1"
                        value={1}
                      />
                      <button className="px-3 py-1 rounded-md bg-blue-500 text-white focus:outline-none hover:bg-blue-600 transition-colors">
                        Update
                      </button>
                    </form>
                  </td>
                  <td className="px-3 py-4 text-gray-700 font-semibold text-center">
                    {item.products.price}
                  </td>
                  <td className="pl-3 py-4 text-gray-700 font-semibold text-center">
                    {item.products.price}
                  </td>
                  <td className="px-1 py-4">
                    <button className="py-1  text-red-600 transition-colors">
                      <MdDelete size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      )}
      <div className="flex items-center justify-between p-2">
        <h2 className="text-2xl">Total Amount: $2200</h2>
        <div className="flex gap-2">
          <RedirectToProductBtn />
          <button className="p-4 bg-lime-600 rounded-lg hover:bg-lime-400 transition-colors text-white">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
