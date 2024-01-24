import React from "react";
import img from "../assets/Vector.png";
const ContactForm = () => {
  return (
    <div className="pt-[200px]" id="contact">
      <div className="flex justify-center items-center">
        <div>
          <h1 className="text-[48px] leading-[72px] text-center font-bold">
            Add Projects
          </h1>
          <div className="h-[4px] w-[100px] rounded-[2px] bg-[#FDC435] m-auto"></div>
        </div>
      </div>
      <div className="h-[445px] w-[400px] m-auto pt-[50px]">
        <p className="text-[16px] font-semibold leading-[22px]">Project name</p>
        <input className="rounded-[8px] border-[1px] border-[#E8ECF4] h-[40px] bg-[#fff] w-full" />
        <p className="text-[16px] font-semibold leading-[22px] pt-4">
          Project link
        </p>
        <input className="rounded-[8px] border-[1px] border-[#E8ECF4] h-[40px] bg-[#fff] w-full" />
        <p className="text-[16px] font-semibold leading-[22px] pt-4">
          Description
        </p>
        <textarea className="rounded-[8px] border-[1px] border-[#E8ECF4] h-[160px] bg-[#fff] w-full"></textarea>
        <button className="w-[81px] h-[43px] rounded-[8px] bg-[#FDC435] text-[#25282B] font-medium block ml-auto mt-4">
          Add
        </button>
      </div>
      <img src={img} alt="img" className="mt-12 m-auto" />
    </div>
  );
};

export default ContactForm;
