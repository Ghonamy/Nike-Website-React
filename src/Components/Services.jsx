import { servicesData } from "./Data";
import ServiceCard from "./ServiceCard";
function Services() {
  return (
    <div className="bg-black px-7 py-20">
      <div className="container mx-auto">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-16">
          Our <span className="text-[#ff6452]">Services</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {servicesData.map((service) => {
            const { id, title, description, icon } = service;
            return (
              <ServiceCard
                key={id}
                title={title}
                description={description}
                icon={icon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
