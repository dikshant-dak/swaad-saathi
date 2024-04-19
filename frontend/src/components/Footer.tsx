import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa'
const Footer = () => {
  return (
    <>
      <div className="bg-red-700 h-80 p-14 tracking-widest mt-20 ">
        <span className="text-2xl font-bold text-white italic">
          Swaad Saathi
        </span>
        <p className="pr-1 py-3 text-gray-300">
          {' '}
          Welcome to SwaadSaathi, your number one source for all things food. We
          re dedicated to giving you the very best of food, with a focus on
          quality, taste and hygiene.
        </p>
        <div className='flex items-center justify-center py-4 gap-10 text-white font-semibold'>
          <span className=' transition-all duration-300'>Contact Us</span>
          <span>About Us</span>
          <span>Blogs</span>
          <span>Security</span>
        </div>
        <div className="flex items-center justify-center mt-3">
          <span>
            <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full text-[18px] mx-[12.5px] bg-[#1877f2] text-white md:w-[50px] md:h-[50px] md:hover:cursor-pointer md:hover:opacity-90">
              <FaFacebook size={20} />
            </div>
          </span>
          <span>
            <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full text-[18px] mx-[12.5px] bg-[#E84C88] text-white md:w-[50px] md:h-[50px] md:hover:cursor-pointer md:hover:opacity-90">
              <FaInstagram size={20} />
            </div>
          </span>
          <span>
            <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full text-[18px] mx-[12.5px] bg-[#1DA1F2] text-white md:w-[50px] md:h-[50px] md:hover:cursor-pointer md:hover:opacity-90">
              <FaTwitter size={20} />
            </div>
          </span>
          <span>
            <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full text-[18px] mx-[12.5px] bg-[#c4302b] text-white md:w-[50px] md:h-[50px] md:hover:cursor-pointer md:hover:opacity-90">
              <FaYoutube size={20} />
            </div>
          </span>
          <span>
            <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full text-[18px] mx-[12.5px] bg-[#0A66C2] text-white md:w-[50px] md:h-[50px] md:hover:cursor-pointer md:hover:opacity-90">
              <FaLinkedin size={20} />
            </div>
          </span>
        </div>
      </div>
    </>
  )
}

export default Footer
