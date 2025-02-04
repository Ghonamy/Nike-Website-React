import React from "react";
import { popularProducts } from "./Data";
import { div } from "motion/react-client";
import PopularProduct from "./PopularProduct";

function PopularProducts() {
  return (
    <div id="products" className="bg-black text-white px-7">
      <div className="container mx-auto py-12">
        <div className="text-center md:text-left">
          <h1 className="text-[30px] md:text-5xl font-bold mb-5">
            Our <span className="text-[#ff6452]">Popular</span> Products
          </h1>
          <p className="text-gray-500 text-[18px] max-w-2xl">
            Exeperience top-notch quality and style with our sought-after
            selections. Discove a world of comfort, design and value.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 py-15">
          {popularProducts.map((product) => {
            const { id, img, rating, star, price, title } = product;
            return (
              <PopularProduct
                key={id}
                img={img}
                rating={rating}
                star={star}
                price={price}
                title={title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PopularProducts;
