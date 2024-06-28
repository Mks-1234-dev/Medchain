import React from "react";

const TeamCard = ({ imgUrl, title, description, fulldescription, onClick }) => {
  return (
    <div className="w-full">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group w-full"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          width: "300px",
        }}
        onClick={onClick}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 "></div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}>
          <h1 className="text-xl font-semibold text-white mb-2">{title} </h1>
          <h2 className="text-[#ADB7BE] max-w-xl">{description}</h2>
          <button onClick={onClick}>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
