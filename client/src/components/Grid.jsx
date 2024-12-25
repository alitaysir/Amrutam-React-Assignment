import React, { useContext, useEffect, useState } from 'react';
import DocCard from './DocCard';
import { AppContext } from '../context/AppContext';

const Grid = () => {
  const { searchFilter, isSearched, doctors,isapplyfilter, otherfilters } = useContext(AppContext);
  const [doctordata, setdoctordata] = useState(doctors);

  const getdoctors = () => {
    if (isSearched || isapplyfilter) {
      const tempdoctors = doctors.filter((item) =>
        item.location.toLowerCase().includes(searchFilter.location.toLowerCase() || "") &&
        item.expertise.some((expertise) =>
          expertise.toLowerCase().includes(searchFilter.title.toLowerCase() || "")
        ) &&
        item.gender.includes(otherfilters.sex || "") &&
        item.fees.includes(otherfilters.fees || "") 
      );
      setdoctordata(tempdoctors);
    } else {
      setdoctordata(doctors); // Reset to the full list if not searched
    }
  };

  useEffect(() => {
    getdoctors();
  }, [searchFilter, isSearched, doctors, isapplyfilter, otherfilters]); // Add relevant dependencies to re-run when they change

  return (
    <section className="mt-4 mx-12 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {doctordata && doctordata.length > 0 ? (
           
          doctordata.map((doc, index) => (
            <DocCard key={index} doc={doc} className="w-full max-w-s p-4" />
          ))
        ) : (
          <p className='text-2xl font-semibold text-center'>No doctors available at the moment.</p> // Fallback message if no data is available
        )}
      </div>
    </section>
  );
};

export default Grid;
