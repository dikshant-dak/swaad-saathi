import Link from 'next/link'
import { CgDanger } from 'react-icons/cg'
const Failure = () => {
  return (
    <div className="bg-gray-100 h-1/2 w-full ">
      <div className="bg-white p-6  md:mx-auto ">
        <CgDanger size={70} color="red" className=" mx-auto my-6" />
        <div className="text-center">
          <div className="text-center md:text-2xl text-base text-gray-900 font-semibold">
            <h3>Payment Failed!</h3>
          </div>
          <p className="text-gray-600 my-2">
            We are sorry, it seems there was an issue processing your payment.
          </p>
          <p>Feel free to try again later or contact support for assistance.</p>

          <div className="py-10 text-center">
            <Link
              href="/"
              className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-md"
            >
              GO BACK
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Failure
