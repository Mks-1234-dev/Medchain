import React from "react";

const TeamCard = ({ imgUrl, title, description, fulldescription, onClick }) => {
  return (
    <div>
      <div onClick={onClick}>
        <div></div>
      </div>
      <div>
        <div>
          <h1>{title} </h1>
          <h2>{description}</h2>
          <button onClick={onClick}>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
