import React, { useContext } from "react";

import { MainContext } from "../Context/MainContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const { HandleLogIn, HandleGoogleSignIn } = useContext(MainContext);
  const HandleSubmitBtn = (e) => {
    e.preventDefault();
    HandleGoogleSignIn()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const Handlegoogle = () => {
    HandleLogIn(email, password)
      .then((result) => {
        toast.success("Your Logged In");
        Navigate("/");
      })
      .catch((error) => {
        toast.error("You email and password invaild ");
      });
    return (
      <>
        <div
          className="hero bg-base-200 min-h-[50rem]"
          onSubmit={HandleSubmitBtn}
        >
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                    name="email"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <span>
                  Are you new in this website?
                  <Link
                    to={"/register"}
                    className="fon-bold text-pink-400 text-lg"
                  >
                    Register
                  </Link>
                </span>
              </form>
              <div className="form-control -mt-[2rem] p-[2rem]">
                <img
                  src="https://i.ibb.co.com/LPZsMq5/Google-Icons-09-512-1.png"
                  alt=""
                  className="relative top-[2.5rem] w-[2rem] ml-2"
                />
                <button className="btn ">SignIn With Google</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
};

export default Login;
