import React, { useContext } from "react";
import { songs } from "../data";
import "./songs.scss";
import { PlayerContext } from "../PlayerContext";

const Songs = () => {
  const {
    currentTrack,
    setCurrentTrack,
  } = useContext(PlayerContext);

  return (
    <div>
      <h3 className="list-header">Music List</h3>
      <div className="song-list">
        {songs.map((track, i) => {
          return (
            <div className={`track ${currentTrack.id === track.id && 'current-track'} `} onClick={() => setCurrentTrack(track)} >
              {track.name}
            </div>
          );
        })}
      </div>
      <div className="info">
          <div className="music-cover">
            <img  src={currentTrack.cover} alt="music-cover" ></img>
          </div>
          <div>{currentTrack.name}</div>
          <div> <small>{currentTrack.artist}</small></div>
        </div>
    </div>
  );
};

export default Songs;
