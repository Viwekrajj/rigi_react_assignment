import React from "react";

const VideoProgressBar = ({ currentTime, duration, handleSeek }) => {
 

  return (
    <input
      type="range"
      min="0"
      max={duration}
      value={currentTime}
      onChange={handleSeek}
      style={{
        width: "100%",
        background: `linear-gradient(to right, #4caf50 0%, #4caf50 ${
          (currentTime / duration) * 100
        }%, #fff ${(currentTime / duration) * 100}%, #fff 100%)`
      }}
    />
  );
};

export default VideoProgressBar;
