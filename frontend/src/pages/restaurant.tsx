import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useAuthState } from '@/lib/state/auth'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Rating from 'react-rating-stars-component'
import Image from 'next/image'

export default function Restaurant() {
  const [restaurants, setRestaurants] = useState<any>([])
  const [isLoading, setIsLoading] = useState(true)
  const [city, setCity] = useState<any>([])
  const { authState } = useAuthState();
  const [customerData, setCustomerData] = useState(null);
  const [selectedCity, setSelectedCity] = useState(
    '03e46085-f0f7-4a76-a82d-13a6e93db9e7'
  )
  const [selectedCityName, setSelectedCityName] = useState('Udaipur')
  // console.log(restaurants[0].city)

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
  

  useEffect(() => {
    async function fetchRestroData() {
      setIsLoading(true)
      try {
        const response = await fetch('http://localhost:4000/allrestaurants')
        const result = await response.json()
        setRestaurants(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
      setIsLoading(false)
    }

    async function fetchData() {
      try {
        const response = await fetch('http://localhost:4000/cities')
        const result = await response.json()
        setCity(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchRestroData()
    fetchData()
  }, [])

  const fliteredRestaurants = restaurants.filter(
    (restaurant: any) => restaurant?.cityId === selectedCity
  )

  if (isLoading) {
    return <div>Loading...</div> // Render loading text while data is being fetched
  }
  return (
    <>
      <Header customerData={customerData} />
      <div className="flex justify-between mx-20">
        {city.map((city: any) => (
          <div key={city.id}>
            <button
              className="px-6 py-2 bg-gray-200 text-red-900 rounded-3xl my-6 font-semibold shadow-lg"
              style={{
                backgroundColor:
                  selectedCity === city?.id ? '#b91c1c' : '#f9fafb',
                color: selectedCity === city?.id ? '#f9fafb' : '#b91c1c'
              }}
              onClick={() => {
                setSelectedCity(city?.id)

                setSelectedCityName(city?.cityName)
              }}
            >
              {city?.cityName}
            </button>
          </div>
        ))}
      </div>
      <div className="flex items-center mx-44 gap-3 mb-5 mt-6 ">
        <h1 className="text-[25px] font-semibold text-gray-600 tracking-widest">
          {selectedCityName} Restaurants
        </h1>
        <h3 className="mt-2 flex gap-2">
          <p className="font-bold text-red-700">{fliteredRestaurants.length}</p>
          <span className="text-gray-600"> restaurants found....</span>
        </h3>
      </div>
      <main className="container mx-auto flex justify-center">
        <div className="grid gap-6">
          {fliteredRestaurants.map((restaurant: any) => (
            <div
              key={restaurant.id}
              className="rounded-lg shadow-md overflow-hidden "
            >
              <div className="grid grid-cols-2 ">
                <div className="">
                  <Image
                    src={restaurant.img}
                    alt={restaurant.name}
                    className="w-full h-48 object-cover"
                    width={300}
                    height={200}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">
                    {restaurant.name?.substring(3, restaurant.name.length)}
                  </h2>
                  <p className="text-gray-600 mb-2">{restaurant.type}</p>
                  <p className="text-sm text-gray-700 mb-4">
                    {restaurant.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Rating
                      count={5}
                      value={restaurant.rating}
                      size={24}
                      activeColor="#ffd700"
                      edit={false}
                    />
                    <Link href={`/menuOfRestaurant/${restaurant.id}`}>
                      <button className="px-4 py-2 bg-red-700 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Order Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
