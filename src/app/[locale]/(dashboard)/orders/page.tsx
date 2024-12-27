import React from "react";

interface Order {
  id: number;
  productName: string;
  description: string;
  price: number;
  imageUrl: string;
}

const orders: Order[] = [
  {
    id: 1,
    productName: "Wireless Headphones",
    description: "Noise-cancelling over-ear headphones.",
    price: 299.99,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    productName: "Smartphone",
    description: "Latest model with all the features you need.",
    price: 999.99,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    productName: "Gaming Chair",
    description: "Ergonomic design for long gaming sessions.",
    price: 199.99,
    imageUrl: "https://via.placeholder.com/150",
  },
];

const OrdersList: React.FC = () => {
  return (
    <div className="min-h-screen md:min-h-[85vh] text-textColor flex items-center justify-center overflow-hidden w-screen px-4 sm:px-8 bg-gradient-to-r ">
      <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
          My Orders
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {orders.map((order) => (
            <div
              key={order.id}
              className="relative border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow bg-white group hover:bg-blue-50"
            >
              <img
                src={order.imageUrl}
                alt={order.productName}
                className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="mt-4">
                <h2 className="text-lg font-bold text-gray-800 group-hover:text-blue-600">
                  {order.productName}
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                  {order.description}
                </p>
                <div className="mt-4 text-2xl font-bold text-gray-900">
                  ${order.price.toFixed(2)}
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow">
                On your way
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersList;
