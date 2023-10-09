import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser, signInWithGoogle, user } = useContext(Context);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // sign in user

    signInUser(email, password)
      .then((result) => {
        // console.log(result.user);
        e.target.reset();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User Login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    console.log("google sign in");
    signInWithGoogle()
      .then((result) => {
        // console.log(result.user);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User Login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="max-w-6xl mx-auto my-10 ">
      <div className=" flex-col justify-center gap-y-6">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold text-center mb-6 text-black">
            Please Login
          </h1>
        </div>
        <div className="card mx-auto w-full max-w-md shadow-2xl ">
          <form onSubmit={handleLogin} className="card-body ">
            <div className="form-control ">
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
            </div>

            <div className="form-control mt-6 ">
              <button className="btn bg-primary-color border-none text-white capitalize text-lg hover:bg-secondary-color">
                Login
              </button>
            </div>
            <p className="text-red-600">{error}</p>
            <div className="divider text-lg font-semibold">OR login with</div>
            <button
              onClick={handleGoogleSignIn}
              className="btn bg-transparent bg:hover capitalize text-lg text-black hover:bg-primary-color border-2 border-[#e6e3e1] hover:border-white hover:text-white"
            >
              <FcGoogle /> <span>Google</span>
            </button>
            <p className="text-black text-center">
              New to this website? Please{" "}
              <Link to="/register" className="link link-primary">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
