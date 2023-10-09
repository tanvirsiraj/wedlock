import { useContext } from "react";
import { Context } from "../../context/AuthContext";
import Service from "./Service";
import Marquee from "react-fast-marquee";

const Services = () => {
  const { services } = useContext(Context);
  // console.log(services);
  return (
    <div className="max-w-6xl mx-auto mt-[350px] lg:mt-[800px]">
      <div className="text-center md:max-w-3xl md:mx-auto">
        <h2 className="md:text-5xl text-black font-semibold">
          Our{" "}
          <span className="text-primary-color font-section-title font-semibold">
            Services
          </span>{" "}
        </h2>
        <Marquee speed={80}>
          <p className="text-black text-sm lg:text-xl mt-2">
            {services.map((service) => (
              <span key={service.id}> {service.name}, </span>
            ))}
          </p>
        </Marquee>
      </div>
      <div className="mx-2 md:mx-0 grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
