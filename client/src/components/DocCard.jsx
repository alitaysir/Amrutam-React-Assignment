import React from 'react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const DocCard = ({ doc }) => {
  const navigate=useNavigate();
  return (
    <motion.div className="rounded-lg bg-gradient-to-l from-yellow-50 to-green-50 p-4 shadow-xl hover:shadow-2xl transition-all duration-300 w-full cursor-pointer"  whileHover={{ scale: 1.05 }}>
      <div className="flex flex-col items-center justify-center gap-1">
        { doc.gender==="Female" ?
        <motion.img
          src={assets.doctor7}
          alt="Doctor"
          className="w-32 h-32 rounded-full object-cover border border-green-500"
          whileHover={{ scale: 1.1 }}
        /> : 
        <motion.img
        src={assets.doctor6}
          alt="Doctor"
          className="w-32 h-32 rounded-full object-cover border border-green-500"
          whileHover={{ scale: 1.1 }}
        />  }
        <h2 className="text-xl font-bold text-black">{doc.name}</h2>
        <h5 className="text-xs text-gray-500">{doc.expertise.join(', ')}</h5>
        <h5 className="text-xs text-gray-500">{doc.workExperience}</h5>
        <h5 className="text-xs text-gray-500">Speaks: {doc.languages.join(', ')}</h5>
        
        <div className="flex flex-row gap-3 justify-center mt-2">
          <div className="text-xs border border-green-700 rounded-lg px-3 py-1 text-center w-32">
            Video Consultation
            <div className="text-xs text-green-700 font-semibold">{doc.fees}</div>
          </div>
          <div className="text-xs border border-green-700 rounded-lg px-3 py-1 text-center w-32">
            Chat Consultation
            <div className="text-xs text-green-700 font-semibold">Free</div>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-2 mt-3">
          <motion.button className="text-center bg-white text-green-700 border-2 border-green-700 px-5 py-1 rounded-md shadow-md hover:bg-green-700 hover:text-white transition-all duration-300 w-full text-sm"
            whileHover={{ scale: 1.1 }}
            onClick={() => navigate(`/doctors/${doc._id}`)}
          >
            View Profile
          </motion.button>
          <button className="text-center text-white bg-green-700 px-5 py-1 rounded-md shadow-md hover:bg-green-800 transition-all duration-300 w-full text-sm">
            Book a consultation
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DocCard;
