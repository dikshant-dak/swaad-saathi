import Header from '@/components/Header'
import { useAuthState } from '@/lib/state/auth'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Footer from '@/components/Footer'

const ContactForm = () => {
  const [textareaValue, setTextareaValue] = useState('')

  const handleTextareaChange = (event: any) => {
    setTextareaValue(event.target.value)
  }
  const { authState } = useAuthState()
  const [customerData, setCustomerData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(false)
    if (authState.loggedIn === true) {
      axios
        .get(`http://localhost:4000/customers/${authState.customerId}`)
        .then(res => {
          setCustomerData(res.data)
        })
        .catch(err => {
          console.log('Error in displaying customer data', err)
        })
    }
  }, [authState.customerId, authState.loggedIn])

  return (
    <>
      <Header customerData={customerData} />{' '}
      <div className="relative h-screen ">
        <div className="w-full max-w-[42.33%] pl-[15px] pr-[15px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-5xl font-semibold">Message Us</h1>
          <p className="mt-5 text-base">
            We want to hear from you! If you have any questions, feedback, or
            suggestions, please do not hesitate to contact us. You can message us
            as:
          </p>

          <div className="md:mt-9">
            <div className="flex flex-wrap w-full box-border ">
              <input
                className="max-w-[40%] min-h-[1px] w-full h-[42px] p-2 text-[gray] border border-solid border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                name="firstname"
                type="text"
                placeholder="First name"
              />
              <input
                className="max-w-[40%] min-h-[1px] w-full h-[42px] p-2 text-[gray] border border-solid border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 ml-[15px]"
                name="lastname"
                type="text"
                placeholder="Last name"
              />
            </div>
            <div className="flex flex-col flex-wrap w-full box-border">
              <input
                className="max-w-[82.5%] min-h-[1px] w-full h-[42px] mt-6 p-2 text-[gray] border border-solid border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                name="subject"
                type="text"
                placeholder="Subject"
              />
              <input
                className="max-w-[82.5%] min-h-[1px] w-full h-[42px] mt-6 p-2 text-[gray] border border-solid border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                name="email"
                type="email"
                placeholder="Email"
              />
              <textarea
                className="max-w-[82.5%] min-h-[1px] w-full mt-6 p-2 text-[gray] border border-solid border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                value={textareaValue}
                onChange={handleTextareaChange}
                rows={10}
                placeholder="Write your message here"
              />
            </div>
            <button className="mt-6 w-[30%] h-[50px] bg-gradient-to-r from-[#434343] to-[#1f1b1b] text-white rounded-3xl md:hover:cursor-pointer hover:opacity-90">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ContactForm
