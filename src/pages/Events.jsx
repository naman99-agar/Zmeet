import React from "react";
import { Header } from "../components";
import { clockIcon, loactionIcon, mapImg } from "../assets";

const Events = () => {
  return (
    <div>
      <Header />
      <div className="HeroSection ">
        <div className="absolute -z-10 w-screen flex  justify-center items-center">
          <img src={mapImg} className="w-[60%]"></img>
        </div>
      </div>
      <div className="contentSection mx-[10%] mt-[2.5rem]">
        <div className="headingSection">
          <h1 className="text-[2.5rem] font-semibold text-center">
            Desi Meetup! Bring your friends - Equal Ratio -Under 35!
          </h1>
          <div className="mt-[2rem]">
            <p className="text-[#2CAE8F] text-[1rem] ">TECH</p>
          </div>
        </div>
        <div className="flex my-[1rem] justify-between ">
          <div className=" -z-10">
            <div className="img-container h-[400px] w-[750px] bg-[#D9D9D9] rounded-xl overflow-hidden mb-[2rem]">
              <img
                src={
                  "https://www.pcma.org/wp-content/uploads/2020/12/Covening-Asia-Pacific-Sydney-1.jpg"
                }
              />
            </div>
            <div className="info-section">
              <div className="infoSection text-[#636363] font-medium leading-loose w-[750px] text-justify">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
          <div className="ml-10 w-[350px] h-auto ">
            <div className="details-section flex flex-col gap-5 px-6 py-8 bg-white shadow-sm border rounded-2xl">
              <div className=" flex items-start gap-4">
                <img src={loactionIcon} className="w-5" />
                <p className="leading-[23px] font-medium text-[0.9rem] text-[#656565]">
                  Saturday, August 26, 2023 at 9:00 PM to Sunday, August 27,
                  2023 at 2:00 AM EDT
                </p>
              </div>
              <div className=" flex items-start gap-4">
                <img src={clockIcon} className="w-5" />
                <p className="leading-[23px] font-medium text-[0.9rem] text-[#656565]">
                  SPiN New York 304 Park Ave South, (Entrance on 23rd Street
                  next to Time Warner Cable) · New York, NY
                </p>
              </div>
            </div>

            <div>
              <button
                // onClick={() => setModal(true)}
                className="bg-[#2CAE8F] text-white py-2 px-8 w-[100%] mt-3 rounded-[5px] text-[1.1rem] hover:bg-[#1F9B7E]"
              >
                Attend
              </button>
              <button className=" text-black border-2 bg-white border-black py-2 px-8 w-[100%] mt-3 rounded-[5px] text-[1.1rem] hover:border-[#878181] hover:text-[#878181]">
                Share
              </button>
            </div>
            <div className="map-container h-[250px] my-[1rem] bg-white shadow-sm border rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.52629668376!2d76.76357783356833!3d28.643684634738104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1693051459905!5m2!1sen!2sin"
                className="h-full w-full"
                // style="border:0;"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 w-full left-0 bg-white px-[10%] py-4 border shadow-sm flex justify-between">
          <div className="left ">
            <p className="text-md font-light">SUN, AUG 27 · 6:30 AM IST</p>
            <p className="text-[1.1rem]">Title</p>
          </div>
          <div className="right flex gap-6 items-center justify-center">
            <button className="bg-[#2CAE8F] text-white py-[10px] px-8 w-[130px]  rounded-[5px] text-[1.1rem] hover:bg-[#1F9B7E]">
              Attend
            </button>
            <button className=" text-black border-2 bg-white border-black py-2 px-8 w-[130px] rounded-[5px] text-[1.1rem] hover:border-[#878181] hover:text-[#878181]">
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
