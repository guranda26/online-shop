import RedirectToProductBtn from "../../../components/RedirectToProductPage";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

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

  const handleCheckout = async () => {
    const lineItems = cart.map((item) => ({
      price: item.stripe_price_id,
      quantity: 1,
    }));
  };

  try {
    const res = await fetch("/api/checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lineItems }),
    });

    if (!res.ok) {
      throw new Error("Failed to create checkout session");
    }

    const { url } = await res.json();
    window.location.href = url; 
  } catch (error) {
    console.error("Error during checkout:", error);
  }
};


  return (
    <div className="w-full md:w-[75vw] p-3 md:p-6 mx-auto">
      <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-6">
        My Cart
      </h1>
      {cart.length > 0 ? (
        <>
          <div className="md:hidden">
            {cart.map((item) => (
              <div
                key={item.id}
                className="border-t p-2 flex justify-between items-center"
              >
                <img
                  src={item.products.image_link}
                  alt={item.products.name}
                  className="min-w-[20px] max-w-[45px] rounded-full mr-2"
                />
                <div className="flex-1">
                  <h2 className="text-sm font-medium text-gray-700">
                    {item.products.name}
                  </h2>
                  <p className="text-xs text-gray-600">
                    Price: ${item.products.price}
                  </p>
                </div>
                <div>
                  <input
                    type="number"
                    className="w-12 p-1 border rounded text-sm"
                    defaultValue={1}
                  />
                  <button className="text-green-500 ml-2">
                    <FaRegEdit size={14} />
                  </button>
                </div>
                <div>
                  <button className="text-red-600">
                    <MdDelete size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-md font-medium text-gray-700"></th>
                  <th className="px-4 py-3 text-md font-medium text-gray-700">
                    Product Name
                  </th>
                  <th className="px-4 py-3 text-md font-medium text-gray-700">
                    Quantity
                  </th>
                  <th className="px-4 py-3 text-md font-medium text-gray-700">
                    Price per item
                  </th>
                  <th className="px-4 py-3 text-md font-medium text-gray-700">
                    Total Price
                  </th>
                  <th className="px-4 py-3 text-md font-medium text-gray-700"></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="px-3 py-4">
                      <img
                        src={item.products.image_link}
                        alt={item.products.name}
                        className="min-w-[20px] max-w-[45px] rounded-full"
                      />
                    </td>
                    <td className="px-4 py-4 text-gray-700 text-sm">
                      {item.products.name}
                    </td>
                    <td className="px-4 py-4">
                      <form className="flex gap-2">
                        <input
                          type="number"
                          className="w-10 border border-gray-300 rounded-md p-1"
                          min="1"
                          defaultValue={1}
                        />
                        <button className="text-green-500">
                          <FaRegEdit size={16} />
                        </button>
                      </form>
                    </td>
                    <td className="px-4 py-4 text-gray-700 text-center font-semibold">
                      ${item.products.price}
                    </td>
                    <td className="px-4 py-4 text-gray-700 text-center font-semibold">
                      ${item.products.price}
                    </td>
                    <td className="py-4 text-center">
                      <button className="text-red-600">
                        <MdDelete size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <h2 className="text-center text-gray-500 text-base sm:text-lg">
          Your cart is empty.
        </h2>
      )}
      <div className="flex flex-col sm:flex-row items-center justify-between p-2">
        <h2 className="md:text-2xl font-semibold">Total Amount: $2200</h2>
        <div className="flex gap-1 md:gap-2 flex-wrap">
          <RedirectToProductBtn />
          <button className="p-3 md:p-4 bg-lime-600 rounded-lg hover:bg-lime-400 transition-colors text-white">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
