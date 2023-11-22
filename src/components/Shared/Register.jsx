import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, profileUpdate } = useContext(Context);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const imgUrl = e.target.imgUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");
    if (password.length < 6) {
      setError("Password can not less than 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password don't have a capital letters");
      return;
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
      setError("Password don't have a special characters");
      return;
    }
    createUser(email, password, name, imgUrl).catch((error) => {
      setError(error.message);
    });
  };
  return (
    <div className="max-w-6xl mx-auto my-10 ">
      <div className=" flex-col justify-center gap-y-6">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold text-center mb-6 text-black">
            Please Register
          </h1>
        </div>
        <div className="card mx-auto w-full max-w-md shadow-2xl ">
          <form onSubmit={handleRegister} className="card-body ">
            <div className="form-control ">
              <input
                type="name"
                name="name"
                placeholder="Your Name"
                className="input bg-transparent py-0 border-b-2 text-md border-b-[#eceef1] border-t-0 border-x-0 mb-4 rounded-none  outline-none focus:outline-none"
                required
              />
              <input
                type="text"
                name="imgUrl"
                placeholder="Your PhotoUrl"
                className="input bg-transparent py-0 border-b-2 text-md border-b-[#eceef1] border-t-0 border-x-0 mb-4 rounded-none  outline-none focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input bg-transparent py-0 border-b-2 text-md border-b-[#eceef1] border-t-0 border-x-0 mb-4 rounded-none  outline-none focus:outline-none"
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Your Password"
                className="input bg-transparent py-0 border-b-2 text-md border-b-[#eceef1] border-t-0 border-x-0 mb-4 rounded-none  outline-none focus:outline-none"
                required
              />
              <p className="text-red-600">{error}</p>
            </div>

            <div className="form-control mt-6 ">
              <button className="btn bg-primary-color border-none text-white capitalize text-lg hover:bg-secondary-color">
                Sign Up
              </button>
            </div>

            <p className="text-black text-center">
              Already have an account? Please{" "}
              <Link to="/login" className="link link-primary">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
