import React from "react";
import img from "../assets/pexels-elly-fairytale-3823207 1.png";
import rec from "../assets/Rectangle 7.png";
import rec1 from "../assets/Rectangle 7 (1).png";
import img1 from "../assets/Vector.png";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
const Projects = () => {
  return (
    <div className="pt-[100px]" id="projects">
      <div className="flex justify-center items-center">
        <div>
          <h1 className="text-[48px] leading-[72px] text-center font-bold">
            Projects
          </h1>
          <div className="h-[4px] w-[100px] rounded-[2px] bg-[#FDC435] m-auto"></div>
        </div>
      </div>
      <div className="w-[992px] h-[524px] flex items-center rounded-[24px] justify-between bg-[#fff] m-auto mt-[100px]">
        <div className="w-[406px] pl-[40px]">
          <h1 className="font-bold text-[40px] leading-[60px]">Project name</h1>
          <p className="text-[18px] leading-[26px] text-[#828282] pt-[10px]">
            I created this personal project in order to show how to create an
            interface in Figma using a portfolio as an example.
          </p>
          <button className="mt-[20px] font-bold rounded-3xl flex flex-row items-start justify-start py-2 px-6 font-roboto border-[1px] border-solid border-bg-line">
            View Project
          </button>
        </div>
        <img src={img} alt="" className="rounded-tr-[24px] rounded-br-[24px]" />
      </div>

      <div className="w-[992px] h-[524px] flex flex-row-reverse items-center rounded-[24px] justify-between bg-[#fff] m-auto mt-[100px]">
        <div className="w-[406px]">
          <h1 className="font-bold text-[40px] leading-[60px]">Project name</h1>
          <p className="text-[18px] leading-[26px] text-[#828282] pt-[10px]">
            I created this personal project in order to show how to create an
            interface in Figma using a portfolio as an example.
          </p>
          <button className="mt-[20px] font-bold rounded-3xl flex flex-row items-start justify-start py-2 px-6 font-roboto border-[1px] border-solid border-bg-line">
            View Project
          </button>
        </div>
        <img src={rec} alt="" className="rounded-tl-[24px] rounded-bl-[24px]" />
      </div>

      <div className="w-[992px]  h-[524px] flex items-center rounded-[24px] justify-between bg-[#fff] m-auto mt-[100px]">
        <div className="w-[406px] pl-[40px]">
          <h1 className="font-bold text-[40px] leading-[60px]">Project name</h1>
          <p className="text-[18px] leading-[26px] text-[#828282] pt-[10px]">
            I created this personal project in order to show how to create an
            interface in Figma using a portfolio as an example.
          </p>
          <button className="mt-[20px] font-bold rounded-3xl flex flex-row items-start justify-start py-2 px-6 font-roboto border-[1px] border-solid border-bg-line">
            View Project
          </button>
        </div>
        <img
          src={rec1}
          alt=""
          className="rounded-tr-[24px] rounded-br-[24px]"
        />
      </div>

      <div className="mt-[50px]">
        <div className="flex gap-4 justify-center">
          <AiFillInstagram size={30} />
          <AiFillLinkedin size={30} />
          <IoIosMail size={30} />
        </div>
        <p className="text-[16px] font-normal leading-[22px] mt-[20px] text-center">
          Copyright © 2024. All rights reserved
        </p>
      </div>
      <img src={img1} alt="img" className="mt-12 m-auto" />
    </div>
  );
};

export default Projects;
