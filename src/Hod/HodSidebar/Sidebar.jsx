import React, { useState } from "react";

const Sidebar = () => {

  const [activeTab, setActiveTab] = useState("");
  return (
    <div className="">
     <div className="px-2">
     <div className=" rounded-lg  bg-white  w-[240px] h-[729px]  left-0   ">
     <div className="flex items-center justify-center   ">
       <a href="/dashboard">
         <div className="pt-12 flex justify-center items-center flex-col">
       <img
 src="/img/User.png"
         alt="logo"
         className=" w-36  object-cover "
       />
       <div>
        <h2 className="text-[color:var(--01,#16376E)] text-[18px] not-italic font-Poppins font-semibold leading-[normal] tracking-[0.32px] capitalize">Sandip Modha</h2>
        <h2 className="text-[color:var(--01,#16376E)] text-[10px]  font-Poppins not-italic font-normal leading-[normal] tracking-[0.2px] capitalize">HOD of Computer Engineering 
Department</h2>
       </div>
       </div>
       </a>
             </div>
             <div className="sidebar flex flex-col justify-center items-center my-4 space-y-5">
                <a href="/home">
                <p className={`${activeTab === "Home" ? "px-10 py-2 bg-[#47A5E4] text-white border-transparent" : ""}`} onClick={() => setActiveTab("Home")} >Home</p>
                </a>
                <a href="/attendance">
                <p className={`${activeTab === "Attendance" ? "active" : ""}`} onClick={() => setActiveTab("Attendance")} >Attendance</p>
                </a>
                <a href="/result">
                <p className={`${activeTab === "Results" ? "active" : ""}`} onClick={() => setActiveTab("Results")} >Results</p>
                </a>
                <a href="/fees" >
                <p className={`${activeTab === "Fees Details" ? "active" : ""}`} onClick={() => setActiveTab("Fees Details")} >Fees Details</p>
                </a>

        {/* <li onClick={handleClick} className={" cursor-pointer rounded-[6px] text-[16px] font-Poppins  px-10 py-2 not-italic font-bold leading-[normal] tracking-[0.32px] capitalize " + (activeTab === id ? "bg-[#47A5E4] text-white border-transparent " : "border-transparent  text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.32px] capitalize")}>Home</li>
        <li onClick={handleClick} className={" cursor-pointer rounded-[6px] text-[16px] font-Poppins px-10 py-2 not-italic font-bold leading-[normal] tracking-[0.32px] capitalize " + (activeTab === id ? "bg-[#47A5E4] text-white border-transparent " : "border-transparent  text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.32px] capitalize")}>Attendance</li>
        <li onClick={handleClick} className={" cursor-pointer rounded-[6px] text-[16px] font-Poppins px-10 py-2 not-italic font-bold leading-[normal] tracking-[0.32px] capitalize " + (activeTab === id ? "bg-[#47A5E4] text-white border-transparent " : "border-transparent  text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.32px] capitalize")}>Results</li>
        <li onClick={handleClick} className={" cursor-pointer rounded-[6px] text-[16px] font-Poppins px-10 py-2 not-italic font-bold leading-[normal] tracking-[0.32px] capitalize " + (activeTab === id ? "bg-[#47A5E4] text-white border-transparent " : "border-transparent  text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.32px] capitalize")}>Fees Details</li> */}
      </div>
             <div>
            
      </div>
             </div>
             </div>

           
      <div className="px-10">
      </div>
    </div>
  );
};

export default Sidebar;
// import React from "react";
// import { NavLink } from 'react-router-dom'

// const Sidebar = () => {
//   return (
//     <div className="px-2 ">
//     <div className=" rounded-lg  bg-white  w-[240px] h-[729px]  left-0 z-10  ">
//     <div className="flex items-center justify-center   ">
//       <a href="/dashboard">
//         <div className="pt-10">
//       <img
// src="/img/User.png"
//         alt="logo"
//         className=" w-32  object-cover "
//       />
//       </div>
//       </a>
      
//       </div>
//       <ul className="py-5 flex flex-col justify-center items-center my-4 space-y-5">
//       <NavLink  to="/form" className={({ isActive }) =>
//                     isActive ?  'text-[#12B28C] text-[24px] font-inter not-italic font-bold leading-[normal] tracking-[0.48px] ' :'text-[color:var(--01,#211F3B)] text-[22px] not-italic font-medium leading-[normal] font-inter    '}>Mentoring Form</NavLink>
//     <NavLink  to="/users" className={({ isActive }) =>
//                     isActive ? 'text-[#12B28C] text-[24px] font-inter not-italic font-bold leading-[normal] tracking-[0.48px] ' :'text-[color:var(--01,#211F3B)] text-[22px] not-italic font-medium leading-[normal] font-inter   '}>Users</NavLink>
//     <NavLink  to="/for" className={({ isActive }) =>
//     isActive ? 'text-[#12B28C] text-[24px] font-inter not-italic font-bold leading-[normal] tracking-[0.48px]' :'text-[color:var(--01,#211F3B)] text-[22px] not-italic font-medium leading-[normal] font-inter   '}>Edit Form</NavLink>
//     <NavLink  to="/for" className={({ isActive }) =>
//     isActive ? 'text-[#12B28C] text-[24px] font-inter not-italic font-bold leading-[normal] tracking-[0.48px]' :'text-[color:var(--01,#211F3B)] text-[22px] not-italic font-medium leading-[normal] font-inter   '}>Edit Form</NavLink>
//     <NavLink  to="/for" className={({ isActive }) =>
//     isActive ? 'text-[#12B28C] text-[24px] font-inter not-italic font-bold leading-[normal] tracking-[0.48px]' :'text-[color:var(--01,#211F3B)] text-[22px] not-italic font-medium leading-[normal] font-inter   '}>Edit Form</NavLink>
//     <NavLink  to="/for" className={({ isActive }) =>
//     isActive ? 'text-[#12B28C] text-[24px] font-inter not-italic font-bold leading-[normal] tracking-[0.48px]' :'text-[color:var(--01,#211F3B)] text-[22px] not-italic font-medium leading-[normal] font-inter   '}>Edit Form</NavLink>
//       </ul>
//     </div>
   
//     </div>
//   );
// };

// export default Sidebar;
