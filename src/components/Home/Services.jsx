import { useContext } from "react";
import { Context } from "../../context/AuthContext";

const Services = () => {
  const data = useContext(Context);
  console.log(data);
  return (
    <div className="max-w-6xl mx-auto mt-[800px]">
      <div className="text-center md:max-w-xl md:mx-auto">
        <h2 className="md:text-5xl text-black font-semibold">
          Our{" "}
          <span className="text-primary-color font-section-title font-semibold">
            Services
          </span>{" "}
        </h2>
        <p className="text-black text-xl mt-4">
          Discover our comprehensive wedding services, from planning to
          celebration, making your special day truly unforgettable.
        </p>
      </div>
    </div>
  );
};

export default Services;
