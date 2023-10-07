import banner from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div
      className="absolute top-10 hero h-[350px] lg:h-[800px] "
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div>
          <h1 className="mb-2 text-4xl lg:text-8xl font-bold font-banner text-white">
            Wedding
          </h1>
          <p className=" mb-4 lg:mb-16 text-white lg:text-3xl font-semibold">
            Let's plan your next event together
          </p>
          <button className="btn bg-primary-color border-none text-white capitalize text-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
