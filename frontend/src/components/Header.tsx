import Link from 'next/link'
import { useState } from 'react'
import { IoIosSearch } from 'react-icons/io'

const Header = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [underlinedOption, setUnderlinedOption] = useState('home')
  return (
    <>
      <div
        className="flex items-center justify-between h-20 px-4 md:px-6 w-full border-b bg-gradient-to-r bg-gray-100 shadow-2xl relative"
        style={{
          position: 'sticky',
          top: '0',
          zIndex: '1000'
        }}
      >
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
            href="/"
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
            href="/"
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
                <form>
                  <input
                    className="bg-white border border-gray-200 rounded-md px-3 w-[100%] py-2 focus:outline-red-700  "
                    placeholder="Search for dishes or restaurants..."
                    type="search"
                  />
                </form>
              </div>
            </div>
          )}

          <IoIosSearch
            size={25}
            onClick={() => {
              setShowSearch(!showSearch)
            }}
            className="text-red-700 font-bold hover:cursor-pointer"
          />
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
        </div>
      </div>

      {/* <div className='absolute top-16 left-60 rounded-b-md flex items-center justify-center min-w-[900px] h-12 bg-red-700'>
        <div className='flex justify-center gap-3'>
          <span>hello</span>
          <span>restaurant</span>
        </div>
      </div> */}
    </>
    // <div
    //   style={{
    //     height: '80px',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     fontSize: '1rem',
    //     position: 'sticky',
    //     top: '0',
    //     zIndex: '10',
    //     color: 'white',
    //     backgroundColor: 'red'
    //   }}
    // >
    //   <div
    //     style={{
    //       width: '100%',
    //       maxWidth: '1400px',
    //       padding: '0 24px',
    //       display: 'flex',
    //       gap: '14px',
    //       alignItems: 'center',
    //       justifyContent: 'space-between',
    //       fontSize: '1rem'
    //     }}
    //   >
    //     <div
    //       style={{
    //         width: '100%',
    //         display: 'flex',
    //         alignItems: 'center',
    //         padding: '0 6px',
    //         fontWeight: '500',
    //         fontSize: '18px',
    //         textDecoration: 'none',
    //         color: 'inherit'
    //       }}
    //     >
    //       <span style={{
    //         display: 'flex',
    //         alignItems: 'center',
    //         fontWeight: '500',
    //         fontSize: '18px',
    //         cursor: 'pointer',
    //         textDecoration: 'none',
    //         color: 'inherit'
    //       }}>
    //       Home</span>
    //        <span style={{
    //         display: 'flex',
    //         alignItems: 'center',
    //         fontWeight: '500',
    //         fontSize: '18px',
    //         cursor: 'pointer',
    //         textDecoration: 'none',
    //         color: 'inherit'
    //       }}>
    //       Home</span>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Header
