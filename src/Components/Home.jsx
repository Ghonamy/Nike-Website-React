import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Arrow from "../Assets/Icons/arrow-right.svg";
import Shoes1 from "../Assets/Images/pngwing.com (3).png";
import Shoes2 from "../Assets/Images/pngwing.com (3).png";
import Shoes3 from "../Assets/Images/pngwing.com (2).png";
import Shoes4 from "../Assets/Images/wmremove-transformed.png";

function Home() {
  const [mainImg, setMainImage] = useState(Shoes1);
  function handleClick(newImage) {
    setMainImage(newImage);
  }
  return (
    <div id="home" className="bg-black min-h-[100vh] relative pt-14">
      <div className="container mx-auto flex flex-col md:flex-row justify-between pt-0 md:pt-20 px-6">
        <div className="text-center md:text-left mt-10 md:mt-20">
          <span className="text-gray-400 text-[18px]">
            Our Summer Collections
          </span>
          <h1 className="my-5 text-4xl md:text-6xl font-extrabold text-white">
            The New Arrival <br /> <span className="text-[#ff6452]">Nike</span>{" "}
            Shoses{" "}
          </h1>
          <p className="m-auto md:m-0 text-gray-500 text-[18px] w-[350px]">
            Discover Stylish Nike Arrival, Quality, Comfort and innovation for
            Your Active Life.
          </p>
          <div className="flex items-center mx-auto md:mx-0 mt-6 text-lg bg-[#ff6452] text-white px-5 py-2 rounded-full w-fit border-2 border-[#ff6452] hover:bg-transparent hover:text-[#ff6452] duration-300 shadow-[0px_0px_10px_#ff6452]">
            <a href="#" className="mr-3">
              Shop Now
            </a>
            <img src={Arrow} className="cursor-pointer" />
          </div>
        </div>
        <div>
          <motion.img
            key={mainImg}
            src={mainImg}
            className="max-w-[300px] mx-auto md:mx-0 mb-5 md:mb-2 mt-5 md:mt-0 md:max-w-[550px] drop-shadow-[0_20px_20px_#ff6452]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      </div>
      <div className="container mx-auto flex space-x-5 pb-6 justify-center mt-0 md:mt-8">
        {[Shoes2, Shoes3, Shoes4].map((shoes, index) => {
          return (
            <img
              src={shoes}
              key={index}
              className="w-20 border-1 rounded-xl border-[#ff6452] cursor-pointer p-3 hover:bg-[#a7a7a73c] duration-300"
              onClick={() => handleClick(shoes)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
