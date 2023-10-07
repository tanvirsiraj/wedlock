import { PropTypes } from "prop-types";

const Service = ({ service }) => {
  console.log(service);
  const { id, name, img, price, shortDes } = service;
  return (
    <div className="card  glass" data-aos="zoom-in-up">
      <figure>
        <img className="w-full h-56" src={img} alt="car!" />
      </figure>
      <div className="card-body text-center">
        <h2 className=" text-center text-black font-semibold text-lg">
          {name}
        </h2>
        <p className="text-base text-black">{shortDes}</p>
        <p className="text-lg text-black font-semibold">{price}</p>
        <div className="card-actions justify-center mt-4">
          <button className="btn bg-primary-color text-white border-none">
            Read More...
          </button>
        </div>
      </div>
    </div>
  );
};

Service.propTypes = {
  service: PropTypes.array,
  id: PropTypes.number,
  price: PropTypes.number,
  name: PropTypes.string,
  shorDes: PropTypes.string,
};

export default Service;
