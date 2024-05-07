import { useAuthState } from '@/lib/state/auth'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { IoIosSearch } from 'react-icons/io'

const Header = ({ customerData }: { customerData: any }) => {
  const { authState, setAuthState } = useAuthState()
  const [showSearch, setShowSearch] = useState(false)
  const [underlinedOption, setUnderlinedOption] = useState('')
  const [restaurants, setRestaurants] = useState<any>([])
  const [searchQuery, setSearchQuery] = useState('')
  const inputSearch = useRef<HTMLInputElement>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:4000/allrestaurants')
        const result = await response.json()
        setRestaurants(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (showSearch) {
      inputSearch.current?.focus()
    }
  })

  const filteredRestaurants = restaurants.filter((restaurant: any) =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
  )
  console.log(underlinedOption)
  return (
    <div
      style={{
        position: 'sticky',
        top: '0',
        zIndex: '1000'
      }}
    >
      <div className="flex items-center justify-between h-20 px-4 md:px-6 w-full border-b bg-gradient-to-r bg-gray-100 shadow-2xl relative">
        <span className="mr-4 md:mr-6 font-bold text-[24px] text-red-700 tracking-widest ">
          Swaad Saathi
        </span>
        <div className="flex items-center font-bold text-lg text-red-700 gap-10">
          <Link
            href="/"
            id="home"
            className={` tracking-wider ${
              underlinedOption === 'home' ? 'underline' : null
            }`}
            onClick={() => {
              setUnderlinedOption('home')
            }}
          >
            Home
          </Link>
          <Link
            href="/Orders"
            id="order"
            className={` tracking-wider ${
              underlinedOption === 'order' ? 'underline' : null
            }`}
            onClick={() => {
              setUnderlinedOption('order')
            }}
          >
            Orders
          </Link>
          <Link
            href="/"
            id="account"
            className={`tracking-wider ${
              underlinedOption === 'account' ? 'underline' : null
            }`}
            onClick={() => {
              setUnderlinedOption('account')
            }}
          >
            Account
          </Link>
          <Link
            href="/restaurant"
            id="restaurant"
            className={` tracking-wider ${
              underlinedOption === 'restaurant' ? 'underline ' : null
            }`}
            onClick={() => {
              setUnderlinedOption('restaurant')
            }}
          >
            Restaurants
          </Link>
        </div>
        <div className="flex items-center gap-4 ">
          {showSearch && (
            <div className="">
              <div className="w-64 mx-2">
                <input
                  ref={inputSearch}
                  className="bg-white border border-gray-200 rounded-md px-3 w-[100%] py-2 focus:outline-red-700  "
                  placeholder="Search for dishes or restaurants..."
                  type="search"
                  onChange={e => {
                    setSearchQuery(e.target.value)
                  }}
                />
              </div>
            </div>
          )}

          <IoIosSearch
            size={25}
            onClick={() => {
              setShowSearch(!showSearch)
            }}
            className="text-red-700 font-bold hover:cursor-pointer mr-5"
          />
          {authState.loggedIn === false ? (
            <>
              <Link href="/login">
                <button className="bg-red-700 text-white hover:text-red-700 hover:bg-transparent px-4 py-2 rounded-xl duration-300 transition-all font-semibold shadow-lg shadow-red-300">
                  Log in
                </button>
              </Link>
              <Link href="/registration">
                <button className="bg-red-700 text-white hover:bg-red-500 px-4 py-2 rounded-xl duration-300 transition-all font-semibold shadow-lg shadow-red-300 hover:bg-transparent hover:text-red-700">
                  Sign up
                </button>
              </Link>
            </>
          ) : (
            <div className="flex gap-2 items-center">
              <h2 className="text-red-700 font-bold tracking-wider text-lg">
                Hi!, {customerData?.firstName}
              </h2>
            </div>
          )}
        </div>
      </div>
      {searchQuery && (
        <>
          <div
            className="absolute right-28 max-h-[400px] p-3 rounded-b-2xl bg-white w-1/3 overflow-y-auto"
            style={{
              border: '1px solid #c53434',
              borderTop: 'none'
            }}
          >
            <h2 className="text-red-700 font-semibold">
              {filteredRestaurants?.length} Search Results
            </h2>
            {filteredRestaurants.map((restaurant: any) => (
              <div
                className="flex items-center mt-4 gap-3 p-2 rounded-md hover:shadow-lg hover:border-red-700 hover:border-2 hover:border-solid hover:cursor-pointer"
                key={restaurant?.id}
                style={{
                  border: '1px solid #c3c3c3'
                }}
              >
                <img
                  src={restaurant.img}
                  alt={restaurant.name}
                  className="w-20 h-20 rounded-lg"
                />
                <div>
                  <h1 className="font-bold text-sm text-red-700">
                    {restaurant.name?.substring(3, restaurant.name.length)}
                  </h1>
                  <p className="text-gray-500 text-sm">
                    {restaurant.description}
                  </p>
                  <p className="text-red-700 text-xs">
                    {' '}
                    Type: {restaurant.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Header
