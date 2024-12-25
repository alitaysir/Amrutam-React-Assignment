import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Docdata = () => {
  const { id } = useParams();
  const { doctors } = useContext(AppContext);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const temp = doctors.filter(item => item._id === parseInt(id)); // Ensure type match
    if (temp.length !== 0) {
      setData(temp[0]);
    }
    console.log(temp[0]);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="p-10 bg-gradient-to-t from-yellow-50 to-green-50 min-h-screen">
      {data ? (
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6">
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Doctor Image */}
              <motion.img
                src={data.gender === "Female" ? assets.doctor7 : assets.doctor6}
                alt="Doctor"
                className="w-32 h-32 rounded-full object-cover border border-green-500"
                whileHover={{ scale: 1.1 }}
              />
              <div>
                <h1 className="text-2xl font-bold">{data.name}</h1>
                <p className="text-gray-600">{data.expertise.join(", ")}</p>
                <p className="text-yellow-500 text-sm font-semibold">
                  4.5 ⭐ Rating
                </p>
              </div>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
              Book Appointment
            </button>
          </div>

          {/* About Section */}
          <div className="mt-6">
            <h2 className="text-lg font-bold">A Little About Me</h2>
            <p className="text-gray-600 mt-2">{data.about}</p>
            <div className="mt-4 flex gap-2">
              {data.languages.map((language, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>

          {/* Specialization */}
          <div className="mt-6">
            <h2 className="text-lg font-bold">I Specialize In</h2>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.expertise.map((item, index) => (
                <div
                  key={index}
                  className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-center font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Concerns */}
          <div className="mt-6">
            <h2 className="text-lg font-bold">The Concerns I Treat</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {data.concernsITreat.map((concern, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {concern}
                </span>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="mt-6">
            <h2 className="text-lg font-bold">My Work Experience</h2>
            <p className="mt-2 text-gray-600">{data.workExperience}</p>
          </div>

          {/* Appointment Fee */}
          <div className="mt-6">
            <h2 className="text-lg font-bold">Appointment Fee</h2>
            <p className="text-green-700 font-bold text-lg">{data.fees}</p>
          </div>
        </div>
      ) : (
        <p>Loading doctor data...</p>
      )}
    </div>
  );
};

export default Docdata;
