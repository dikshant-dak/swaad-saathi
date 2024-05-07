import Header from '@/components/Header'
import { useAuthState } from '@/lib/state/auth'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Orders = () => {
  const [loading, setIsLoading] = useState(true)
  const [customerData, setCustomerData] = useState(null)
  const { authState } = useAuthState()

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
  console.log(customerData)

  useEffect(() => {
    async function fetchRestroData() {
      setIsLoading(true)
      try {
        const response = await fetch(
          `http://localhost:4000/orders/${customerData?.id}`
        )
        const result = await response.json()
        console.log(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
      setIsLoading(false)
    }
    fetchRestroData()
  }, [customerData?.id])

  
  if (loading) {
    return <div className="text-white">Loading...</div>
  }
  return (
    <>
      <Header customerData={customerData} />
      <div>
        <p className="text-2xl text-red-700 flex justify-start mx-44 mt-8 font-bold tracking-widest">
          All Orders (count)
        </p>
        <div className="flex justify-center mt-12">
          <div className="w-3/4 bg-slate-200 rounded-lg flex">
            <Image
              src="../images/2.jpg"
              alt="image"
              width={300}
              height={300}
              style={{
                borderRadius: '12px'
              }}
            />
            <div className="flex flex-col p-10 gap-3">
              <h1 className="text-red-700 tracking-wider text-xl">Item name</h1>
              <h2 className="text-red-800 text-lg">price: 32</h2>
              <h2 className="text-gray-700">Quantity</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Orders
