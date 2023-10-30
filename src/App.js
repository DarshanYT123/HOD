import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./Hod/Navbar/Navbar";
// import HodSidebar from "./HOD/HodSidebar/HodSidebar";

import Hod from "./Hod/Hod/Hod";

function App() {
  // for aos
  // AOS.init();
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Basic Information", "Student History And Information", "External Exam Sheet","Mid Semester Details","Participated  Co-Curricular Activities","Participated Seminar or Project","Membership Organization"  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        // return <Basicinfo  />;
      case 2:
        // return <StudentHistory />;
      case 3:
        // return <ExamSheet />;
      case 4:
        // return <MidSemester />;
        case 5:
          // return <Activities />;
          case 6:
            // return <Seminar />;
            case 7:
              // return <Membership />;
            default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };


  return (
    <div className="App bg-[#F6F3F3] ">
      <div>
      <div className="">
      <Navbar />
      </div>
      <div className="relative top-4 flex justify-end ">
        <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.28px] capitalize">Last Login</h2>
        <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px] capitalize px-3">2 :00 pM , Sunday 15 Oct 2023</h2>
      </div>
      {/* <Progressbar/> */}
      <div className=" ">
        <Router>
      <Routes>

      <Route path="/hod" element={<Hod />} />

      {/* <Page /> */}
      </Routes>
      </Router>
      </div>
      </div>
      
    </div>
  );
}

export default App;
