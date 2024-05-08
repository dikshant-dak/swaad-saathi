import Favourites from "@/components/Favourites";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCategory from "@/components/ProductCategory";
import Toprestaurant from "@/components/Toprestaurant";
import Image from "next/image";
import headerImage from "../images/Header.png";
import { useAuthState } from "@/lib/state/auth";
import { useEffect, useState } from "react";
import axios from "axios";
interface Customer {
  id: string
  firstName: string
  lastName: string
  age: number
  email: string
  phone: string // Assuming phone is a string
  // Add other properties if needed
}
const Profile = () => {
  const { authState } = useAuthState();
  const [customerData, setCustomerData] = useState<Customer | null>(null)
  const [isLoading, setIsLoading] = useState(true);
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
if (customerData) {
  console.log('Phone:', customerData)
} else {
  console.log('customerData is null')
}

if(authState.customerId === null) {
  return (
    <>
      <Header customerData={customerData} />
      <div className="text-center mt-20">
        <h1 className="text-3xl text-red-700">Please Login to view your profile</h1>
      </div>
      <Footer />
    </>
  )
}
return (
  <>
    <Header customerData={customerData} />

    <div className="flex items-center justify-center h-screen">
      <div className=" w-max h-max flex flex-col items-center justify-center p-8 rounded shadow-2xl">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2 md:mr-8">
            {/* Added margin-top for spacing */}
            <Image
              src="https://hips.hearstapps.com/hmg-prod/images/natalie-portman-chris-hemsworth-thor-love-and-thunder-1652863266.jpg?crop=0.294xw:0.442xh;0.461xw,0.0486xh&resize=640:*"
              alt="Profile Picture"
              width={300} // Adjusted width
              height={300} // Adjusted height
              className="rounded-full mt-12 mb-5"
            />
          </div>

          <div className="w-full md:w-auto p-4 rounded-lg ">
            <div className="flex flex-col items-center md:items-start mb-4">
              <h1 className="text-lg mr-2 font-serif text-zinc-950">
                First Name :
              </h1>
              <input
                type="text"
                placeholder="Enter Name"
                className="bg-gray-100 w-full md:w-96 px-3 py-1 h-9 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                value={customerData?.firstName}
              />
            </div>
            <div className="flex flex-col items-center md:items-start mb-4">
              <h1 className="text-lg mr-3 font-serif text-zinc-950">
                Last Name :
              </h1>
              <input
                type="text"
                placeholder="Enter Name"
                className="bg-gray-100 w-full md:w-96 px-3 py-1 h-9 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                value={customerData?.lastName}
              />
            </div>
            <div className="flex flex-col items-center md:items-start mb-4">
              <h1 className="text-lg font-serif mr-3 text-zinc-950">Email :</h1>
              <input
                type="email"
                placeholder="Enter Email"
                className="bg-gray-100 w-full md:w-96 px-3 py-1 h-9 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                value={customerData?.email}
              />
            </div>
            <div className="flex flex-col items-center md:items-start mb-4">
              <h1 className="text-lg mr-3 font-serif text-zinc-950">Phone :</h1>
              <input
                type="text"
                placeholder="Enter Phone"
                className="bg-gray-100 w-full md:w-96 px-3 py-1 h-9 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                value={customerData?.phone}
              />
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-lg mr-3 font-serif text-zinc-950">Age :</h1>
              <input
                type="text"
                placeholder="Enter Age"
                className="bg-gray-100 w-full md:w-96 px-3 py-1 h-9 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                value={customerData?.age}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

}



export default Profile
