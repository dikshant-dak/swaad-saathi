import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useAuthState } from '@/lib/state/auth'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Rating from 'react-rating-stars-component'
interface MenuItem {
  description: string
  id: string
  img: string
  name: string
  price: number
  rating: number
  restaurant: {
    cityId: string
    description: string
    id: string
    img: string
    name: string
    rating: number
    type: string
    restaurantId: string
  }
  type: string
}
const Menu = () => {
  // // State to store menu items
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [quantities, setQuantities] = useState<any>({})
  // console.log(quantity)
  const handleChangeQuantity = (id: any, change: any) => {
    setQuantities((prev: any) => ({
      ...prev,
      [id]: (prev[id] || 1) + change
    }))
  }
  const [showGoToCart, setShowGoToCart] = useState<any>({})

  const [restaurant, setrestaurant] = useState([])

  // // const router = useRouter()
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/menuOfRestaurant/${id}`
        )
        if (!response.ok) {
          throw new Error('Failed to fetch menu items')
        }
        const data = await response.json()
        setMenuItems(data)
      } catch (error) {
        console.error('Error fetching menu items:', error)
        // Handle error
      }
    }

    if (id) {
      fetchMenuItems()
    }
  }, [id])

  const handleAddToCart = async (id: any) => {
    console.log(id, quantities[id] || 1)
    try {
      const response = await fetch('http://localhost:4000/cartItems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          itemsId: id,
          quantity: quantities[id] || 1,
          customerId: authState.customerId
        })
      })
      setShowGoToCart((prevState: any) => ({ ...prevState, [id]: true }))
      const data = await response.json()
    } catch (error) {
      console.log('Error adding item:', error)
    }
  }
  const { authState } = useAuthState()
  const [customerData, setCustomerData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  console.log('----')
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

  if (isLoading) {
    return <div className="text-white">Loading...</div>
  }
  if (menuItems.length === 0) {
    return (
      <>
        <Header customerData={customerData} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            fontSize: '1.5em',
            color: '#333',
            backgroundColor: '#f2f2f2'
          }}
        >
          No Data Found
        </div>
        <Footer />
      </>
    )
  }
  return (
    <>
      <Header customerData={customerData} />
      {/* <button onClick={handleApi}>bvbjdb</button> */}
      <div className="flex items-center mx-44 gap-3 mb-5 mt-6 ">
        <h1 className="text-[25px] font-semibold text-gray-600 tracking-widest">
          {menuItems[0]?.restaurant?.name}
        </h1>
        <h3 className="mt-2 flex gap-2">
          <p className="font-bold text-red-700">{}</p>
          <span className="text-gray-600"> Food Menu....</span>
        </h3>
      </div>
      <div className="max-w-screen mx-20 my-5 h-full rounded-xl  overflow-hidden">
        <div className="  rounded-3xl">
          <div className=" flex overflow-x-auto gap-4 p-4">
            {menuItems.map((restaurant: any) => (
              <div
                key={restaurant.id}
                className="bg-white rounded-lg min-w-64 shadow-xl"
              >
                <div className="p-4">
                  <Image
                    alt="Menu Image 1"
                    className="rounded-t-lg object-cover"
                    height={200}
                    // src={restaurant.img}
                    src="https://t4.ftcdn.net/jpg/02/03/06/45/360_F_203064510_mkerPoGGefI6JwajMaMoshbMwU6PFbhr.jpg"
                    style={{
                      aspectRatio: '300/200',
                      objectFit: 'cover'
                    }}
                    width={400}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{restaurant.name}</h2>
                  <h4 className="text-xs py-2 text-gray-500">
                    {restaurant.description}
                  </h4>
                  <Rating
                    count={5}
                    value={restaurant.rating}
                    size={16}
                    activeColor="#ffd700"
                    edit={false}
                  />
                </div>
                <div className="p-4 flex justify-center items-end">
                  <button
                    onClick={() => handleChangeQuantity(restaurant.id, -1)}
                    disabled={quantities[restaurant.id] === 1}
                    className="bg-gray-200 text-black px-3 py-1 rounded-l-md hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="bg-gray-100 text-black px-3 py-1">
                    {quantities[restaurant.id] || 1}
                  </span>
                  <button
                    onClick={() => handleChangeQuantity(restaurant.id, 1)}
                    className="bg-gray-200 text-black px-3 py-1 rounded-r-md hover:bg-gray-300"
                  >
                    +
                  </button>
                  {!showGoToCart[restaurant.id] && (
                    <button
                      className="bg-red-700 text-white hover:shadow-xl p-2 rounded-xl font-thin hover:scale-105 transition-all duration-300 ml-4"
                      onClick={() => handleAddToCart(restaurant.id)}
                    >
                      Add To Cart
                    </button>
                  )}
                  {showGoToCart[restaurant.id] && (
                    <button
                      className="bg-blue-700 text-white hover:shadow-xl p-2 rounded-xl font-thin hover:scale-105 transition-all duration-300 ml-4"
                      onClick={() => router.push('/cart')}
                    >
                      Go To Cart
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Menu
