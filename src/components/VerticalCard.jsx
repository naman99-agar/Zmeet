import React from "react";

const VerticalCard = () => {
  return (
    <div className="w-full flex gap-3 items-center hover:bg-[#f9f9f9] rounded-md px-2 py-3">
      <div className="left">
        <div
          className={` bg-[#D9D9D9] rounded-lg overflow-hidden flex justify-center items-center`}
          style={{
            width: `200px`,
            height: `120px`,
          }}
          //   style={{
          //     width: `${dimensions.width}px`,
          //     height: `${dimensions.height}px`,
          //   }}
        >
          <img
            src={`https://www.pcma.org/wp-content/uploads/2021/04/Palm-Beaches-Hybrid-2.jpg`}
            className="h-[100%]"
          ></img>
        </div>
      </div>
      <div className="right flex flex-col gap-2">
        <p className="date text-sm text-[#717171]">SUN, AUG 27 · 5:30 AM IST</p>
        <h2 className="title text-lg w-full">
          New Friends! Drinks & Good vibes!
        </h2>
        <p className="description text-base font-normal text-[#4f4f4f]">
          A Crew of Explorer! - New York
        </p>
      </div>
    </div>
  );
};

export default VerticalCard;
