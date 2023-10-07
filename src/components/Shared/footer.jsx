const Footer = () => {
  return (
    <div>
      <footer className="footer py-10 max-w-6xl mx-auto flex justify-between    text-base-content ">
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
            Explore, plan, and celebrate your special day. Create unforgettable
            memories on our website.
          </p>
        </aside>
        <nav className="text-black">
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="text-black">
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="text-black">
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
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
