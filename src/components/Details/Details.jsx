import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/AuthContext";

const Details = () => {
  const { id } = useParams();
  const { services } = useContext(Context);
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    if (services.length > 0) {
      const selectedData = services.find(
        (service) => service.id === parseInt(id)
      );
      console.log(services, selectedData);
      setSelected(selectedData);
    }
  }, [services]);
  return (
    <div className="mx-2 lg:max-w-6xl lg:mx-auto my-10">
      <div className="card md:card-side bg-[#ECF6F7] shadow-lg">
        <figure className="w-full">
          <img className="h-full " src={selected.img} alt="Movie" />
        </figure>
        <div className="card-body ps-4 pr-2 lg:p-6 text-black">
          <h2 className="text-xl font-semibold">{selected.name}</h2>
          <p className="font-bold text-lg">{selected.price}</p>
          <p>{selected.details}</p>
          <div className="card-actions">
            <button className="btn bg-primary-color hover:bg-secondary-color border-none text-white">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
