import logo from "../Assets/Images/footer-logo.svg";
import facebookLogo from "../Assets/Icons/facebook.svg";
import twitterLogo from "../Assets/Icons/twitter.svg";
import instagramLogo from "../Assets/Icons/instagram.svg";
function Footer() {
  return (
    <div className="bg-black pt-14 pb-5 px-7 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-7 mb-20 md:gap-32">
          <div>
            <img src={logo} className="w-[150px]" />
            <p className="w-[350px] text-gray-400 text-[16px] my-5">
              Get shoes ready for the new term at your nearest Nike Store. Find
              your perfect size in store. Get Rewards
            </p>
            <div className="flex items-center">
              <img
                src={facebookLogo}
                className="bg-gray-300 cursor-pointer rounded-full p-2 mr-3 w-[40px] duration-300 hover:bg-gray-500"
              />
              <img
                src={twitterLogo}
                className="bg-gray-300 cursor-pointer rounded-full p-2 mr-3 w-[40px] duration-300 hover:bg-gray-500"
              />
              <img
                src={instagramLogo}
                className="bg-gray-300 cursor-pointer rounded-full p-2 mr-3 w-[40px] duration-300 hover:bg-gray-500"
              />
            </div>
          </div>
          <div>
            <h2 className="text-[22px] mb-5">Products</h2>
            <ul>
              <li className="text-[16px] mb-2 cursor-pointer text-gray-400 duration-300 hover:text-white">
                Air Force 1
              </li>
              <li className="text-[16px] mb-2 cursor-pointer text-gray-400 duration-300 hover:text-white">
                Air Max 1
              </li>
              <li className="text-[16px] mb-2 cursor-pointer text-gray-400 duration-300 hover:text-white">
                Air Jordan 1
              </li>
              <li className="text-[16px] mb-2 cursor-pointer text-gray-400 duration-300 hover:text-white">
                Air Force 2
              </li>
              <li className="text-[16px] mb-2 cursor-pointer text-gray-400 duration-300 hover:text-white">
                Nike Waffle Racer
              </li>
              <li className="text-[16px] mb-2 cursor-pointer text-gray-400 duration-300 hover:text-white">
                Nike Cortez
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-[22px] mb-5">Help</h2>
            <ul>
              <li className="text-[16px] mb-2 cursor-pointer text-gray-400 duration-300 hover:text-white">
                About Us
              </li>
              <li className="text-[16px] mb-2 cursor-pointer text-gray-400 duration-300 hover:text-white">
                FAQs
              </li>
              <li className="text-[16px] mb-2 cursor-pointer text-gray-400 duration-300 hover:text-white">
                How it Works
              </li>
              <li className="text-[16px] mb-2 cursor-pointer text-gray-400 duration-300 hover:text-white">
                Privacy Policy
              </li>
              <li className="text-[16px] mb-2 cursor-pointer text-gray-400 duration-300 hover:text-white">
                Payment Policy
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-[22px] mb-5">Get in Touch</h2>
            <p className="text-[16px] text-gray-400 mb-2">customer@nike.com</p>
            <p className="text-[16px] text-gray-400 mb-2">+0123456789</p>
          </div>
        </div>
        <div>
          <p className="text-center text-[18px] text-[#ff6452]">
            &copy; Copyright. All Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
