import React from "react";
import v1 from "../../assets/vector1.png";

const Banner = ({ tasks, resolves }) => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto flex md:flex-row flex-col gap-4 py-20">
        <div className="relative flex-1">
          <div className="bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)] text-white p-30 text-center rounded-lg">
            <h1 className="text-2xl">In-Progress</h1>
            <span className="text-6xl">{tasks.length}</span>
            <img className="absolute left-0 bottom-0 h-full" src={v1} alt="" />
            <img
              className="absolute right-0 bottom-0 h-full transform scale-x-[-1]"
              src={v1}
              alt=""
            />
          </div>
        </div>
        <div className="relative flex-1">
          <div className="bg-gradient-to-r from-[#54cf68] to-[#00827a] text-white p-30 text-center rounded-lg">
            <h1 className="text-2xl">Resolved</h1>
            <span className="text-6xl">{resolves.length}</span>
            <img className="absolute left-0 bottom-0 h-full" src={v1} alt="" />
            <img
              className="absolute right-0 bottom-0 h-full transform scale-x-[-1]"
              src={v1}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
