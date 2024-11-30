import React, { useContext } from "react";
import { MainContext } from "../Context/MainContext";

const Apointment = () => {
  const { appointment } = useContext(MainContext);
  return (
    <>
      <div className="max-w-screen-lg mx-auto p-5">
        <h1 className="text-2xl font-bold mb-5">My Appointments</h1>
        {appointment.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {appointment.map((appointment, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-4 rounded-lg border"
              >
                <h2 className="text-xl font-bold">{appointment.serviceName}</h2>
                <p>
                  <strong>Counselor:</strong> {appointment.counselor}
                </p>
                <p>
                  <strong>Booked On:</strong> {appointment.date}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>No appointments booked yet!</p>
        )}
      </div>
    </>
  );
};

export default Apointment;
