function Subscribe() {
  return (
    <div id="contact" className="px-7 py-20 text-center bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold">
          Sign Up For <span className="text-[#ff6452]">Updates</span> &
          Newsletter
        </h2>
        <div className="my-15 flex items-center justify-center">
          <input
            type="email"
            placeholder="subscribe@nike.com"
            className="border-2 border-[#ff6452] py-4 px-6 rounded-4xl w-2xl outline-0 text-[14px] md:text-[18px] relative shadow-[0_0_10px_#ff6452]"
          />
          <button
            type="submit"
            className="absolute bg-[#ff6452] px-6 py-3 rounded-4xl right-8 md:right-97 cursor-pointer text-[14px] md:text-[18px]"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
