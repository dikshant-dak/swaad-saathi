import { useEffect, useState } from "react";
import Rating from "react-rating-stars-component";

export default function Restaurant() {
    const [restaurants, setRestaurants] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(true);
// console.log(restaurants[0].city)
    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                const response = await fetch("http://localhost:4000/restaurant/03e46085-f0f7-4a76-a82d-13a6e93db9e7");
                const result = await response.json();
                setRestaurants(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            setIsLoading(false);
        }

        fetchData();
    }, []);
console.log(restaurants)
if (isLoading) {
    return <div>Loading...</div>; // Render loading text while data is being fetched
}
    return (
        <main className="container mx-auto py-8 flex justify-center">
            <div className="grid gap-6">
                <h1 className="text-3xl font-semibold text-center mb-8">{restaurants[0].city.cityName} Restaurant</h1>
                {restaurants.map((restaurant:any) => (
                    <div key={restaurant.id} className="rounded-lg shadow-md overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3">
                                <img src={restaurant.img} alt={restaurant.name} className="w-full h-48 object-cover" />
                            </div>
                            <div className="p-4 md:w-2/3">
                                <h2 className="text-xl font-semibold mb-2">{restaurant.name}</h2>
                                <p className="text-gray-600 mb-2">{restaurant.type}</p>
                                <p className="text-sm text-gray-700 mb-4">{restaurant.description}</p>
                                <div className="flex items-center">
                                <Rating
                                        count={5}
                                        value={restaurant.rating}
                                        size={24}
                                        activeColor="#ffd700"
                                        edit={false}
                                    />
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Order Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
