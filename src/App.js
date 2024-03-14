// App.js
import "./style.css";
import React from "react";
import { VideoPlayer, Playlist } from "./Component";
import { PlaylistProvider } from "./hooks/usePlaylist";

const App = () => {
  return (
    <PlaylistProvider>
      <div className="container-fluid ">
        <h1 className=" my-3">React Video Player</h1>
        <div className="row">
          <div className="col-md-9">
            <VideoPlayer />
          </div>
          <div className="col-md-3 playlist-view overflow-auto">
            <Playlist />
          </div>
        </div>
      </div>
    </PlaylistProvider>
  );
};

export default App;
