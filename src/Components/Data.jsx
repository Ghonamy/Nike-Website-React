import product1 from "../Assets/Images/shoe4.svg";
import product2 from "../Assets/Images/shoe5.svg";
import product3 from "../Assets/Images/shoe6.svg";
import product4 from "../Assets/Images/shoe7.svg";
import star from "../Assets/Icons/star.svg";
import icon1 from "../Assets/Icons/truck-fast.svg";
import icon2 from "../Assets/Icons/shield-tick.svg";
import icon3 from "../Assets/Icons/support.svg";
import { title } from "motion/react-client";
import person1 from "../Assets/Images/customer1.jpeg";
import person2 from "../Assets/Images/customer2.svg";

export const popularProducts = [
  {
    id: 1,
    img: product1,
    title: "Nike Air Jordan",
    price: "300.20$",
    rating: 4.8,
    star: star,
  },
  {
    id: 2,
    img: product2,
    title: "Nike Air Max",
    price: "220.20$",
    rating: 4.7,
    star: star,
  },
  {
    id: 3,
    img: product3,
    title: "Nike Air Pegasus",
    price: "210.20$",
    rating: 4.5,
    star: star,
  },
  {
    id: 4,
    img: product4,
    title: "Nike Air Mercurial",
    price: "200.20$",
    rating: 4.5,
    star: star,
  },
];

export const servicesData = [
  {
    id: 1,
    icon: icon1,
    title: "Free Shipping",
    description:
      "Enjoy Seamless Shopping With Our Complimentary Shipping Service.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Secure payment",
    description:
      "Experience Worry-Free Transactions With Our Secure Payment Option.",
  },
  {
    id: 3,
    icon: icon3,
    title: "Love To Help You",
    description:
      "Our Dedicated Team is Here To assist you every step of the way.",
  },
];

export const reviewsData = [
  {
    id: 1,
    img: person1,
    name: "Morich Brown",
    review:
      "The Attention To Detail and The Quality of The Product Exceeded My Expectation Highly Recommended!",
    rating: "(4.5)",
    icon: star,
  },
  {
    id: 2,
    img: person2,
    name: "Lota Mongeskar",
    review:
      "The Product not Only Met but Exceeded My Expectation, I'll Definitely be a returning Customer!",
    rating: "(4.8)",
    icon: star,
  },
];
