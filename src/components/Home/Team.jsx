import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";
import p4 from "../../assets/p4.jpg";
import p5 from "../../assets/p5.jpg";
import p6 from "../../assets/p6.jpg";
const Team = () => {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="text-center md:max-w-3xl md:mx-auto mt-16 mb-10 ">
        <h2 className="md:text-5xl text-black font-semibold  font-section-title2">
          Our Team
        </h2>

        <p className="text-black text-sm lg:text-xl mt-2">
          Our wedding management team is a dedicated, creative, and professional
          group of individuals who work seamlessly together to create memorable
          and joyful celebrations for our clients.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-28 lg:gap-y-12 mx-2 lg:mx-0">
        <div data-aos="zoom-in-up">
          <div className="avatar">
            <div className="rounded-full ring ring-[#9ACCC9] ring-offset-[#9ACCC9] ring-offset-2">
              <img src={p1} />
            </div>
          </div>
          <div className="text-center mt-2">
            <h2 className="text-black font-bold text-lg">Tanvir Bin Siraj</h2>
            <p className=" text-primary-color font-semibold text-base">
              CEO/FOUNDER
            </p>
          </div>
        </div>
        <div data-aos="zoom-in-up">
          <div className="avatar">
            <div className="rounded-full ring ring-[#9ACCC9] ring-offset-[#9ACCC9] ring-offset-2">
              <img src={p2} />
            </div>
          </div>
          <div className="text-center mt-2">
            <h2 className="text-black font-bold text-lg">Jane Watson</h2>
            <p className=" text-primary-color font-semibold ">Manager</p>
          </div>
        </div>
        <div data-aos="zoom-in-up">
          <div className="avatar">
            <div className="rounded-full ring ring-[#9ACCC9] ring-offset-[#9ACCC9] ring-offset-2">
              <img src={p3} />
            </div>
          </div>
          <div className="text-center mt-2">
            <h2 className="text-black font-bold text-lg">Ema Pink</h2>
            <p className=" text-primary-color font-semibold">Designer</p>
          </div>
        </div>
        <div data-aos="zoom-in-up">
          <div className="avatar">
            <div className="rounded-full ring ring-[#9ACCC9] ring-offset-[#9ACCC9] ring-offset-2">
              <img src={p4} />
            </div>
          </div>
          <div className="text-center mt-2">
            <h2 className="text-black font-bold text-lg">Jannifer Stinson</h2>
            <p className=" text-primary-color font-semibold">STAFF</p>
          </div>
        </div>
        <div data-aos="zoom-in-up">
          <div className="avatar">
            <div className="rounded-full ring ring-[#9ACCC9] ring-offset-[#9ACCC9] ring-offset-2">
              <img src={p5} />
            </div>
          </div>
          <div className="text-center mt-2">
            <h2 className="text-black font-bold text-lg">Robin Karlos</h2>
            <p className=" text-primary-color font-semibold">STAFF</p>
          </div>
        </div>
        <div data-aos="zoom-in-up">
          <div className="avatar">
            <div className="rounded-full ring ring-[#9ACCC9] ring-offset-[#9ACCC9] ring-offset-2">
              <img src={p6} />
            </div>
          </div>
          <div className="text-center mt-2">
            <h2 className="text-black font-bold text-lg">Huddy Tasbi</h2>
            <p className=" text-primary-color font-semibold">STAFF</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
