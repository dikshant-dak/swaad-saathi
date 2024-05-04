import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Cart() {
  const [cart, setCart] = useState<any>([])

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

  return (
    <>
      <Header />
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
        {cart ? (
          cart.map((item:any) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6 mb-8 flex items-start overflow-hidden">
              <img src={item.items.imageUrl} alt={item.items.name} className="w-48 h-48 rounded-lg object-cover mr-8" />
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
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-xl text-gray-800">Your cart is empty</p>
        )}
      </div>
      <Footer />
    </>
  );
}
