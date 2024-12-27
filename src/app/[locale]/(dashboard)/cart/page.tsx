'use client'

import { useCart } from "@/src/app/hooks/useCart";
import { createClient } from "@/src/utils/supabase/client";
import Link from "next/link";

<<<<<<< HEAD
const Page = () => {
  const { cart, setCart } = useCart();

  const onDelete = async (productId: number) => {
    if (cart) {
      setCart(cart.filter((item) => item.product_id !== productId));
    }
    const supabase = createClient();
    const { data } = await supabase
      .from("cart")
      .delete()
      .eq("product_id", productId);
  };

  const onUpdate = async (productId: number, newQuantity: number) => {
    if (cart) {
      const updatedCart = cart.map((item) =>
        item.product_id === productId
          ? { ...item, quantity: newQuantity }
          : item
      );
      setCart(updatedCart);
    }
    const supabase = createClient();
    const { data } = await supabase
      .from("cart")
      .update({ quantity: newQuantity })
      .eq("product_id", productId);
  };

  const totalAmount = cart
    ? cart.reduce(
        (total, item) => total + item.products.price * item.quantity,
        0
      )
    : 0;

  return (
    <div className="w-[60vw] p-6 mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Cart</h1>
      {cart ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-100">
=======
const Page = async () => {
  const response = await fetch('http://localhost:3000/api/cart', {
    cache: 'no-store',
  });
  const cart: CartItem[] = await response.json();

  return (
    <div className='w-[60vw] p-6 mx-auto'>
      <h1 className='text-2xl font-bold text-gray-800 mb-6'>My Cart</h1>
      {cart.length > 0 ? (
        <div className='overflow-x-auto'>
          <table className='min-w-full bg-white border border-gray-200 rounded-lg shadow-md'>
            <thead className='bg-gray-100'>
>>>>>>> development
              <tr>
                <th className='text-left px-6 py-3 text-sm font-medium text-gray-700'></th>
                <th className='text-left px-6 py-3 text-sm font-medium text-gray-700'>
                  Product Name
                </th>
                <th className='text-left px-6 py-3 text-sm font-medium text-gray-700'>
                  Quantity
                </th>
                <th className='text-left px-6 py-3 text-sm font-medium text-gray-700'>
                  Price per item
                </th>
                <th className='text-left px-6 py-3 text-sm font-medium text-gray-700'>
                  Total Price
                </th>
                <th className='text-left px-6 py-3 text-sm font-medium text-gray-700'></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className='border-t'>
                  <td className='px-6 py-4'>
                    <img
                      src={item.products.image_link}
                      alt={item.products.name}
                      className='w-16 h-16 object-cover rounded-lg'
                    />
                  </td>
                  <td className='px-6 py-4 text-gray-700'>
                    {item.products.name}
                  </td>
                  <td className='px-6 py-4 text-gray-700'>
                    <form className='flex gap-2'>
                      <input
<<<<<<< HEAD
                        type="number"
                        className="input w-[70px] border"
                        value={item.quantity}
                        min="1"
                        onChange={(e) => {
                          const newQuantity = Number(e.target.value);
                          onUpdate(item.product_id, newQuantity);
                        }}
                      />
=======
                        type='number'
                        className='input w-[70px] border'
                        // value={item.quantity}
                        min='1'
                      />
                      <button className='btn btn-primary' type='submit'>
                        Update
                      </button>
>>>>>>> development
                    </form>
                  </td>
                  <td className='px-6 py-4 text-gray-700 font-semibold '>
                    {item.products.price}
                  </td>
                  <td className='px-6 py-4 text-gray-700 font-semibold whitespace-nowrap'>
                    {item.products.price}
                  </td>
<<<<<<< HEAD
                  <td className="px-6 py-4">
                    <button
                      className="btn btn-error"
                      onClick={() => onDelete(item.id)}
                    >
                      Delete
                    </button>
=======
                  <td className='px-6 py-4'>
                    <button className='btn btn-error'>Delete</button>
>>>>>>> development
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className='text-center text-gray-500 text-lg'>Your cart is empty.</p>
      )}
<<<<<<< HEAD
      <div className="flex items-center justify-between p-2">
        <h2 className="text-2xl">Total Amount: {totalAmount}</h2>
        {/* Replace with actual total */}
        <div className="flex gap-2">
          <button className="p-4 bg-teal-600 rounded-lg hover:bg-teal-400 transition-colors">
            <Link href="/products">
            Continue Shopping
            
            </Link>
          </button>
          <button className="p-4 bg-lime-600 rounded-lg hover:bg-lime-400 transition-colors">
=======
      <div className='flex items-center justify-between p-2'>
        <h2 className='text-2xl'>Total Amount: $2200</h2>{' '}
        {/* Replace with actual total */}
        <div className='flex gap-2'>
          <button className='p-4 bg-teal-600 rounded-lg hover:bg-teal-400 transition-colors'>
            Continue Shopping
          </button>
          <button className='p-4 bg-lime-600 rounded-lg hover:bg-lime-400 transition-colors'>
>>>>>>> development
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
