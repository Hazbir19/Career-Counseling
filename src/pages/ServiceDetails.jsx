import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MainContext } from "../Context/MainContext";
import toast from "react-hot-toast";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, handleAddApointment } = useContext(MainContext);
  const [services, setServices] = useState(null);
  const [comment, setComment] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    fetch("/Servics.json")
      .then((res) => res.json())
      .then((data) =>
        setServices(data.find((item) => item.id === parseInt(id)))
      );
  }, [id]);
  const hadleComment = () => {
    if (newComment.trim()) {
      setComment([...comment, newComment]);
      setNewComment("");
    }
  };
  if (!user) {
    navigate("/login");
    return null;
  }
  const makeApointment = () => {
    const details = {
      id: services.id,
      name: services.service,
      counselor: services.counselor,
      date: new Date().toLocaleString(),
    };
    handleAddApointment(details);
    toast.success("Your Appointment is Booked");
    navigate("/Apointment");
    console.log("clicked");
  };

  return (
    <>
      <div className="max-w-screen-lg mx-auto p-5">
        <div className="bg-white shadow-md p-5 rounded-lg">
          <img
            src={services?.image}
            alt={services?.serviceName}
            className="w-[30rem] h-[20rem] object-cover rounded-lg mx-auto"
          />
          <h1 className="text-2xl font-bold mt-4">{services?.serviceName}</h1>
          <p className="text-lg my-2 "> {services?.description}</p>
          <p className="text-xl my-2 font-bold">
            Counselor:{services?.counselor}
          </p>
          <p className="text-lg my-2 ">Category: {services?.category}</p>
          <p className="text-lg my-2 font-bold">Pricing: {services?.pricing}</p>
          <p className="text-lg my-2 font-bold">Rating: {services?.rating}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            onClick={makeApointment}
          >
            Book Appointment
          </button>
        </div>
        <div className="bg-gray-100 mt-6 p-5 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Comments/Feedback</h2>
          <div>
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write your comment here..."
              className="w-full border p-2 rounded mb-2"
            />
            <button
              onClick={hadleComment}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold">Submitted Comments:</h3>
            {comment.length > 0 ? (
              <ul className="list-disc ml-5 mt-2">
                {comment.map((comment, index) => (
                  <li key={index} className="my-1">
                    {comment}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No comments yet. Be the first to comment!</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
