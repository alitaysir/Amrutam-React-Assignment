import { createContext, useState } from "react";
import { assets } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [searchFilter, setsearchFilter] = useState({
    title: "",
    location: "",
    
  });
   


  const [otherfilters, setotherfilters] = useState({
    sex:"",
    fees:"",
    expertise:"",
    language:""
  })

  const [doctors, setdoctors] = useState([
     {
              _id:1,  
              name: "Dr. Sarah Johnson",
              gender: "Female",
              // pic:assets.doctor4,
              expertise: ["Cardiologist", "Heart Specialist"],
              fees: 1500,
              languages: ["English", "Hindi"],
              location: "Bangalore",
              about:
                "Dr. Sarah Johnson is a highly experienced cardiologist with a passion for providing the best heart care. She has received numerous accolades for her contributions to cardiovascular health.",
              concernsITreat: ["High Blood Pressure", "Heart Attack", "Cholesterol Management"],
              workExperience: "10 years at Apollo Hospitals",
            },
            {
              name: "Dr. Arjun Mehta",
              _id:2,  
              gender: "Male",
              // pic:doctor5,
              expertise: ["Orthopedic", "Bone Specialist"],
              fees: "Rs.1000",
              languages: ["English", "Kannada", "Hindi"],
              location: "Mumbai",
              about:
                "Dr. Arjun Mehta specializes in orthopedic surgeries and joint replacements. His goal is to help patients lead pain-free lives.",
              concernsITreat: ["Arthritis", "Fractures", "Back Pain"],
              workExperience: "8 years at Fortis Hospitals",
            },
            {
              name: "Dr. Priya Sharma",
              _id:3,  
              gender: "Female",
              // pic:doctor7,
              expertise: ["Dermatologist", "Skin Specialist"],
              fees: "Rs.800",
              languages: ["English", "Telugu"],
              location: "Hyderabad",
              about:
                "Dr. Priya Sharma has a keen interest in treating skin disorders and helping patients achieve healthy, glowing skin.",
              concernsITreat: ["Acne", "Eczema", "Psoriasis"],
              workExperience: "6 years at Kaya Skin Clinic",
            },
            {
              name: "Dr. Rohit Aggarwal",
              _id:4,  
              gender: "Male",
              // pic:doctor4,
              expertise: ["Pediatrician", "Child Specialist"],
              fees: "Rs.700",
              languages: ["English", "Hindi", "Punjabi"],
              location: "Bangalore",
              about:
                "Dr. Rohit Aggarwal is dedicated to providing quality healthcare to children. He is known for his friendly demeanor with kids.",
              concernsITreat: ["Fever", "Childhood Vaccinations", "Growth Issues"],
              workExperience: "9 years at Max Healthcare",
            },
            {
              name: "Dr. Anjali Gupta",
              _id:5,
              gender: "Female",
              // pic:doctor7,
              expertise: ["Gynecologist", "Obstetrician"],
              fees: "Rs.1200",
              languages: ["English", "Hindi", "Marathi"],
              location: "Pune",
              about:
                "Dr. Anjali Gupta is a compassionate gynecologist who helps women navigate their reproductive health and well-being.",
              concernsITreat: ["Pregnancy Care", "PCOS", "Menstrual Disorders"],
              workExperience: "12 years at Ruby Clinic",
            },
            {
              name: "Dr. Rajesh Kapoor",
              _id:6,  
              gender: "Male",
              // pic:doctor6,
              expertise: ["Neurologist", "Brain Specialist"],
              fees: "Rs.2000",
              languages: ["English", "Tamil"],
              location: "Chennai",
              about:
                "Dr. Rajesh Kapoor is an expert in treating complex neurological disorders and ensuring patients receive top-notch care.",
              concernsITreat: ["Migraine", "Epilepsy", "Stroke"],
              workExperience: "15 years at Apollo Hospitals",
            },
            {
              name: "Dr. Nisha Verma",
              _id:7,  
              gender: "Female",
              // pic:doctor7,
              expertise: ["Psychiatrist", "Mental Health Specialist"],
              fees: "Rs.1000",
              languages: ["English", "Bengali", "Hindi"],
              location: "Mumbai",
              about:
                "Dr. Nisha Verma focuses on helping patients overcome mental health challenges with empathy and care.",
              concernsITreat: ["Depression", "Anxiety", "Bipolar Disorder"],
              workExperience: "7 years at KMS Hopsitals",
            },
            {
                name: "Dr. Arjun Mehta",
                _id:8,  
                gender: "Male",
                // pic:doctor5,
                expertise: ["Orthopedic", "Bone Specialist"],
                fees: "Rs.1000",
                languages: ["English", "Kannada", "Hindi"],
                location: "Chennai",
                about:
                  "Dr. Arjun Mehta specializes in orthopedic surgeries and joint replacements. His goal is to help patients lead pain-free lives.",
                concernsITreat: ["Arthritis", "Fractures", "Back Pain"],
                workExperience: "8 years at Fortis Hospitals.",
              }
          
  ])

  const [isSearched, setisSearched] = useState(false);
  const [isapplyfilter, setisapplyfilter] = useState(false);


  const value = {
    setsearchFilter,
    setisSearched,
    searchFilter,
    isSearched,
    otherfilters,
    setotherfilters,
    doctors, setdoctors,
    isapplyfilter, setisapplyfilter
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
