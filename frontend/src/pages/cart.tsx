import { useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom';
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useAuthState } from '@/lib/state/auth'
import axios from 'axios'
import { motion } from 'framer-motion'

export default function Cart() {
  const [cart, setCart] = useState([])
  const { authState } = useAuthState()
  const [customerData, setCustomerData] = useState(null)
  const [loading, setIsLoading] = useState(true)
  // const history = useHistory();
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:4000/cartItems')
        const result = await response.json()
        setCart(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const checout = async () => {
    try {
      const res = await fetch('http://localhost:4000/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({
          orderDate: new Date(),
          requiredDate: new Date(),
          status: 'pending',
          customerNumber: 1
        })
      })
      const data = await res.json()
      window.location.href = data.url
    } catch (error) {}
  }

  const handelChange = async () => {
    try {
      const response = await fetch('http://localhost:4000/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          orderDate: new Date(),
          status: 'pending',
          totalPrice: totalAmount + 5,
          deliveryAddress: '123, New York',
          discountAmount: 5,
          customerId: customerData?.id,
          orderItems: cart.map(item => ({
            itemsId: item.items.id,
            quantity: item.quantity
          }))
        })
      })
      const data = await response.json()
      if (data) {
        window.alert('Order Placed Successfully')
      }
    } catch (error) {
      console.log('Error adding item:', error)
    }
  }

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCart = cart.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity }
      }
      return item
    })
    setCart(updatedCart)
  }

  const handleIncreaseQuantity = itemId => {
    const updatedCart = cart.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 }
      }
      return item
    })
    setCart(updatedCart)
  }

  const handleDecreaseQuantity = itemId => {
    const updatedCart = cart.map(item => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 }
      }
      return item
    })
    setCart(updatedCart as any)
  }

  const handleRemoveItem = (itemId: any) => {
    const updatedCart = cart.filter(item => item.id !== itemId)
    setCart(updatedCart)
  }

  // Calculate total amount
  const getTotalAmount = () => {
    return cart.reduce(
      (total, item) => total + item.quantity * item.items.price,
      0
    )
  }
  // console.log(totalAmount)
  useEffect(() => {
    const total = getTotalAmount()
    setTotalAmount(total)
  }, [cart, getTotalAmount])

  useEffect(() => {
    setIsLoading(false)
    if (authState.loggedIn === true) {
      axios
        .get(`http://localhost:4000/customers/${authState.customerId}`)
        .then(res => {
          setCustomerData(res.data)
        })
        .catch(err => {
          console.log('Error in displaying customer data', err)
        })
    }
  }, [authState.customerId, authState.loggedIn])

  if (loading) {
    return <div className="text-white">Loading...</div>
  }

  return (
    <>
      <Header customerData={customerData} />
      <div className="container mx-auto px-6 py-8 flex">
        <div className="w-2/3 pr-8">
          <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
          {cart.length > 0 ? (
            cart.map((item: any) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-6 mb-8 flex items-start overflow-hidden"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={item.items.img}
                  alt={item.items.name}
                  className="w-64 h-32 rounded-lg object-cover mr-8"
                />
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-2xl font-bold text-gray-800 mb-4">
                      {item.items.name}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      Type: {item.items.type}
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      {item.items.description}
                    </p>
                    <p className="text-lg font-bold">${item.items.price}</p>
                  </div>
                  <div className="flex items-center mt-6">
                    <button
                      className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4"
                      onClick={() => handleDecreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <p className="text-lg font-bold mr-4">{item.quantity}</p>
                    <button
                      className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center"
                      onClick={() => handleIncreaseQuantity(item.id)}
                    >
                      +
                    </button>
                    <button
                      className="text-red-500 ml-auto"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </button>
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
              onClick={checout}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
