import Favourites from '@/components/Favourites'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProductCategory from '@/components/ProductCategory'
import Toprestaurant from '@/components/Toprestaurant'
import Image from 'next/image'
import headerImage from '../images/Header.png'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Rating from 'react-rating-stars-component'
import { useAuthState } from '@/lib/state/auth'
import axios from 'axios'

const Menu = () => {
  // // State to store menu items
  const [menuItems, setMenuItems] = useState([])
  const [quantities, setQuantities] = useState({});
  const [customerData, setCustomerData] = useState<any>(null);
  console.log(customerData)
  const { authState } = useAuthState();
  const [isLoading, setIsLoading] = useState(true)
  // console.log(quantity)
  const handleChangeQuantity = (id:any, change:any) => {
    setQuantities(prev => ({
      ...prev,
      [id]: (prev[id] || 1) + change
    }));
  };

  const [restaurant, setrestaurant] = useState([])

  // // const router = useRouter()
  const router = useRouter()
  const { id } = router.query
  // const [restaurant, setRestaurant] = useState(null)
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   if (id) {
  //     fetch(`/menuOfRestaurant/${id}`)
  //       .then(response => {
  //         if (!response.ok) {
  //           throw new Error('Failed to fetch menu items')
  //         }
  //         return response.json()
  //       })
  //       .then(data => {
  //         console.log('data-----aa------gaya', data) // Set the fetched menu items in state
  //       })
  //       .catch(error => {
  //         console.error('Error fetching menu items:', error)
  //         // Handle error
  //       })
  //   }
  // }, [id])
  // useEffect(() => {
  //   // Extract the restaurantId from the URL query
  //   const { restaurantId } = router.query

  //   if (restaurantId) {
  //     // Fetch menu items for the specified restaurant ID
  //     fetch(`/menuOfRestaurant/${restaurantId}`)
  //       .then(response => {
  //         if (!response.ok) {
  //           throw new Error('Failed to fetch menu items')
  //         }
  //         return response.json()
  //       })
  //       .then(data => {
  //         setMenuItems(data) // Set the fetched menu items in state
  //       })
  //       .catch(error => {
  //         console.error('Error fetching menu items:', error)
  //         // Handle error
  //       })
  //     console.log('--------menu-------', menuItems)
  //   }
  // }, [router.query])
  // const handleApi = async () => {
  //   console.log('-------------ab dekh te he ', id)
  //   try {
  //     fetch(`http://localhost:4000/menuOfRestaurant/${id}`)
  //       .then(response => {
  //         if (!response.ok) {
  //           throw new Error('Failed to fetch menu items')
  //         }
  //         return response.json()
  //       })
  //       .then(data => {
  //         setMenuItems(data) // Set the fetched menu items in state
  //       })
  //       .catch(error => {
  //         console.error('Error fetching menu items:', error)
  //         // Handle error
  //       })
  //     console.log('ho gaya', menuItems)
  //   } catch {
  //     console.log('dekat he ')
  //   }
  // }
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
  console.log(menuItems)

  const handleAddToCart = async(id: any) => {
    console.log(id, quantities[id] || 1)
    try {
      const response = await fetch('http://localhost:4000/cartItems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          itemsId:id,
          quantity: quantities[id] || 1,
          customerId: customerData?.id
        })
      })
      const data = await response.json()
    } catch (error) {
      console.log('Error adding item:', error)
    }
  }
  useEffect(() => {
    setIsLoading(false);
    if (authState.loggedIn === true) {
      axios
        .get(`http://localhost:4000/customers/${authState.customerId}`)
        .then((res) => {
          setCustomerData(res.data);
        })
        .catch((err) => {
          console.log("Error in displaying customer data", err);
        });
    }
  }, [authState.customerId, authState.loggedIn]);

  if (isLoading) {
    return <div className="text-white">Loading...</div>;
  }
  return (
    <>
      <Header customerData={customerData}/>
      {/* <button onClick={handleApi}>bvbjdb</button> */}
      <div className="max-w-screen mx-20 my-5 h-full rounded-xl  overflow-hidden">
        <div className="md:flex h-96 ">
          <div className="md:flex-shrink-0 w-full">
            {menuItems.length > 0 && (
              <img
                className="h-full w-full object-cover mx-8 rounded-3xl"
                src={menuItems[0].restaurant.img}
                alt="Restaurant Image"
              />
            )}
          </div>
        </div>
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
                  <h2 className="text-lg font-semibold">
                    {restaurant.name}
                  </h2>
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
  <span className="bg-gray-100 text-black px-3 py-1">{quantities[restaurant.id] || 1}</span>
  <button 
    onClick={() => handleChangeQuantity(restaurant.id, 1)}
    className="bg-gray-200 text-black px-3 py-1 rounded-r-md hover:bg-gray-300"
  >
    +
  </button>
  <button 
    className="bg-red-700 text-white hover:shadow-xl p-2 rounded-xl font-thin hover:scale-105 transition-all duration-300 ml-4"
    onClick={() => handleAddToCart(restaurant.id)}
  >
    Add To Cart
  </button>
</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu
