import Header from '@/components/Header'
import Image from 'next/image'

const Orders = () => {

  const checout = async() => {
   try {
    const res = await fetch('http://localhost:4000/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify({
        orderDate: new Date(),
        requiredDate: new Date(),
        status: 'pending',
        customerNumber: 1
      })
    })
    const data = await res.json()
    window.location.href = data.url
   } catch (error) {
    
   }

  }
  return (
    <>
      <Header />
      <div>
        <p className="text-2xl text-red-700 flex justify-start mx-44 mt-8 font-bold tracking-widest">
          All Orders{" "} (count)
        </p>
        <div className="flex justify-center mt-12">
          <div className="w-3/4 bg-slate-200 rounded-lg flex">
            <Image
              src="../images/2.jpg"
              alt="image"
              width={300}
              height={300}
              style={{
                borderRadius: '12px'
              }}
            />
            <div className="flex flex-col p-10 gap-3">
              <h1 className="text-red-700 tracking-wider text-xl">Item name</h1>
              <h2 className="text-red-800 text-lg">price: 32</h2>
              <h2 className="text-gray-700">Quantity</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Orders
