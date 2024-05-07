import React, { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Link from 'next/link'

const RegistrationPage = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    phone: '',
    password: ''
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const data = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        age: formData.age,
        email: formData.email,
        phone: formData.phone,
        password: formData.password
      };
      const res = await axios.post('http://localhost:4000/auth/register', data)
      if (res.data.success) {
        router.push('/login')
      } else {

      }
    } catch (error) {
        console.log('Error during registration:', error)
    }
     
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          className="relative min-h-screen flex flex-col sm:justify-center items-center bgImageAuth"
          // style={{
          //   backgroundImage: `url(${bgImage})`,
          //   backgroundSize: 'cover',
          //   backgroundPosition: 'center',
          //   backgroundRepeat: 'no-repeat'
          // }}
        >
          <div className="card bg-orange-600 shadow-lg  w-2/4 h-96 rounded-3xl absolute  transform -rotate-3"></div>
          <div className="card bg-orange-600 shadow-lg  w-2/4 h-96 rounded-3xl absolute  transform -rotate-3"></div>

          <div className="card bg-red-600 shadow-lg  w-2/4 h-96 rounded-3xl absolute  transform   rotate-3"></div>
          <div className=" relative bg-gray-100  rounded-2xl w-2/4 h-96">
            <label className="block mt-3 text-xl text-gray-700 text-center mb-6 font-semibold">
              Registration
            </label>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className=" m-4 pl-2 block w-1/2 border-none bg-white h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
              <input
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className=" m-4 pl-2 block w-1/2 border-none bg-white h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="m-4 pl-2 block w-1/2 border-none bg-white h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
              <input
                type="text"
                placeholder="Enter Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="m-4 pl-2 block w-1/2 border-none bg-white h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className=" m-4 pl-2 block w-1/2 border-none bg-white h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
              <input
                type="number"
                placeholder="Enter age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="m-4 pl-2 block w-1/2 border-none bg-white h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
            </div>
            <div className="flex items-center">
              <div className="w-1/2  ml-6">
                <label className="block font-medium text-sm text-sky-950 w-full">
                  Already Have An Account ?
                  <Link href="/login">
                    <span className="text-cyan-500"> Sign In </span>
                  </Link>
                </label>
              </div>
              <div className="w-96 m-4 pl-2 flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-6 rounded-xl shadow-lg hover:bg-blue-300 focus:bg-blue-100 focus:ring-0 mr-8"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
export default RegistrationPage
