import { useEffect, useState } from 'react'
import Image from 'next/image'

const Sidebar = () => {
  const [selected, setSelected] = useState('add')
  const [orderData, setOrderData] = useState<any>([])
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Salad'
  })
  const [selectedImage, setSelectedImage] = useState(null);


  const [loading, setLoading] = useState(false)
  const [city, setCity] = useState([])
  const [restaurants, setRestaurants] = useState<any>([])

  // console.log(restaurants[0].city)
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
console.log(orderData)
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:4000/orders')
        const result = await response.json()
        setOrderData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:4000/cities')
        const result = await response.json()
        setCity(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const response = await fetch(
          'http://localhost:4000/restaurant/03e46085-f0f7-4a76-a82d-13a6e93db9e7'
        )
        const result = await response.json()
        setRestaurants(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const [formData, setFormData] = useState({
    restaurantName: '',
    description: '',
    type: '',
    rating: 0,
    city: '',
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/c3/ba/40/bars-pubs-meal-type.jpg?w=800&h=-1&s=1'
  })

  const [itemData, setItemData] = useState({
    itemName: '',
    description: '',
    type: '',
    rating: 0,
    restaurant: '',
    img: '', 
    itemPrice: 0
  })

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleItemChange = (e: any) => {
    if (e.target.name === 'img') {
      // Handle file input
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setItemData({
          ...itemData,
          img: reader.result as string
        });
      };
      reader.readAsDataURL(file);
    } else {
      // Handle other inputs
      setItemData({
        ...itemData,
        [e.target.name]: e.target.value
      });
    }
    console.log(itemData);
  };
  const handleItemSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:4000/additem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: itemData.itemName,
          description: itemData.description,
          type: itemData.type,
          rating: itemData.rating,
          restaurantId: itemData.restaurant,
          img: itemData.img,
          price: itemData.itemPrice as number
        })
      })
      const data = await response.json()
    } catch (error) {
      console.log('Error adding item:', error)
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:4000/addresturant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.restaurantName,
          description: formData.description,
          type: formData.type,
          rating: formData.rating,
          cityId: formData.city,
          img: formData.img
        })
      })

      const data = await response.json()
    } catch (error) {
      console.error('Error adding restaurant:', error)
    }
  }

  return (
    <div className="flex">
      <div className="w-[20%] min-h-[70vh] border 1px stroke-gray-500 border-t-0">
        <div className="pt-[50px] pl-[20%] flex flex-col gap-5">
          <div
            className="flex items-center gap-3 border stroke-slate-800 border-r-0 p-2 hover: cursor-pointer"
            onClick={() => {
              setSelected('add')
            }}
            style={{
              borderLeft: selected === 'add' ? '4px solid #FF6B6B' : 'none'
            }}
          >
            <p>Add Restaurant</p>
          </div>
          <div
            className="flex items-center gap-3 border stroke-slate-800 border-r-0 p-2 hover: cursor-pointer"
            style={{
              borderLeft: selected === 'list' ? '4px solid #FF6B6B' : 'none'
            }}
            onClick={() => {
              setSelected('list')
            }}
          >
            <p>Add Items</p>
          </div>
          <div
            className="flex items-center gap-3 border stroke-slate-800 border-r-0 p-2 hover: cursor-pointer"
            style={{
              borderLeft: selected === 'orders' ? '4px solid #FF6B6B' : 'none'
            }}
            onClick={() => {
              setSelected('orders')
            }}
          >
            <p>Orders</p>
          </div>
        </div>
      </div>
      <div className="w-[80%] p-5">
        {selected === 'add' ? (
          <div className="w-[70%] ml-4 mt-4  text-xl">
            <form className="flex-col">
              <div className="flex gap-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                  Restaurant Name
                </label>
                <input
                  type="restaurantName"
                  name="restaurantName"
                  id="small-input"
                  onChange={handleChange}
                  value={formData.restaurantName}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Restaurant name"
                  required
                />
              </div>
              <div className="flex gap-5 mt-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Restaurant description"
                  required
                />
              </div>
              <div className="flex gap-5 mt-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                  Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                >
                  <option value="">Select Type</option>
                  <option value="Indian">Indian</option>
                  <option value="Contemporary">Contemporary</option>
                  <option value="Italian">Italian</option>
                  <option value="Bar">Bar</option>
                  <option value="Chinese">Chinese</option>
                </select>
              </div>
              <div className="flex gap-5 mt-5">
                <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                  Rating
                </label>
                <input
                  type="number"
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  max={5}
                  step={0.1}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Restaurant Rating"
                  required
                />
              </div>
              <div className="flex gap-5 mt-5 items-center">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                  Select City
                </label>
                <select
                  id="city"
                  name="city"
                  value={formData?.city}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                >
                  <option>Select City</option>
                  {Array.isArray(city) &&
                    city.map((city: any) => (
                      <option key={city.id} value={city.id}>
                        {city.cityName}
                      </option>
                    ))}
                </select>
              </div>
              <div className="flex justify-end mt-5">
                <button
                  className="max-w-[120px] border-none p-2 bg-[#FF6B6B] text-white hover:cursor-pointer rounded-xl flex text-lg"
                  onClick={handleSubmit}
                >
                  ADD
                </button>
              </div>
            </form>
          </div>
        ) : selected === 'list' ? (
          <form className="flex-col">
            <div className="flex gap-5">
              <label
                htmlFor="restaurantName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
              >
                Restaurant Name
              </label>
              <select
                id="restaurant"
                name="restaurant"
                onChange={handleItemChange}
                value={itemData?.restaurant}
              >
                <option>Select Restaurant</option>
                {restaurants && Array.isArray(restaurants) ? (
                  restaurants.map((restaurant: any) => (
                    <option key={restaurant.id} value={restaurant.id}>
                      {restaurant.name}
                    </option>
                  ))
                ) : (
                  <option value="" disabled>
                    Loading...
                  </option>
                )}
              </select>
            </div>
            <div className="flex gap-5 mt-5">
  <label
    // htmlFor="itemImage"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
  >
    Item Image
  </label>
  <input
    onChange={handleItemChange}
    // value={itemData.img}
    id="img"
    name="img"
    type="file"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    required
  />
</div>
            <div className="flex gap-5 mt-5">
              <label
                htmlFor="item"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
              >
                Item name
              </label>
              <input
                onChange={handleItemChange}
                value={itemData.itemName}
                id="ItemName"
                name="itemName" // Change this to "itemName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Item name"
                required
              />
            </div>
            <div className="flex gap-5 mt-5">
  <label
    htmlFor="itemPrice"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
  >
    Item Price
  </label>
  <input
    onChange={handleItemChange}
    value={itemData.itemPrice}
    id="ItemPrice"
    name="itemPrice"
    type="number"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Enter Item Price"
    required
  />
</div>
            <div className="flex gap-5 mt-5">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                onChange={handleItemChange}
                value={itemData.description}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Restaurant description"
                required
              />
            </div>
            <div className="flex gap-5 mt-5">
              <label
                htmlFor="type"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
              >
                Type
              </label>
              <select
                id="type"
                name="type"
                onChange={handleItemChange}
                value={itemData.type}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option value="">Select Type</option>
                <option value="Indian">Indian</option>
                <option value="Contemporary">Contemporary</option>
                <option value="Italian">Italian</option>
                <option value="Bar">Bar</option>
                <option value="Chinese">Chinese</option>
              </select>
            </div>
            <div className="flex gap-5 mt-5">
              <label
                htmlFor="rating"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
              >
                Rating
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={itemData.rating}
                onChange={handleItemChange}
                max={5}
                step={0.1}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Restaurant Rating"
                required
              />
            </div>

            <div className="flex justify-end mt-5">
              <button
                onClick={handleItemSubmit}
                type="submit"
                className="max-w-[120px] border-none p-2 bg-[#FF6B6B] text-white hover:cursor-pointer rounded-xl flex text-lg"
              >
                ADD
              </button>
            </div>
          </form>
        ) : (
          <div>
      <p className="text-2xl text-red-700 flex justify-start mx-44 mt-8 font-bold tracking-widest">
        All Orders ({orderData.length})
      </p>
      {orderData.map((order:any) => (
  order.orderItems.map((item:any) => (
    <div className="flex justify-center mt-12" key={item.id}>
      <div className="w-3/4 bg-slate-200 rounded-lg flex">
        <Image
          src={item.items.img}
          alt="image"
          width={300}
          height={300}
          style={{
            borderRadius: '12px'
          }}
        />
        <div className="flex flex-col p-10 gap-3">
          <h1 className="text-red-700 tracking-wider text-xl">{item.items.name}</h1>
          <h2 className="text-red-800 text-lg">price: {item.items.price}</h2>
          <h2 className="text-gray-700">Quantity: {item.quantity}</h2>
          <h2 className="text-gray-700">Customer Name: {order.customer.firstName}{order.customer.lastName}</h2>
        </div>
      </div>
    </div>
  ))
))}
    </div>
        )}
      </div>
    </div>
  )
}

export default Sidebar
