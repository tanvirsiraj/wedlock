import Swal from "sweetalert2";
import banner from "../../assets/banner.jpg";

const Banner = () => {
  const handleLearnMore = () => {
    Swal.fire({
      title: "WedLock!",
      text: "Wedlock weddings symbolize the union of two hearts, a lifelong commitment celebrated with love and joy. These special occasions bring families and friends together to witness the exchange of vows, promising a future filled with shared dreams and enduring love. Wedlock weddings mark the beginning of a beautiful journey as a married couple.",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
      confirmButtonColor: "#9ACCC9",
      confirmButtonText: "Close",
    });
  };
  return (
    <div
      className="absolute top-10 hero h-[350px] lg:h-[800px]"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div>
          <h1
            className="mb-2 text-4xl lg:text-8xl font-bold font-banner text-white"
            data-aos="flip-right"
            data-aos-duration="2000"
          >
            Wedding
          </h1>
          <p className=" mb-4 lg:mb-16 text-white lg:text-3xl font-semibold">
            Let's plan your next event together
          </p>
          <button
            onClick={handleLearnMore}
            className="btn bg-primary-color hover:bg-secondary-color border-none text-white capitalize text-lg"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
