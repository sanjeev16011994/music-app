import React, { useContext } from "react";
import "./BarAnimation.scss";
import { PlayerContext } from "../PlayerContext";

const BarAnimation = ({ track }) => {

const {isPlaying} = useContext(PlayerContext)

return (
    <div className={`bar-container ${isPlaying && 'music-animate'}`}>
        <div className={`music-bars`} >
            <div className={`bar ${isPlaying && 'bar-animate'}`} ></div>
            <div className={`bar ${isPlaying && 'bar-animate'}`} ></div>
            <div className={`bar ${isPlaying && 'bar-animate'}`} ></div>
            <div className={`bar ${isPlaying && 'bar-animate'}`} ></div>
            <div className={`bar ${isPlaying && 'bar-animate'}`} ></div>
            <div className={`bar ${isPlaying && 'bar-animate'}`} ></div>
        </div>
    </div>
  );
};

export default BarAnimation;
