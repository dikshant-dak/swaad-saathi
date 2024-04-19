import React from 'react'
import Image from 'next/image'
const Toprestaurant = () => {
  return (
    <div className="bg-red-700 mr-10 rounded-r-3xl">
      <div className="flex justify-start ml-16 text-white mt-3 font-semibold">
        <span className="text-xl mt-4">Top Rated Restaurant</span>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4">
            <Image
              alt="Menu Image 1"
              className="rounded-t-lg object-cover"
              height={200}
              src="https://www.tripsavvy.com/thmb/SyhIqaVK9jjmXeyoqVRuwCfE0dg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-831315810-31fe23f84e2d4130bd20c05118138c67.jpg"
              style={{
                aspectRatio: '300/200',
                objectFit: 'cover'
              }}
              width={300}
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold">Restaurant A</h2>
            <p className="text-sm text-gray-500">
              Rating: 4.5
              <span>(800-1200)</span>
            </p>
          </div>
          <div className="p-4 flex justify-center">
            <button className="bg-red-700  text-white hover:shadow-xl p-2 rounded-xl font-thin hover:scale-105 transition-all duration-300">
              View Menu
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4">
            <Image
              alt="Menu Image 2"
              className="rounded-t-lg object-cover"
              height={200}
              src="https://www.tripsavvy.com/thmb/SyhIqaVK9jjmXeyoqVRuwCfE0dg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-831315810-31fe23f84e2d4130bd20c05118138c67.jpg"
              style={{
                aspectRatio: '300/200',
                objectFit: 'cover'
              }}
              width={300}
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold">Restaurant B</h2>
            <p className="text-sm text-gray-500">
              Rating: 4.2
              <span>(800-1200)</span>
            </p>
          </div>
          <div className="p-4 flex justify-center">
            <button className="bg-red-700  text-white hover:shadow-xl p-2 rounded-xl font-thin hover:scale-105 transition-all duration-300">
              View Menu
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4">
            <Image
              alt="Menu Image 3"
              className="rounded-t-lg object-cover"
              height={200}
              src="https://www.tripsavvy.com/thmb/SyhIqaVK9jjmXeyoqVRuwCfE0dg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-831315810-31fe23f84e2d4130bd20c05118138c67.jpg"
              style={{
                aspectRatio: '300/200',
                objectFit: 'cover'
              }}
              width={300}
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold">Restaurant C</h2>
            <p className="text-sm text-gray-500">
              Rating: 4.8
              <span>(800-1200)</span>
            </p>
          </div>
          <div className="p-4 flex justify-center">
            <button className="bg-red-700  text-white hover:shadow-xl p-2 rounded-xl font-thin hover:scale-105 transition-all duration-300">
              View Menu
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4">
            <Image
              alt="Menu Image 4"
              className="rounded-t-lg object-cover"
              height={200}
              src="https://www.tripsavvy.com/thmb/SyhIqaVK9jjmXeyoqVRuwCfE0dg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-831315810-31fe23f84e2d4130bd20c05118138c67.jpg"
              style={{
                aspectRatio: '300/200',
                objectFit: 'cover'
              }}
              width={300}
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold">Restaurant D</h2>
            <p className="text-sm text-gray-500">
              Rating: 4.0
              <span>(800-1200)</span>
            </p>
          </div>
          <div className="p-4 flex justify-center">
            <button className="bg-red-700  text-white hover:shadow-xl p-2 rounded-xl font-thin hover:scale-105 transition-all duration-300">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toprestaurant