import React from "react";
import { Link } from "react-router-dom";
import { Card, Footer, Header, VerticalCard } from "../components";
import { mapImg } from "../assets";

const data = [1, 2, 3, 4, 5];

const Home = () => {
  return (
    <div>
      <Header />
      <div className="HeroSection ">
        <div className="absolute -z-10 w-screen flex  justify-center items-center">
          <img src={mapImg} className="w-[60%]" alt="images"></img>
        </div>
        <div className="z-1 w-screen flex flex-col justify-center items-center gap-8 pt-[5rem]">
          <h1 className="font-bold text-[3rem] text-center">
            The Zone of happening - Zmeet
          </h1>
          <h2 className="text-[1.2rem]">
            To make friends from all around the world!
          </h2>
          <Link
            to="/start-a-petition"
            className="bg-[#2CAE8F] text-white py-2 px-4 rounded-[5px] text-[1.1rem] hover:bg-[#1F9B7E]"
          >
            Star a Petition
          </Link>
        </div>
      </div>

      <ul
        id="browse"
        className="flex justify-center items-center gap-20 text-[#878181] bg-white py-5 w-[90%] mx-auto rounded-lg mt-[5rem]"
        style={{ boxShadow: "0px -3px 19px rgba(0, 0, 0, 0.2)" }}
      >
        <div className="cursor-pointer hover:text-black text-center">
          Online
        </div>
        <div className="h-7 w-[2px] bg-[#878181]"></div>
        <div className="cursor-pointer hover:text-black text-center">
          Offline
        </div>
        <div className="h-7 w-[2px] bg-[#878181]"></div>
        <div className="cursor-pointer hover:text-black text-center">
          Trending
        </div>
        <div className="h-7 w-[2px] bg-[#878181]"></div>
        <div className="cursor-pointer hover:text-black text-center">Zonal</div>
      </ul>

      <div className="blogList mx-[10%] my-[6rem] flex flex-wrap justify-center gap-16">
        {data && data.length
          ? data.slice(0, 2).map((item, index) => {
              return (
                <Card
                  dimensions={{ width: 500, height: 300 }}
                  fontSize={1.4}
                  key={index}
                />
              );
            })
          : ""}
      </div>
      <div className="in-your-city mx-[12%] my-[6rem]">
        <h1 className="text-2xl text-center mb-[1rem]">In your City</h1>
        <div className="card-list  my-[1.5rem] flex flex-wrap justify-around gap-12">
          {data && data.length
            ? data.slice(0, 3).map((item, index) => {
                return (
                  <Card
                    dimensions={{ width: 350, height: 200 }}
                    fontSize={1.2}
                    key={index}
                  />
                );
              })
            : ""}
        </div>
      </div>
      <div className="in-your-city mx-[11%] flex gap-7">
        <div className="left w-1/2">
          <h1 className="text-2xl text-center mb-[1rem]">Online Events</h1>
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
        </div>
        <div className="right w-1/2">
          <h1 className="text-2xl text-center mb-[1rem]">Offline Events</h1>
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
        </div>
      </div>
      <div className="in-your-city mx-[11%] flex gap-8 my-[6rem]">
        <div className="left w-1/2">
          <h1 className="text-2xl text-center mb-[2rem]">Commnunity Events</h1>
          <div className="card-container flex justify-between">
            <Card dimensions={{ height: 180, width: 280 }} />
            <Card dimensions={{ height: 180, width: 280 }} />
          </div>
        </div>
        <div className="right w-1/2">
          <h1 className="text-2xl text-center mb-[2rem]">Personal Events</h1>
          <div className="card-container flex justify-between">
            <Card dimensions={{ height: 180, width: 280 }} />
            <Card dimensions={{ height: 180, width: 280 }} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
