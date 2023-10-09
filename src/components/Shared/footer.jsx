const Footer = () => {
  return (
    <div className="">
      <div className="mx-2 lg:mx-0">
        <footer className="footer py-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 text-base-content ">
          <aside>
            <a
              href="#"
              className="font-semibold font-logo text-2xl lg:text-3xl text-primary-color"
            >
              WedLock
            </a>
            <p>
              Embark on your love journey with us.
              <br />
              Explore, plan, and celebrate your special day. Create
              unforgettable memories on our website.
            </p>
          </aside>
          <div className="lg:flex lg:justify-between lg:gap-28">
            {" "}
            <nav className="text-black mb-4 lg:mb-0">
              <header className="footer-title">Services</header>
              <a className="link link-hover ">Branding</a>
              <br />
              <a className="link link-hover">Design</a>
              <br />
              <a className="link link-hover">Marketing</a>
              <br />
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className="text-black mb-4 lg:mb-0">
              <header className="footer-title">Company</header>

              <a className="link link-hover">About us</a>
              <br />
              <a className="link link-hover">Contact</a>
              <br />
              <a className="link link-hover">Jobs</a>
              <br />
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav className="text-black mb-4 lg:mb-0">
              <header className="footer-title">Legal</header>

              <a className="link link-hover">Terms of use</a>
              <br />
              <a className="link link-hover">Privacy policy</a>
              <br />
              <a className="link link-hover">Cookie policy</a>
            </nav>
          </div>
        </footer>
      </div>
      <footer className="footer footer-center p-4 bg-primary-color text-base-content">
        <aside>
          <p className="text-white text-lg font-semibold">
            Copyright © 2023 - All right reserved by{" "}
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
