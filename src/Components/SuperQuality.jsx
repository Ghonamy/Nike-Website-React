import SuperShoes from "../assets/Images/vibrant-orange-sneaker.jpeg";
function SuperQuality() {
  return (
    <div id="about" className="bg-black py-10 px-10">
      <div className="conatiner mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="max-w-[650px] text-center md:text-left mb-7">
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              We Provide You
              <span className="text-[#ff6452]"> Super Quality</span> Shoes
            </h1>
            <p className="text-gray-500 text-[14px] md:text-[18px] my-6">
              Ensuring premium comfort and style, our meticulosly crafted
              footwear is designed to elevate your experience. Providing you
              with unmatched quality , innovation, and a touch of elegance.
            </p>
            <p className="text-gray-500 text-[14px] md:text-[18px] my-6">
              Our dedication to detail and excellence ensure your satisfaction
            </p>
            <a
              href="#"
              className="bg-[#ff6452] border-2 border-[#ff6452] text-white duration-300 px-6 py-2 rounded-3xl hover:bg-transparent hover:text-[#ff6452] text-[18px] inline-block mt-7 shadow-[0px_0px_15px_#ff6452]"
            >
              View Details
            </a>
          </div>
          <img
            src={SuperShoes}
            className="w-[350px] md:w-[500px] mx-auto md:mx-0 rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default SuperQuality;
