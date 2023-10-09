const About = () => {
  return (
    <div className="mx-2 lg:mx-0">
      <div className="max-w-6xl mx-auto ">
        <div className="text-center md:max-w-3xl md:mx-auto mt-16 mb-10 ">
          <h2 className="md:text-5xl text-black font-semibold  font-section-title2">
            About Us
          </h2>

          <p className="text-black text-sm lg:text-xl mt-2">
            Discover the heart behind Wedlock. We're passionate wedding
            enthusiasts, dedicated to turning dreams into reality. Meet our
            team, and trust us to make your special day truly unforgettable.
          </p>
        </div>
        <div className="stats  lg:py-6 stats-vertical lg:stats-horizontal shadow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="stat text-center">
            <div className="stat-value text-white">1600+</div>
            <div className="stat-desc text-lg text-white font-semibold">
              Happy Couples
            </div>
          </div>

          <div className="stat text-center">
            <div className="stat-value text-white">1700+</div>
            <div className="stat-desc text-lg text-white font-semibold">
              Wedding
            </div>
          </div>

          <div className="stat text-center">
            <div className="stat-value text-white">740+</div>
            <div className="stat-desc text-lg text-white font-semibold">
              Decoration
            </div>
          </div>
          <div className="stat text-center">
            <div className="stat-value text-white">650+</div>
            <div className="stat-desc text-lg text-white">Locations</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
