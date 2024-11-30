import React, { useContext } from "react";
import UseTitleHook from "../Hooks/UseTitleHook";
import { MainContext } from "../Context/MainContext";
import HomeBnner from "../assets/HomeBanner.png";
import SwiSlider from "../Components/SwiSlider";
import { useLoaderData } from "react-router-dom";
import Service from "../Components/Service";

const Home = () => {
  const { name } = useContext(MainContext);
  const services = useLoaderData();

  UseTitleHook("Home");
  return (
    <>
      <div
        className="hero lg:min-h-[50rem] md:min-h-[30rem"
        style={{ backgroundImage: `url(${HomeBnner})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 lg:text-5xl font-bold text-2xl md:text-3xl">
              Empowering Your Future: Comprehensive Career Counseling Solutions
            </h1>
            <p className="mb-5 text-sm">
              Discover the ultimate platform for career guidance tailored to
              your unique skills and aspirations. Our Career Counseling website
              connects you with expert advice, personalized recommendations, and
              resources to navigate your career journey. From exploring options
              to achieving your dream job, we’re here to help you every step of
              the way.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 mt-[5rem] p-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="mx-5">
            <h1 className="text-center p-2 lg:text-3xl  md:text-2xl text-xl font-bold">
              About Us
            </h1>
            <p className="text-center">
              Our Career Counseling website is dedicated to helping individuals
              unlock their potential and achieve career success. We provide
              expert guidance, personalized insights, and resources to help you
              make informed decisions about your career path. Whether you're a
              student exploring options or a professional seeking growth, our
              platform is designed to support your journey toward a fulfilling
              future.
            </p>
          </div>
        </div>
      </div>
      {/* Silder Section */}
      <div className="mx-5">
        <SwiSlider></SwiSlider>
      </div>
      <div className="bg-white p-24 ">
        <h1 className="text-3xl text-center font-bold">Our Services</h1>
      </div>
      <div className="p-12 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
      <div className="p-12 max-w-screen-2xl mx-auto">
        <div>
          <h1 className="text-3xl text-center font-bold">Our Team</h1>
          <div className="flex justify-around my-24">
            <div className="card bg-white rounded-lg shadow-lg p-5">
              <div>
                <img
                  src="https://i.ibb.co.com/xYfVFbL/Teacher-1.jpg"
                  alt=""
                  className="w-[200px] h-[200px] rounded-full mx-auto"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-center">Karim </h1>
                <p className="text-lg text-center">Senior Officer</p>
              </div>
            </div>
            <div className="card bg-white rounded-lg shadow-lg">
              <div className="mx-5">
                <img
                  src="https://i.ibb.co.com/2jBmxqj/Teacher-2.jpg"
                  alt=""
                  className="w-[200px] h-[200px] rounded-full mx-auto"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-center">Alish</h1>
                <p className="text-lg text-center">Manager</p>
              </div>
            </div>
            <div className="card bg-white rounded-lg shadow-lg">
              <div>
                <img
                  src="https://i.ibb.co.com/z8CDQ3r/Teacher-4.jpg"
                  alt=""
                  className="w-[200px] h-[200px] rounded-full mx-auto"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-center">Roy</h1>
                <p className="text-lg text-center">Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
