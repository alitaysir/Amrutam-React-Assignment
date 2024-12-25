import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import JobListing from "./JobListing";
import { AppContext } from "../context/AppContext";

const Selectfilter = () => {
  const sex = ["Male", "Female"];
  const fees = [500, 600, 700, 800, 1000,1200,1500,2000];
  const expertise = [
    "Cardiologist",
    "Orthopedic",
    "Dermatologist",
    "Pediatrician",
    "Gynecologist",
    "Neurologist",
    "Psychiatrist",
  ];
  const languages = [
    "Hindi",
    "English",
    "Kannada",
    "Tamil",
    "Telugu",
    "Bengali",
    "Marathi",
  ];

  const { otherfilters, setotherfilters, setisapplyfilter } =
    useContext(AppContext);

  const [sexselect, setsexselect] = useState("");
  const [expertiseselect, setexpertiseselect] = useState("");
  const [langselect, setlangselect] = useState("");
  const [feesselect, setfeesselect] = useState("");

  const submitfilter = () => {
    setotherfilters({
      sex: sexselect,
      fees: feesselect,
      expertise: expertiseselect,
      language: langselect,
    });
    setisapplyfilter(true);
  };

  return (
    <motion.div
      className="flex gap-5"
  
    >
      <motion.div
        className="px-12 flex flex-row items-center gap-8"

      >
        {/* Gender Select */}
        <motion.select
          value={sexselect}
          onChange={(e) => setsexselect(e.target.value)}
          className="border p-2 rounded bg-gray-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <option value="" disabled>
            Gender
          </option>
          {sex.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </motion.select>

        {/* Expertise Select */}
        <motion.select
          value={expertiseselect}
          onChange={(e) => setexpertiseselect(e.target.value)}
          className="border p-2 rounded bg-gray-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <option value="" disabled>
            Expertise
          </option>
          {expertise.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </motion.select>

        {/* Language Select */}
        <motion.select
          value={langselect}
          onChange={(e) => setlangselect(e.target.value)}
          className="border p-2 rounded bg-gray-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <option value="" disabled>
            Languages
          </option>
          {languages.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </motion.select>

        {/* Fees Select */}
        <motion.select
          value={feesselect}
          onChange={(e) => setfeesselect(e.target.value)}
          className="border p-2 rounded bg-gray-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <option value="" disabled>
            Fees
          </option>
          {fees.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </motion.select>

        {/* Apply Button */}
        <motion.button
          className="border bg-gray-600 rounded px-3 py-1 text-center text-white"
          onClick={submitfilter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Apply
        </motion.button>
      </motion.div>

      <JobListing />
    </motion.div>
  );
};

export default Selectfilter;
