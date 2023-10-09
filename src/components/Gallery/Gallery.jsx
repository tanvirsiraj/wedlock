const Gallery = () => {
  return (
    <div className="max-w-6xl mx-auto mb-8">
      <div className="text-center md:max-w-3xl md:mx-auto mt-16 mb-10 ">
        <h2 className="md:text-5xl text-black font-semibold  font-section-title2">
          Our Gallery
        </h2>

        <p className="text-black text-sm lg:text-xl mt-2">
          Wedlock's gallery offers a glimpse into love stories we've helped
          craft. Dive into enchanting moments, beautiful decor, and radiant
          couples, inspiring your own dream wedding. Explore the magic within
          our curated collection.
        </p>
      </div>
      <div className="mx-2 lg:mx-0 grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="card  glass" data-aos="zoom-in-up">
          <figure>
            <img
              className="w-full h-56"
              src="https://i.ibb.co/MfDrC7c/jonathan-borba-g3o-EF-BNXw-E-unsplash.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className=" text-center text-black font-semibold text-lg">
              Harry & Lisa
            </h2>
          </div>
        </div>
        <div className="card  glass" data-aos="zoom-in-up">
          <figure>
            <img
              className="w-full h-56"
              src="https://i.ibb.co/x5xqwZN/asdrubal-luna-72v-Xl-OXbp6-E-unsplash.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className=" text-center text-black font-semibold text-lg">
              Karlos & Jenny
            </h2>
          </div>
        </div>
        <div className="card  glass" data-aos="zoom-in-up">
          <figure>
            <img
              className="w-full h-56"
              src="https://i.ibb.co/rGnWbfr/eugenivy-now-1-Bs2s-Z9f-D2-Q-unsplash.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className=" text-center text-black font-semibold text-lg">
              Dandy & Salma
            </h2>
          </div>
        </div>
        <div className="card  glass" data-aos="zoom-in-up">
          <figure>
            <img
              className="w-full h-56"
              src="https://i.ibb.co/M72rGx8/jonathan-borba-mvas-Dn-G41is-unsplash.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className=" text-center text-black font-semibold text-lg">
              Nakib & Anika
            </h2>
          </div>
        </div>
        <div className="card  glass" data-aos="zoom-in-up">
          <figure>
            <img
              className="w-full h-56"
              src="https://i.ibb.co/fGCGp1K/jonathan-borba-a-C5-EFhq7-Fs-unsplash.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className=" text-center text-black font-semibold text-lg">
              Joye & Pushpo
            </h2>
          </div>
        </div>
        <div className="card  glass" data-aos="zoom-in-up">
          <figure>
            <img
              className="w-full h-56"
              src="https://i.ibb.co/26tnyNz/nikita-shirokov-q-Ggjalog-Cd-E-unsplash.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className=" text-center text-black font-semibold text-lg">
              Jekky & Sara
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
