import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { serviceName, category, pricing, counselor, image, id } = service;
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-5 ">
        <div className="flex justify-center my-5">
          <img src={image} alt="" className="w-[20rem] h-[15rem] rounded-lg" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="lg:text-2xl text-xl text-center my-2 font-bold">
            {serviceName}
          </h2>
          <p
            className={`${
              category == "Online" || "Group"
                ? "bg-green-500 text-white  p-2 rounded-lg text-center"
                : "bg-red-500 text-white  p-2 rounded-lg text-center"
            }`}
          >
            {category}
          </p>
          <p className="text-xl text-center my-2">{pricing}</p>
          <p className="text-xl text-center mt-2">{counselor}</p>
        </div>
        <div className="flex justify-center my-2">
          <button className="bg-gradient-to-t from-pink-400 to-amber-300/80 bg-opacity-45 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-xl">
            <Link to={`/services/${id}`} className="text-white">
              Learn More
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Service;
