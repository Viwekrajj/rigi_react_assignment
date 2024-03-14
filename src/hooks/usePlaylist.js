import React, { createContext, useContext, useState } from "react";
import { mediaJSON } from "../data/playlist";

const PLAYLIST_CONTEXT = createContext({
  playlist: [],
  setPlaylist: () => {},
  currentVideoIndex: null,
  setCurrentVideoIndex: () => {},
});

export const PlaylistProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState(mediaJSON);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  return (
    <PLAYLIST_CONTEXT.Provider
      value={{
        playlist,
        setPlaylist,
        currentVideoIndex,
        setCurrentVideoIndex,
      }}
    >
      {children}
    </PLAYLIST_CONTEXT.Provider>
  );
};

export const usePlaylist = () => useContext(PLAYLIST_CONTEXT);
