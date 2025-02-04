import Offer from "../Assets/Images/offer.svg";

function SpecialOffer() {
  return (
    <div className="bg-black px-7 py-16">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <img
            src={Offer}
            className="max-w-[360px] md:max-w-[650px] mr-auto md:mr-14 ml-auto md:ml-0 "
          />
          <div className="text-center md:text-left">
            <h2 className="text-white text-[40px] md:text-[45px] font-bold mb-5">
              <span className="text-[#ff6452]">Special</span> Offer
            </h2>
            <p className="text-gray-500 mb-8 text-sm md:text-lg">
              Embark on a shopping journey that refines your experience with
              unbeatable deals. From premier selections to incredible saving. we
              offer unparalleled value that sets us apart.
            </p>
            <p className="text-gray-500 mb-8 text-sm md:text-lg">
              Navigate a realm of possibilities designed to fullfill your unique
              desires, supassing the loftiest expectations, Your journey with us
              is nothing short of exceptional.
            </p>
            <div className="flex items-center mt-8 md:mt-16 mb-10 md:mb-0">
              <a
                href="#"
                className="bg-[#ff6452] text-white border-2 border-[#ff6452] px-6 py-2 text-[15px] md:text-[18px] rounded-4xl mr-3 duration-300 hover:bg-transparent hover:text-[#ff6452] inline-block"
              >
                View Details
              </a>
              <a
                href="#"
                className="text-white px-6 py-2 border-2 border-white rounded-4xl text-[15px] md:text-[18px] inline-block"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialOffer;
