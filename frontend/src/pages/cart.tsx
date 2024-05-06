import { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { motion } from 'framer-motion';

export default function Cart() {
  const [cart, setCart] = useState([]);
  // const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:4000/cartItems');
        const result = await response.json();
        setCart(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleIncreaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleDecreaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  // Calculate total amount
  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.quantity * item.items.price, 0);
  };

  // Redirect to checkout page

  return (
    <>
      <Header />
      <div className="container mx-auto px-6 py-8 flex">
        <div className="w-2/3 pr-8">
          <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
          {cart.length > 0 ? (
            cart.map((item) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-6 mb-8 flex items-start overflow-hidden"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src={item.items.imageUrl} alt={item.items.name} className="w-32 h-32 rounded-lg object-cover mr-8" />
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-2xl font-bold text-gray-800 mb-4">{item.items.name}</p>
                    <p className="text-sm text-gray-600 mb-2">Type: {item.items.type}</p>
                    <p className="text-sm text-gray-600 mb-4">{item.items.description}</p>
                    <p className="text-lg font-bold">${item.items.price}</p>
                  </div>
                  <div className="flex items-center mt-6">
                    <button className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                    <p className="text-lg font-bold mr-4">{item.quantity}</p>
                    <button className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                    <button className="text-red-500 ml-auto" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-xl text-gray-800">Your cart is empty</p>
          )}
        </div>
        <div className="w-1/3 pl-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Payment Summary</h2>
            <hr className="my-4" />
            <div className="text-gray-600 mb-2">
              <div className="flex justify-between mb-2">
                <p>Subtotal</p>
                <p>${getTotalAmount()}</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <p>Delivery Fee</p>
                <p>${getTotalAmount() === 0 ? 0 : 5}</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <b>Total</b>
                <b>${getTotalAmount() === 0 ? 0 : getTotalAmount() + 5}</b>
              </div>
            </div>
            <button
              className="w-full bg-red-500 text-white py-2 mt-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}