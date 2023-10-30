import React from "react";
import { BiRightArrowAlt } from 'react-icons/bi'

const MentorFeesDetails = () => {
  return (
    <>
      <div className="absolute top-0 right-0    ">
      <div className="flex flex-row justify-between ">
      <div className="flex flex-row py-3 gap-x-1 justify-start items-center">
        <h2 className="text-[color:var(--black,#101010)] text-[12px] font-inter not-italic font-bold leading-[normal] tracking-[0.66px]">Fees</h2>
        <span><BiRightArrowAlt/></span>
        <h2  className="text-[color:var(--black,#101010)] text-[12px] font-inter not-italic font-bold leading-[normal] tracking-[0.66px]">21BECE30000 </h2>
      </div>
     {/* <div className="py-2 flex justify-end ">
      <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.28px] capitalize">Last Login</h2>
      <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px] capitalize px-3">2 :00 pM , Sunday 15 Oct 2023</h2>
    </div> */}
    </div>
      <div className=" px-12  py-5 max-h-[700px]  overflow-y-auto bg-white">
      <div className="flex flex-row gap-x-[45rem]">
        <h2 className="text-[color:var(--01,#16376E)] text-[20px] font-Poppins not-italic font-bold leading-[normal] tracking-[1.1px]">21BECE30000</h2>
        <h2 className="text-[color:var(--01,#16376E)] text-[18px] font-Poppins not-italic font-bold leading-[normal] tracking-[0.99px]">Raj Mehta</h2>
      </div>

        <div className="flex justify-center  items-center ">
          <h2 className="text-[color:var(--02,#47A5E4)] text-[20px] font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">
            Fees Details
          </h2>
        </div>

        <form>
          <div className="flex flex-row gap-x-[25rem] py-5 px-10 items-center justify-center">
            <div>
              <button
                type="button"
                class="text-white text-[16px] font-inter   bg-[#159BD6] rounded-[5px]  font-bold px-14 py-2.5 mr-2 mb-2 leading-[19.36px] tracking-[2%] capitalize"
              >
                Upload Result Copy
              </button>
            </div>
            <div className="flex">
              <label
                for="Semester"
                className="ml-[20px] font-Poppins px-1  py-2 text-[16px]   font-semibold text-[#1E1E1E] leading-[24px]"
              >
                Semester :{" "}
              </label>
              <select
                id="12th"
                name="selectoption"
                // value={selectoption}
                // onChange={handleInputChange}
                //onBlur={validateOne}
                tabIndex={1}
                className="flex flex-row w-[128px] h-[40px]   bg-[#E6E6E6] hover:text-[#47A5E4]   text-center  rounded-[5px] focus:outline-none text-[color:var(--02,#363636)] text-[18px] font-inter not-italic font-medium leading-[normal] tracking-[0.36px] capitalize"
              >
                <option selected>Semester 1</option>
                <option value="Semester 1">Semester 1</option>
                <option value="Semester 2">Semester 2</option>
                <option value="Semester 3">Semester 3</option>
                <option value="Semester 4">Semester 4</option>
                <option value="Semester 5">Semester 5</option>
                <option value="Semester 6">Semester 6</option>
                <option value="Semester 7">Semester 7</option>
              </select>
            </div>
          </div>

          {/* Table  */}
          {/* <div className="flex items-center justify-center text-white text-[16px] w-[500px] h-[45px]   bg-[#16376E] rounded-[5px]  font-bold   leading-[19.36px] tracking-[2%] capitalize">
                <h1>College Fees Semester -1 </h1>
            </div> */}
          <div className="py-4 flex items-center justify-center">
            <table className=" ">
              <div className="py-10">
                <tr>
                  <th colspan="5" className="p-2 text-white text-center font-inter text-[18px] h-[45px]   bg-[#16376E] rounded-[5px]  font-bold   leading-[21.78px] tracking-[2%]">
                    College Fees Semester - 1 </th>
                  
                </tr>
                <tr className="text-center ">
                  <th className=" border-r-[1px]  w-[170px] h-[45px] bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]  py-3 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                    amount
                  </th>
                  <th className="border-r-[1px] w-[170px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]   py-3 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                    Status
                  </th>
                  <th className="border-r-[1px]  w-[170px] h-[45px] bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]  py-3 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                    Payment Method
                  </th>
                  <th className="border-r-[1px] w-[400px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]  py-3 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                    Proof
                  </th>
                </tr>
                <tr className="">
                  <td>
                    <div className="font-inter  w-[170px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none">
                      54000/-
                    </div>
                  </td>
                  <td>
                    <div className="font-inter text-[#00BE35]  w-[170px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none">
                      Paid
                    </div>
                  </td>

                  <td>
                    <div className=" font-inter  w-[170px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none">
                      Cash
                    </div>
                  </td>
                  <td>
                    <div className="font-inter  w-[400px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none">
                      -
                    </div>
                  </td>
                </tr>
              </div>

              <div className="py-10">
              <tr>
                  <th 
                  colspan="5"
                   className="p-2 text-white text-[18px] h-[45px]   bg-[#16376E] rounded-[5px]  font-bold   leading-[21.78px] tracking-[2%]">
                    Exam Fees Semester -1  </th>
                  
                </tr>
                <tr className="text-center ">
                  <th className="border-r-[1px]  w-[170px] h-[45px] bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]   py-3 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                    amount
                  </th>
                  <th className="border-r-[1px] w-[170px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]   py-3 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                    Status
                  </th>
                  <th className="border-r-[1px]  w-[170px] h-[45px] bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]   py-3 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                    Payment Method
                  </th>
                  <th className="border-r-[1px] w-[400px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]   py-3 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                    Proof
                  </th>
                </tr>
                <tr className="">
                  <td>
                    <div className="font-inter  w-[170px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none">
                      775/-
                    </div>
                  </td>
                  <td>
                    <div className=" font-inter text-[#00BE35]  w-[170px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none">
                      Paid
                    </div>
                  </td>

                  <td>
                    <div className=" font-inter  w-[170px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none">
                      Cash
                    </div>
                  </td>
                  <td>
                    <div className=" font-inter w-[400px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none">
                      -
                    </div>
                  </td>
                </tr>
              </div>

              <div className="py-10">
              <tr>
                  <th colspan="5" 
                  className="p-2 text-white text-[18px] h-[45px]   bg-[#16376E] rounded-[5px]  font-bold   leading-[21.78px] tracking-[2%]">
                   Hostel Fees Semester -1  </th>
                  
                </tr>
                <tr className="text-center ">
                  <th className="border-r-[1px]  w-[170px] h-[45px] bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]   py-3  text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                    amount
                  </th>
                  <th className="border-r-[1px] w-[170px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]   py-3 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                    Status
                  </th>
                  <th className="border-r-[1px]  w-[170px] h-[45px] bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]   py-3 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                    Payment Method
                  </th>
                  <th className="border-r-[1px] w-[400px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                    Proof
                  </th>
                </tr>
                <tr className="">
                  <td>
                    <div className="font-inter  w-[170px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none">
                    42500/-
                    </div>
                  </td>
                  <td>
                    <div className=" font-inter text-[#00BE35]  w-[170px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none">
                      Paid
                    </div>
                  </td>

                  <td>
                    <div className="font-inter  w-[170px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none">
                      Cash
                    </div>
                  </td>
                  <td>
                    <div className=" font-inter w-[400px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none">
                      -
                    </div>
                  </td>
                </tr>
              </div>
            </table>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default MentorFeesDetails;
