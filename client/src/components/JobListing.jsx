import React,{useContext} from 'react'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const JobListing = () => {
const { searchFilter, isSearched, setsearchFilter,otherfilters, setotherfilters,isapplyfilter } = useContext(AppContext);  
return (
    <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-10'>
        { (isSearched || isapplyfilter ) && (
            <div>
            {/* {(searchFilter.title!=="" || searchFilter.location!=="") &&  <h2>Current search</h2>} */}
            <div>
            {searchFilter.title && (
                <span className='ml-2.5 inline-flex items-center gap-2.5 bg-blue-200 p-2 rounded '>
                    {searchFilter.title}
                    <img onClick={e=>setsearchFilter(prev=>({...prev,title:""}))} className='cursor-pointer' src={assets.cross_icon} alt="" />
                </span>
            )}
            {searchFilter.location && (
                <span className='ml-2.5 inline-flex items-center gap-2.5 bg-red-200 p-2 rounded'>
                    {searchFilter.location}
                    <img onClick={e=>setsearchFilter(prev=>({...prev,location:""}))} className='cursor-pointer' src={assets.cross_icon} alt="" />

                    </span>
            )}
            {otherfilters.sex && (
                <span className='ml-2.5 inline-flex items-center gap-2.5 bg-blue-200 p-2 rounded'>
                    {otherfilters.sex}
                    <img onClick={e=>setotherfilters(prev=>({...prev,sex:""}))} className='cursor-pointer' src={assets.cross_icon} alt="" />
                </span>
            )}
            {otherfilters.fees && (
                <span className='ml-2.5 inline-flex items-center gap-2.5 bg-red-200 p-2 rounded'>
                    {otherfilters.fees}
                    <img onClick={e=>setotherfilters(prev=>({...prev,fees:""}))} className='cursor-pointer' src={assets.cross_icon} alt="" />
                </span>
            )}
            {otherfilters.expertise && (
                <span className='ml-2.5 inline-flex items-center gap-2.5 bg-blue-200 p-2 rounded'>
                    {otherfilters.expertise}
                    <img onClick={e=>setotherfilters(prev=>({...prev,expertise:""}))} className='cursor-pointer' src={assets.cross_icon} alt="" />
                </span>
            )}
             {otherfilters.language && (
                <span className='ml-2.5 inline-flex items-center gap-2.5 bg-red-200 p-2 rounded'>
                    {otherfilters.language}
                    <img onClick={e=>setotherfilters(prev=>({...prev,language:""}))} className='cursor-pointer' src={assets.cross_icon} alt="" />
                </span>
            )}

           
            </div>
            </div>
        )}

    </div>
  )
}

export default JobListing