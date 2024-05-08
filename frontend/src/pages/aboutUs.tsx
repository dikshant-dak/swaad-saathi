import Favourites from '@/components/Favourites'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProductCategory from '@/components/ProductCategory'
import Toprestaurant from '@/components/Toprestaurant'
import Image from 'next/image'
import headerImage from '../images/Header.png'
import { useAuthState } from '@/lib/state/auth'
import { useEffect, useState } from 'react'
import axios from 'axios'

const AboutUs = () => {
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

  return (
    <>
      <Header customerData={customerData} />

      <div className="flex justify-center items-center h-screen">
        <div className="w-1/2 p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">About Us</h1>
          <p className="text-gray-700 mb-4">
            Welcome to our food delivery system! We are passionate about
            delivering delicious meals right to your doorstep with convenience
            and reliability.
          </p>
          <p className="text-gray-700 mb-4">
            Our team is dedicated to providing you with the best dining
            experience, whether you're craving a hearty breakfast, a quick
            lunch, or a gourmet dinner.
          </p>
          <p className="text-gray-700 mb-4">
            With a diverse menu of cuisines to choose from and seamless delivery
            services, we strive to make every meal memorable.
          </p>
          <p className="text-gray-700">
            Thank you for choosing us for your culinary adventures!
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutUs
