import React, { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const Hero = () => {
  const { setsearchFilter, setisSearched } = useContext(AppContext);

  const locationRef = useRef(null);
  const titleRef = useRef(null);

  const onSearch = () => {
    setsearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
    setisSearched(true);
  };

  return (
    <motion.div
      className="bg-green-50 py-14 flex flex-col items-center justify-center gap-5"
    >
      {/* Animated Heading */}
      <motion.h1
        className="text-3xl tracking-wider font-medium"
        initial={{ opacity: 0.2, y:100 }}
        // animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.1 }}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}

      >
        Find Expert Doctors For An In-Clinic Session Here
      </motion.h1>

      {/* Animated Search Inputs */}
      <motion.div
        className="flex items-center justify-center gap-3"
  
      >
        {/* Location Input */}
        <motion.div
          className="flex items-center bg-white px-4 rounded-2xl py-0.5"
          whileHover={{ scale: 1.05 }}
        >
          <img src={assets.location_icon} alt="Location Icon" />
          <input
            type="text"
            placeholder="Search Location"
            ref={locationRef}
            className="max-sm:text-xs p-2 rounded outline-none w-3/4"
          />
        </motion.div>

        {/* Title Input */}
        <motion.div
          className="flex items-center bg-white px-4 rounded-2xl py-0.5"
          whileHover={{ scale: 1.05 }}
        >
          <input
            type="text"
            placeholder="Doctor, clinic name"
            ref={titleRef}
            className="max-sm:text-xs p-2 rounded outline-none w-full"
          />
        </motion.div>

        {/* Search Button */}
        <motion.button
          className="bg-green-700 text-white px-4 py-1 rounded-lg hover:bg-green-600"
          onClick={onSearch}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Search
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
