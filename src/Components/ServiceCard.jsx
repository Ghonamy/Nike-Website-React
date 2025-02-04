function ServiceCard({ title, description, icon }) {
  return (
    <div className="text-white shadow-[0px_0px_10px_#ff6452] p-7 rounded-2xl cursor-pointer hover:rotate-[5deg] transition-all duration-300">
      <img src={icon} className="bg-[#ff6452] p-2 rounded-full" />
      <h3 className="text-2xl my-4 font-bold">{title}</h3>
      <p className="text-gray-500 text-[17px]">{description}</p>
    </div>
  );
}

export default ServiceCard;
