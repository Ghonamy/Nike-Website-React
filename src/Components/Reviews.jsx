import { reviewsData } from "./Data";
import ReviewCard from "./ReviewCard";

function Reviews() {
  return (
    <div className="bg-black px-7 py-12">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            What Our <span className="text-[#ff6452]">Customers</span> Say?
          </h2>
          <p className="text-[15px] md:text-[18px] max-w-[550px] mx-auto text-gray-500 mt-5">
            Hear Genuine Stories From Our Satisfied Customers about Thier
            Expectational Experiences With Us.
          </p>
        </div>
        <div className="my-10 flex flex-col-reverse md:flex-row items-center justify-center space-x-36">
          {reviewsData.map((rev) => {
            const { id, name, img, icon, review, rating } = rev;
            return (
              <ReviewCard
                key={id}
                name={name}
                img={img}
                icon={icon}
                review={review}
                rating={rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
