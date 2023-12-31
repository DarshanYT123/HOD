import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "./Hod/Navbar/Navbar";
// import HodSidebar from "./HOD/HodSidebar/HodSidebar";

import Hod from "./Hod/Hod/Hod";
import Sidebar from "./Hod/HodSidebar/Sidebar";
import Home from "./Hod/HomeSidebar/Home";
import AttendanceHod from "./Hod/Attendance/AttendanceHod";
import HodUniversity from "./Hod/University/HodUniversity";
import HodTable from './Hod/HodForm/HodTable';
import SecondFeesTable from "./Hod/FeesDetails/SecondFeesTable";
import ResultTable from "./Hod/Results/ResultTable";
import HodDashboard from "./Hod/HodForm/HodDashboard";
import HodAttendanceTable from "./Hod/Attendance/HodAttendanceTable";

function App() {
  return (
    <div className="App bg-[#F6F3F3] ">
      <Navbar />
      <div>
      <div className="pt-2 top-4 flex justify-end ">
        <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.28px] capitalize">Last Login</h2>
        <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px] capitalize px-3">2 :00 pM , Sunday 15 Oct 2023</h2>
      </div>
      <Sidebar/>
      {/* <Progressbar/> */}
      <div className=" ">
      <Routes>

      {/* <Route path="/hod" element={<Hod />} /> */}
      <Route path="/home" element={<Home />} />
      <Route path="/attendance" element={<AttendanceHod />} />
      <Route path="/results" element={<ResultTable />} />
      <Route path="/fees" element={<SecondFeesTable />} />
      <Route path="/cards" element={<HodUniversity />} />
      <Route path="/hodform" element={<HodTable />} />
      <Route path="/dashboard" element={<HodDashboard />} />
      <Route path="/attendancetable" element={<HodAttendanceTable />} />


      {/* <Page /> */}
      </Routes>
      </div>
      </div>
      
    </div>
  );
}

export default App;
