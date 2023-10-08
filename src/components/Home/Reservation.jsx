import reservation from "../../assets/reserved.jpg";

const Reservation = () => {
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
              <form className="card-body">
                <h2 className="md:text-3xl text-center text-black font-semibold  font-section-title">
                  Make Reservations
                </h2>
                <div className="form-control ">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input bg-transparent py-0 border-b-2 text-md border-b-white border-t-0 border-x-0 mb-4 rounded-none  outline-none focus:outline-none"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="input bg-transparent py-0 border-b-2 text-md border-b-white border-t-0 border-x-0 mb-4 rounded-none  outline-none focus:outline-none"
                    required
                  />
                  <input
                    type="number"
                    placeholder="Guests"
                    className="input bg-transparent py-0 border-b-2 text-md border-b-white border-t-0 border-x-0 mb-4 rounded-none  outline-none focus:outline-none"
                    required
                  />
                  <input
                    type="date"
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
