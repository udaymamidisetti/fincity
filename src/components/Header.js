import React from "react";
import image from "../assets/image.png";
const Header = () => {
  return (
    <div className="container m-auto">
      <img
        className="absolute top-[0px] right-[0px] w-[720px] h-[629px] overflow-hidden object-cover"
        alt=""
        src={image}
      />
      <div className="h-[56px] items-center flex justify-between relative">
        <p className="text-[#25282B] font-semibold leading-[32px] text-[18px]">
          Madelyn Torff
        </p>
        <ul className="flex gap-10">
          <li className="text-[#25282B] font-semibold leading-[32px] text-[18px] cursor-pointer">
            <a>About</a>
          </li>
          <li className="text-[#25282B] font-semibold leading-[32px] text-[18px] cursor-pointer">
            <a href="#projects">Projects</a>
          </li>
          <li className="text-[#25282B] font-semibold leading-[32px] text-[18px] cursor-pointer">
            <a href="#contact">Contacts</a>
          </li>
        </ul>
      </div>
      <div className="w-[486px] overflow-hidden flex flex-col items-start justify-start gap-[12px] text-[20px] text-brand-yellow font-body-24 pt-[50px]">
        <b className="self-stretch relative uppercase text-[#FDC435] text-[20px] font-bold">
          UI/UX Designer
        </b>
        <div className="flex flex-col items-start justify-start gap-[32px] text-45xl text-gray-1 font-title-h1">
          <h1 className="relative leading-[76.8px] inline-block whitespace-pre-wrap font-bold text-[63px]">
            Hello, my name is Madelyn Torff
          </h1>
          <div className="shrink-0 flex flex-col items-start justify-start text-5xl text-font-medium-emphasis font-body-24">
            <div className="relative leading-[36px] inline-block w-[486px] text-[24px] font-normal text-[#828282]">
              Short text with details about you, what you do or your
              professional career. You can add more information on the about
              page.
            </div>
          </div>
          <div className="shrink-0 flex flex-row items-start justify-start gap-[12px] text-lg text-bg-line font-roboto">
            <button className="relative leading-[150%] font-medium bg-[#FDC435] rounded-lg bg-brand-yellow shrink-0 flex flex-row items-start justify-start py-2 px-6">
              Projects
            </button>
            <button className="relative leading-[150%] font-medium rounded-lg shrink-0 flex flex-row items-start justify-start py-2 px-6 border-[2px] border-solid border-[#25282B]">
              LinkedIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
