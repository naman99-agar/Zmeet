import React from "react";
import { Header } from "../components";
import { mapImg } from "../assets";

const RegisteredEvent = () => {
  return (
    <div>
      <Header />
      <div className="HeroSection">
        <div className="absolute -z-10 w-screen flex  justify-center items-center">
          <img src={mapImg} className="w-[60%]"></img>
        </div>
      </div>
      <div className="mx-[15%] mt-20">
        <h2 className="text-[1.1rem] ml-2">Registered Events</h2>
        <div className="h-[4px] w-40 bg-[#2CAE8F]"></div>
        <div className="h-[2px]  bg-black "></div>
      </div>
      <div className="blogList mx-[15%] flex flex-wrap justify-center gap-16 mt-5">
        <div className="w-full flex gap-3 items-center bg-white border border-gray-200 rounded-md px-2 py-3">
          <div className="left">
            <div
              className={` bg-[#D9D9D9] rounded-lg overflow-hidden flex justify-center items-center`}
              style={{
                width: `200px`,
                height: `120px`,
              }}
            >
              <img
                // src={`https://gateway.lighthouse.storage/ipfs/${data.cid[0]}`}
                className="h-[100%]"
              ></img>
            </div>
          </div>
          <div className="right flex flex-col gap-2">
            <p className="date text-sm text-[#717171]">
              SUN, AUG 27 · 5:30 AM IST
            </p>
            <h2 className="title text-lg w-full">
              New Friends! Drinks & Good vibes!
            </h2>
            <p className="description text-base font-normal text-[#4f4f4f]">
              A Crew of Explorer! - New York
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisteredEvent;
