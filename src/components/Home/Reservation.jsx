import Swal from "sweetalert2";
import reservation from "../../assets/reserved.jpg";
import "animate.css";
const Reservation = () => {
  const handleReservation = (e) => {
    const name = e.target.name.value;
    e.preventDefault();
    Swal.fire({
      title: `You will be notified soon, ${name}`,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
    e.target.reset();
  };
  return (
    <div className=" bg-[#ECF6F7] py-10">
      <div className="max-w-6xl mx-auto">
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row ">
            <div>
              <img
                className="rounded-tr-3xl rounded-bl-3xl  border-4 border-white"
                src={reservation}
              />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm  bg-transparent">
              <form onSubmit={handleReservation} className="card-body">
                <h2 className="md:text-3xl text-center text-black font-semibold  font-section-title">
                  Make Reservations
                </h2>
                <div className="form-control ">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input bg-transparent py-0 border-b-2 text-md border-b-white border-t-0 border-x-0 mb-4 rounded-none  outline-none focus:outline-none"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input bg-transparent py-0 border-b-2 text-md border-b-white border-t-0 border-x-0 mb-4 rounded-none  outline-none focus:outline-none"
                    required
                  />
                  <input
                    type="number"
                    name="number"
                    placeholder="Guests"
                    className="input bg-transparent py-0 border-b-2 text-md border-b-white border-t-0 border-x-0 mb-4 rounded-none  outline-none focus:outline-none"
                    required
                  />
                  <input
                    type="date"
                    name="date"
                    placeholder="Date"
                    className="input bg-transparent py-0 border-b-2 text-md border-b-white border-t-0 border-x-0 mb-4 rounded-none  outline-none focus:outline-none"
                    required
                  />
                </div>

                <div className="form-control mt-6 ">
                  <button className="btn bg-primary-color border-none text-white capitalize text-lg hover:bg-secondary-color">
                    Make Reservation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
