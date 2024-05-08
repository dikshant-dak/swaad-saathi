import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
import axios from 'axios';
import { useAuthState } from '@/lib/state/auth';

export default function Login() {
  const router = useRouter();
  const { authState, setAuthState } = useAuthState();

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

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const data = {
        email: formData.email,
        password: formData.password,
      };
      const res = await axios.post('http://localhost:4000/auth/login', data)
      if (res.data.success) {
        setAuthState((prevState: any) => {
          const newState = {
            ...prevState,
            loggedIn: true,
            customerId: res.data.customer?.id,
            token: res.data.token,
          };
          localStorage.setItem('authState', JSON.stringify(newState));
          return newState;
        });
        router.push("/");
      } else {
        console.log("Error during login:", res.data.message)
      }
    } catch (error) {
      console.log("Error during login:", error)
    }
  }

  return (
    <>
      <div className="min-h-screen flex flex-col sm:justify-center items-center bgImageAuth bg-cover bg-center bg-no-repeat">
        <div className="sm:max-w-sm w-full relative">
          {/* Hide cards on small screens */}

          <div className="hidden sm:block">
            <div className="card bg-orange-600 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"></div>

            <div className="card bg-red-600 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"></div>
          </div>

          <div className="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md">
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
                  type="text"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="mt-1 pl-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-10">
                <button
                  type="submit"
                  className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
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
                <button className="mr-8 bg-orange-600 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                  Facebook
                </button>

                <button className="bg-red-600 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                  Google
                </button>
              </div>

              <div className="w-full mt-10 mb-6 ml-6">
                <label className="block font-medium text-sm text-sky-950 w-full">
                  Do not Have Any Account?
                  <Link href="/registration">
                    <span className="text-cyan-500"> Create Account </span>
                  </Link>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

