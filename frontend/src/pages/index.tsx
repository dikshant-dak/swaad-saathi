import Favourites from "@/components/Favourites";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCategory from "@/components/ProductCategory";
import Toprestaurant from "@/components/Toprestaurant";
import Image from "next/image";
import headerImage from "../images/Header.png";
import { useAuthState } from "@/lib/state/auth";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const { authState } = useAuthState();
  const [customerData, setCustomerData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    if (authState.loggedIn === true) {
      axios
        .get(`http://localhost:4000/customers/${authState.customerId}`)
        .then((res) => {
          setCustomerData(res.data);
        })
        .catch((err) => {
          console.log("Error in displaying customer data", err);
        });
    }
  }, [authState.customerId, authState.loggedIn]);

  if (isLoading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <>
      <Header customerData={customerData} />
      <div className="flex justify-center my-16">
        <Image src={headerImage} height={600} width={1000} alt="test" />
      </div>
      <Toprestaurant />
      <div className="block my-24 ">
        <span className="flex items-center justify-center text-red-700 text-2xl font-bold">
          Food Categories
        </span>
        <div className="flex flex-wrap gap-16 justify-center my-8">
          <ProductCategory />
          <ProductCategory />
          <ProductCategory />
          <ProductCategory />
        </div>
      </div>

      <div className="ml-14 p-3 my-30 rounded-l-3xl bg-gray-100 h-[500px]">
        <p className="text-2xl mt-1 text-red-700 font-bold ml-5">Favourities</p>
        <Favourites />
      </div>
      <div className="mt-10 px-16 py-5 bg-gray-200">
        <span className="font-bold text-2xl text-red-700">
          Top places near you
        </span>
        <div className="my-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.369332295504!2d73.68093597392397!3d24.576446956566198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5640659a7d5%3A0x9257af76faeaab0e!2sCity%20Palace!5e0!3m2!1sen!2sin!4v1713488769448!5m2!1sen!2sin"
            width="600"
            height="450"
            loading="lazy"
            style={{
              width: "100%",
            }}
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
