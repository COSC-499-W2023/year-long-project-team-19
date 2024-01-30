import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const CardMenu = () => {
  const navigate = useNavigate();
  const handleRedTeam = () => {
    navigate("/cards/red");
  };
  const handleBlackTeam = () => {
    navigate("/cards/black");
  };
  const handleBlueTeam = () => {
    navigate("/cards/blue");
  };
  const handleWhiteTeam = () => {
    navigate("/cards/white");
  };

  return (
    <>
      <Navbar />
      <div className="flex-container">
        <div className="menu-box">
          <h1 className="title">Pick your deck!</h1>
          <div className="buttons-container">
            <button className="red-team-button" onClick={handleRedTeam}>
              RED
            </button>
            <button className="black-team-button" onClick={handleBlackTeam}>
              BLACK
            </button>
            <button className="blue-team-button" onClick={handleBlueTeam}>
              BLUE
            </button>
            <button className="white-team-button" onClick={handleWhiteTeam}>
              WHITE
            </button>     
          </div>
        </div>
      </div>
    </>
  );
};

export default CardMenu;
