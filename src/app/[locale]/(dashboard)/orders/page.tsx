import React from "react";
import { createClient } from "@/src/utils/supabase/server";

const OrdersList: React.FC = async () => {
  const supabase = await createClient();

  const { data } = await supabase.from("orders").select();

  if (!data) return;

  const orders = [...data];

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
              data-cy="order-product"
            >
              <img
                src={order.product_photo}
                alt={order.product_name}
                className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="mt-4">
                <h2 className="text-lg font-bold text-gray-800 group-hover:text-blue-600">
                  {order.product_name}
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                  {order.product_description}
                </p>
                <div className="mt-4 text-2xl font-bold text-gray-900">
                  ${+order.product_price}
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
