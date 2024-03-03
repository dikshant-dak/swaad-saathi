import { useState } from 'react'

export default function Login() {
  const backgroundImageUrl =
    'https://t3.ftcdn.net/jpg/01/62/24/30/240_F_162243061_TUbVXao3vDGMXnGBr9HvCchQecRhl0r4.jpg'

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleLogin = async (e: any) => {
    console.log(JSON.stringify(formData))
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        console.log('Login successful')
      } else {
        console.error('Login failed')
      }
    } catch (error) {
      console.error('Error during login:', error)
    }
  }
  return (
    <>
      <div
        className="relative min-h-screen flex flex-col  sm:justify-center items-center bg-violet-700 "
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-orange-600 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
          <div className="card bg-red-600 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100  h-full shadow-md">
            <label className="block mt-3 text-sm text-gray-700 text-center font-semibold">
              Registration
            </label>
            <form
              method="#"
              action="#"
              onSubmit={handleLogin}
              className="mt-10"
            >
              <div className="mt-10">
                <input
                  type="string"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email ID"
                  className="mt-1 pl-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-10">
                <input
                  type="string"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="password"
                  className="mt-1 pl-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-10">
                <button
                  type="submit"
                  className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                >
                  Login
                </button>
              </div>

              <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />

                <label className="block font-medium text-sm text-gray-600 w-full">
                  Login with
                </label>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>
              <div className="flex mt-7 justify-center w-full">
                <button className="mr-8 bg-orange-600 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Facebook
                </button>
                <button className="bg-red-600 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Google
                </button>
              </div>
              <div className="w-full  mt-10 mb-6 ml-6">
                <label className="block font-medium text-sm text-sky-950 w-full">
                  Dont Have Any Account?
                  <span className="text-cyan-500"> Sign In </span>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

