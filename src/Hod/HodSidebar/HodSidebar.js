import React, { useState } from "react";

import TabNavItem from "../TabNavItem/TabNavItem";
import TabContent from "../TabContent/TabContent";
import HodUniversity from "../University/HodUniversity";
import Notification from "../Notification/Notification";
import MentorFeesDetails from "../FeesDetails/MentorFeesDetails"
import MentorResultSection from "../Results/MentorResultSection"
import ResultTable from "../Results/ResultTable";
import FeesTable from "../FeesDetails/FeesTable";
import SecondFeesTable from "../FeesDetails/SecondFeesTable";
import AttendanceHod from "../../Hod/Attendance/AttendanceHod";
import Home from "../../Hod/HomeSidebar/Home";
import HodTable from "../HodForm/HodTable";
import HodDashboard from "../HodForm/HodDashboard";
// import HodResultTable from "../Results/HodResultTable";

const HodSidebar = () => {

  const [activeTab, setActiveTab] = useState("tab1");

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
             <ul className=" flex flex-col justify-center items-center my-4 space-y-5">
                      <TabNavItem
          title="Home"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Attendance"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Results"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Fees details"
          id="tab4"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="University"
          id="tab5"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Notification"
          id="tab6"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>
             <div>
            
      </div>
             </div>
             </div>

           
      <div className="px-10">
        <TabContent id="tab1" activeTab={activeTab}>
          <Home />
          {/* <HodUniversity /> */}
          {/* <HodTable/> */}
          {/* <HodDashboard/> */}
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <AttendanceHod />
          {/* <HodDashboard/> */}
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
              {/* <ResultTable/> */}
              {/* <HodResultTable/> */}
        </TabContent>
        <TabContent id="tab4" activeTab={activeTab}>
          <SecondFeesTable/>
          {/* <HodDashboard/> */}
          </TabContent>
        <TabContent id="tab5" activeTab={activeTab}>
        </TabContent>
        <TabContent id="tab6" activeTab={activeTab}>
        <Notification />
        </TabContent>
      </div>
    </div>
  );
};

export default HodSidebar;
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
