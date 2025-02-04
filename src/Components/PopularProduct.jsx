function PopularProduct({ title, price, img, rating, star }) {
  return (
    <>
      <div className="text-center">
        <img src={img} className="mx-auto md:mx-0" />
        <div className="flex items-center justify-center text-lg my-3">
          <img src={star} className="w-[16px] mr-[10px]" />
          <span className="text-[#ff6452]">{rating}</span>
        </div>
        <h4 className="text-[20px] mb-3">{title}</h4>
        <p className="text-[#ff6452] font-bold text-lg">{price}</p>
      </div>
    </>
  );
}

export default PopularProduct;
