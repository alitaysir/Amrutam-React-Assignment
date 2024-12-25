
import logo from "./logo.svg";
import doctor1 from "./doctor1.jpg"
import doctor2 from "./doctor2.jpg"
import doctor3 from "./doctor3.jpg"
import doctor4 from "./doc4.jpg"
import doctor5 from "./doc5.jpg"
import doctor6 from "./doc6.jpg"
import doctor7 from "./doc7.jpg"

import search_icon from "./search_icon.svg";
import company_icon from "./company_icon.svg";
import microsoft_logo from "./microsoft_logo.svg";
import walmart_logo from "./walmart_logo.svg";
import accenture_logo from "./accenture_logo.png";
import profile_img from "./profile_img.png";
import app_main_img from "./app_main_img.png";
import cross_icon from './cross_icon.svg';
import location_icon from './location_icon.svg';
import money_icon from './money_icon.svg';
import suitcase_icon from './suitcase_icon.svg';
import person_icon from './person_icon.svg';
import upload_area from './upload_area.svg';
import resume_selected from './resume_selected.svg';
import resume_not_selected from './resume_not_selected.svg';
import play_store from './play_store.svg';
import app_store from './app_store.svg';
import back_arrow_icon from './back_arrow_icon.svg';
import left_arrow_icon from './left_arrow_icon.svg';
import right_arrow_icon from './right_arrow_icon.svg';
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import home_icon from './home_icon.svg'
import add_icon from './add_icon.svg'
import profile_upload_icon from './profile_upload_icon.svg'
import person_tick_icon from './person_tick_icon.svg'
import resume_download_icon from './resume_download_icon.svg'
import delete_icon from './delete_icon.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import samsung_logo from './samsung_logo.png'
import adobe_logo from './adobe_logo.png'
import amazon_logo from './amazon_logo.png'

export const assets = {
    doctor1,
    doctor2,
    doctor3,
    doctor4,
    doctor5,
    doctor6,
    doctor7,
    logo,
    search_icon,
    cross_icon,
    upload_area,
    company_icon,
    resume_not_selected,
    resume_selected,
    microsoft_logo,
    walmart_logo,
    accenture_logo,
    app_main_img,
    play_store,
    app_store,
    back_arrow_icon,
    left_arrow_icon,
    right_arrow_icon,
    location_icon,
    money_icon,
    suitcase_icon,
    person_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    home_icon,
    add_icon,
    person_tick_icon,
    resume_download_icon,
    profile_img,
    delete_icon,
    profile_upload_icon,
    email_icon,
    lock_icon,
    samsung_logo,
    adobe_logo,
    amazon_logo
}



export const doctorsdata= [
        {
          _id:1,  
          name: "Dr. Sarah Johnson",
          gender: "Female",
          pic:doctor4,
          expertise: ["Cardiologist", "Heart Specialist"],
          fees: 1500,
          languages: ["English", "Hindi"],
          location: "Bangalore, Karnataka",
          about:
            "Dr. Sarah Johnson is a highly experienced cardiologist with a passion for providing the best heart care. She has received numerous accolades for her contributions to cardiovascular health.",
          concernsITreat: ["High Blood Pressure", "Heart Attack", "Cholesterol Management"],
          workExperience: "10 years at Apollo Hospitals",
        },
        {
          name: "Dr. Arjun Mehta",
          _id:2,  
          gender: "Male",
          pic:doctor5,
          expertise: ["Orthopedic", "Bone Specialist"],
          fees: "Rs.1000",
          languages: ["English", "Kannada", "Hindi"],
          location: "Mumbai, Maharashtra",
          about:
            "Dr. Arjun Mehta specializes in orthopedic surgeries and joint replacements. His goal is to help patients lead pain-free lives.",
          concernsITreat: ["Arthritis", "Fractures", "Back Pain"],
          workExperience: "8 years at Fortis Hospitals",
        },
        {
          name: "Dr. Priya Sharma",
          _id:3,  
          gender: "Female",
          pic:doctor7,
          expertise: ["Dermatologist", "Skin Specialist"],
          fees: "Rs.800",
          languages: ["English", "Telugu"],
          location: "Hyderabad, Telangana",
          about:
            "Dr. Priya Sharma has a keen interest in treating skin disorders and helping patients achieve healthy, glowing skin.",
          concernsITreat: ["Acne", "Eczema", "Psoriasis"],
          workExperience: "6 years at Kaya Skin Clinic",
        },
        {
          name: "Dr. Rohit Aggarwal",
          _id:4,  
          gender: "Male",
          pic:doctor4,
          expertise: ["Pediatrician", "Child Specialist"],
          fees: "Rs.700",
          languages: ["English", "Hindi", "Punjabi"],
          location: "Chandigarh, Punjab",
          about:
            "Dr. Rohit Aggarwal is dedicated to providing quality healthcare to children. He is known for his friendly demeanor with kids.",
          concernsITreat: ["Fever", "Childhood Vaccinations", "Growth Issues"],
          workExperience: "9 years at Max Healthcare",
        },
        {
          name: "Dr. Anjali Gupta",
          _id:5,
          gender: "Female",
          pic:doctor7,
          expertise: ["Gynecologist", "Obstetrician"],
          fees: "Rs.1200",
          languages: ["English", "Hindi", "Marathi"],
          location: "Pune, Maharashtra",
          about:
            "Dr. Anjali Gupta is a compassionate gynecologist who helps women navigate their reproductive health and well-being.",
          concernsITreat: ["Pregnancy Care", "PCOS", "Menstrual Disorders"],
          workExperience: "12 years at Ruby Clinic",
        },
        {
          name: "Dr. Rajesh Kapoor",
          _id:6,  
          gender: "Male",
          pic:doctor6,
          expertise: ["Neurologist", "Brain Specialist"],
          fees: "Rs.2000",
          languages: ["English", "Tamil"],
          location: "Chennai, Tamil Nadu",
          about:
            "Dr. Rajesh Kapoor is an expert in treating complex neurological disorders and ensuring patients receive top-notch care.",
          concernsITreat: ["Migraine", "Epilepsy", "Stroke"],
          workExperience: "15 years at Apollo Hospitals",
        },
        {
          name: "Dr. Nisha Verma",
          _id:7,  
          gender: "Female",
          pic:doctor7,
          expertise: ["Psychiatrist", "Mental Health Specialist"],
          fees: "Rs.1000",
          languages: ["English", "Bengali", "Hindi"],
          location: "Kolkata, West Bengal",
          about:
            "Dr. Nisha Verma focuses on helping patients overcome mental health challenges with empathy and care.",
          concernsITreat: ["Depression", "Anxiety", "Bipolar Disorder"],
          workExperience: "7 years at KMS Hopsitals",
        },
        {
            name: "Dr. Arjun Mehta",
            _id:1,  
            gender: "Male",
            pic:doctor5,
            expertise: ["Orthopedic", "Bone Specialist"],
            fees: "Rs.1000",
            languages: ["English", "Kannada", "Hindi"],
            location: "Mumbai, Maharashtra",
            about:
              "Dr. Arjun Mehta specializes in orthopedic surgeries and joint replacements. His goal is to help patients lead pain-free lives.",
            concernsITreat: ["Arthritis", "Fractures", "Back Pain"],
            workExperience: "8 years at Fortis Hospitals.",
          },
      
];
