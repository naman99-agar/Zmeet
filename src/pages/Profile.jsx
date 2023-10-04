import React from "react";
import { Header, Card, Footer } from "../components";
import { mapImg } from "../assets";

const cardData = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const Profile = () => {
  return (
    <div>
      <Header />
      {/* <h3 className="text-center text-[0.8rem] text-red-700">
        This data will be Encrypted!
      </h3> */}
      <div className="HeroSection ">
        <div className="absolute -z-10 w-screen flex  justify-center items-center">
          <img src={mapImg} className="w-[60%]"></img>
        </div>
        <div className="z-1 w-screen flex justify-center items-center gap-20 pt-[5rem]">
          <div className="h-[250px] w-[210px] bg-[#D9D9D9] overflow-hidden flex justify-center items-center rounded-md">
            <img
              src={`https://w0.peakpx.com/wallpaper/979/89/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face-thumbnail.jpg`}
            />
          </div>
          <div className="flex flex-col gap-5 text-[1.15rem]">
            <div className="flex gap-2 items-center">
              <label className="w-[120px]">Name</label>
              <input
                type="text"
                className="border w-[300px] border-gray-400 rounded-md py-1 px-2"
              />
            </div>
            <div className="flex gap-2 items-center">
              <label className="w-[120px]">Pseudo name</label>
              <input
                type="text"
                className="border w-[300px] border-gray-400 rounded-md py-1 px-2"
              />
            </div>
            <div className="flex gap-2 items-center">
              <label className="w-[120px]">Location</label>
              <input
                type="text"
                className="border w-[300px] border-gray-400 rounded-md py-1 px-2"
              />
            </div>
            <div className="flex gap-2 items-center">
              <label className="w-[120px]">Account</label>
              <input
                type="text"
                className="border w-[300px] border-gray-400 rounded-md py-1 px-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[17%] mt-24">
        <h2 className="text-[1.1rem] ml-2">Your Events</h2>
        <div className="h-[4px] w-32 bg-[#2CAE8F]"></div>
        <div className="h-[2px]  bg-black "></div>
      </div>
      <div className="blogList mx-[10%] flex flex-wrap justify-center gap-16 mt-16">
        {/* {cardData.map((item) => {
          return <Card data={item} width={250} key={item.id} />;
        })} */}
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
