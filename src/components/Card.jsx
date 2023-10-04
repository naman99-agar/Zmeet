import React from "react";
import { Link } from "react-router-dom";

const Card = ({ dimensions, fontSize }) => {
  return (
    <Link to={`/events/1`}>
      <div className="Card flex flex-col gap-3">
        <div
          className={` bg-[#D9D9D9] rounded-lg overflow-hidden flex justify-center items-center`}
          style={{
            width: `${dimensions.width}px`,
            height: `${dimensions.height}px`,
          }}
        >
          <img
            src={`https://www.pcma.org/wp-content/uploads/2020/12/Covening-Asia-Pacific-Sydney-1.jpg`}
            className="h-[100%]"
          ></img>
        </div>
        <div
          className={` flex flex-col gap-0`}
          style={{ width: `${dimensions.width}px` }}
        >
          <p className="text-[#2CAE8F]">
            {/* {data.tag.toUpperCase()} */}asffaf
          </p>
          <h2 className="font-bold " style={{ fontSize: `${fontSize}rem` }}>
            {/* {data.title} */}asfasf
          </h2>
          <p className="text-[#878181] text-sm">September 19, 2022</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
