import React, { useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/src/styles.scss';
import "./player.scss";
import BarAnimation from "../Info/BarAnimation";
import { useContext } from "react";
import { PlayerContext } from "../PlayerContext";

const Player = () => {
  const { currentTrack, setIsPlaying } = useContext(PlayerContext);

  const [currentSong, setCurrentSong] = useState("");

  useEffect(() => {
    setCurrentSong(currentTrack.audio);
  }, [currentTrack]);

  return (
    <div className="player">
      <div className="music-info">
        <BarAnimation track={currentTrack}></BarAnimation>
      </div>
      <div className="music-player">
        <AudioPlayer
          src={currentSong}
          onPlay={(e) => setIsPlaying(true)}
          onPause={(e) => setIsPlaying(false)}
        />
      </div>
    </div>
  );
};

export default Player;
