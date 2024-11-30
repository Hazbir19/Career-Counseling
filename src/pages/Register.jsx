import React, { useContext, useState } from "react";
import UseTitleHook from "../Hooks/UseTitleHook";
import { MainContext } from "../Context/MainContext";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  UseTitleHook("Register");
  const [hide, setHide] = useState(false);

  const { handleEmailSignIn, HandleGoogleSignIn, validatePassword } =
    useContext(MainContext);
  const HandleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    const photo = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const validPassword = validatePassword(password);
    if (validPassword) {
      toast.error(validPassword);
      return;
    }
    handleEmailSignIn(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          toast.success("SignIn SuccessFully");
        });
      })
      .catch((error) => {
        toast.error("This Id Already Exist");
      });
  };
  return (
    <>
      <div className=" bg-base-200 min-h-[50rem] hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={HandleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="UserName"
                  className="input input-bordered"
                  required
                  name="username"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo Url"
                  className="input input-bordered"
                  required
                  name="photoUrl"
                />
              </div>
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
                  <div className="relative top-[3rem] text-2xl right-2">
                    {hide ? (
                      <FaRegEye
                        onClick={() => {
                          setHide(!hide);
                        }}
                      />
                    ) : (
                      <FaRegEyeSlash
                        onClick={() => {
                          setHide(!hide);
                        }}
                      />
                    )}
                  </div>
                </label>
                <input
                  type={hide ? "password" : "text"}
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>

              <span>
                You have already Account?
                <Link to={"/Login"} className="fon-bold text-pink-400 text-lg">
                  Login
                </Link>
              </span>
            </form>
            <div className="form-control -mt-[2rem] p-[2rem]">
              <img
                src="https://i.ibb.co.com/LPZsMq5/Google-Icons-09-512-1.png"
                alt=""
                className="relative top-[2.5rem] w-[2rem] ml-2"
              />
              <button onClick={HandleGoogleSignIn} className="btn ">
                SignIn With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
