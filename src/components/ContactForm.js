import React, { useState } from "react";
import img from "../assets/Vector.png";
import { useDispatch } from "react-redux";
import { setProjects } from "../redux/slices/projectSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { projectsData } from "./Projects";
const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [desc, setDesc] = useState("");
  function getRandomImage(max) {
    return Math.floor(Math.random() * max);
  }
  const handleSubmitProjects = () => {
    if (name === "") {
      toast("Please Enter name", {
        type: "error",
        autoClose: 2000,
      });
      return;
    }

    if (link === "") {
      toast("Please Enter link", {
        type: "error",
        autoClose: 2000,
      });
      return;
    }
    if (desc === "") {
      toast("Please Enter description", {
        type: "error",
        autoClose: 2000,
      });
      return;
    }
    const data = [];
    const formdata = {
      name: name,
      link: link,
      desc: desc,
      image: projectsData[getRandomImage(projectsData.length)].image,
    };
    data.push(formdata);
    dispatch(setProjects(data));
  };
  return (
    <div className="pt-[200px]" id="contact">
      <ToastContainer />
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
        <input
          onChange={(e) => setName(e.target.value)}
          className="pl-[10px] focus:outline-none rounded-[8px] border-[1px] border-[#E8ECF4] h-[40px] bg-[#fff] w-full"
        />
        <p className="text-[16px] font-semibold leading-[22px] pt-4">
          Project link
        </p>
        <input
          onChange={(e) => setLink(e.target.value)}
          className="pl-[10px] focus:outline-none rounded-[8px] border-[1px] border-[#E8ECF4] h-[40px] bg-[#fff] w-full"
        />
        <p className="text-[16px] font-semibold leading-[22px] pt-4">
          Description
        </p>
        <textarea
          onChange={(e) => setDesc(e.target.value)}
          className=" pl-[10px] focus:outline-none rounded-[8px] border-[1px] border-[#E8ECF4] h-[160px] bg-[#fff] w-full"
        ></textarea>
        <button
          onClick={handleSubmitProjects}
          className="w-[81px] h-[43px] rounded-[8px] bg-[#FDC435] text-[#25282B] font-medium block ml-auto mt-4"
        >
          Add
        </button>
      </div>
      <img src={img} alt="img" className="mt-12 m-auto" />
    </div>
  );
};

export default ContactForm;
