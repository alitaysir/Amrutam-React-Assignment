import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div className="bg-yellow-50 py-3 px-10 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Logo and Links */}
        <motion.div className="flex flex-col md:flex-row items-center gap-16 cursor-pointer">
          <motion.h1 className="text-green-700 text-3xl font-semibold tracking-widest"
           whileHover={{ scale: 1.05 }}>
            AMRUTAM
          </motion.h1>
          <motion.div className="flex gap-8 text-l text-green-800">
            <motion.p className="hover:text-green-600"  whileHover={{ scale: 1.05 }}>Home</motion.p>
            <motion.p className="hover:text-green-600"  whileHover={{ scale: 1.05 }}>Find Doctors</motion.p>
            <motion.p className="hover:text-green-600"  whileHover={{ scale: 1.05 }}>About Us</motion.p>
          </motion.div>
        </motion.div>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <motion.button className="px-4 py-1 text-sm border border-green-700 text-green-700 bg-beige-200 rounded hover:bg-green-100"  whileHover={{ scale: 1.05 }}>
            Login
          </motion.button>
          <motion.button className="px-4 py-1 border text-sm border-green-700 text-white bg-green-700 rounded hover:bg-green-600"  whileHover={{ scale: 1.05 }}>
            Sign Up
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
