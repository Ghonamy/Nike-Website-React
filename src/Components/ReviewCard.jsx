function ReviewCard({ name, img, review, icon, rating }) {
  return (
    <div className="text-center mx-auto mb-3 md:my-0">
      <img src={img} className="w-[80px] rounded-full mx-auto mt-7 mb-5" />
      <p className="max-w-[350px] text-gray-600 text-[16px]">{review}</p>
      <div className="flex items-center justify-center my-2">
        <img src={icon} className="w-[16px] mr-2" />
        <span className="text-[16px] text-[#ff6452]">{rating}</span>
      </div>
      <h3 className="font-semibold text-lg text-white">{name}</h3>
    </div>
  );
}

export default ReviewCard;
