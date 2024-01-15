import logo from "./logo.svg";
import "./App.scss";
import Player from "./components/Player/Player";
import Songs from "./components/Songs/Songs";
import { useState } from "react";
import { Provider } from "react";
import {PlayerContext} from "./components/PlayerContext";

function App() {
  const [currentTrack, setCurrentTrack] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="App">
      <PlayerContext.Provider
        value={{
          currentTrack,
          setCurrentTrack,
          isPlaying,
          setIsPlaying,
          isPaused,
          setIsPaused,
        }}
      >
        <div className="main">
          <div className="songs-container">
            <Songs ></Songs>
          </div>
          <div className="player-container">
            <Player></Player>
          </div>
        </div>
      </PlayerContext.Provider>
    </div>
  );
}

export default App;
