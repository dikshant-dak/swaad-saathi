import Image from 'next/image'
import { useEffect, useState } from 'react'
import Rating from 'react-rating-stars-component'
const Toprestaurant = () => {
  const [restaurants, setRestaurants] = useState<any>([])

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

  const highRating = restaurants.filter(
    (restaurant: any) => restaurant.rating > 4.5
  )
  // console.log(highRating.slice(0, 12))
  return (
    <div className="bg-red-700 mr-10 rounded-r-3xl">
      <div className="flex justify-start ml-16 text-white mt-3 font-semibold">
        <span className="text-xl mt-4">Top Rated Restaurant</span>
      </div>
      <div className=" flex overflow-x-auto gap-4 p-4">
        {/* <div className="bg-white rounded-lg shadow-md">
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
        </div> */}
        {highRating.slice(0, 12).map((restaurant: any) => (
          <div
            key={restaurant.id}
            className="bg-white rounded-lg min-w-64 shadow-md"
          >
            <div className="p-4">
              <Image
                alt="Menu Image 1"
                className="rounded-t-lg object-cover"
                height={200}
                src={restaurant.img}
                style={{
                  aspectRatio: '300/200',
                  objectFit: 'cover'
                }}
                width={400}
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold">
                {restaurant.name?.substring(3, restaurant?.name.length)}
              </h2>
              <h4 className="text-xs py-2 text-gray-500">
                {restaurant.description}
              </h4>
              <Rating
                count={5}
                value={restaurant.rating}
                size={16}
                activeColor="#ffd700"
                edit={false}
              />
            </div>
            <div className="p-4 flex justify-center items-end">
              <button className="bg-red-700  text-white hover:shadow-xl p-2 rounded-xl font-thin hover:scale-105 transition-all duration-300">
                View Menu
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Toprestaurant
