import React, { useEffect } from "react";
import {
  fullScreen,
  miniPlayer,
  mute,
  next,
  pause,
  play,
  previous,
  setting,
  volumeIcon,
} from "../../Assets";
import CustomSvg from "../CustomSvg";

const VideoControls = ({
  isPlaying,
  handlePlayPause,
  playNextVideo,
  playPreviousVideo,
  handleMute,
  isMuted,
  handleFullScreen,
  handlePictureInPicture,
  handleVolumeChange,
  volume,
  playbackSpeed,
  handleSpeedChange,
  playbackspeedicon,
  setPlaybackspeedicon,
  duration,
  currentTime,
  setVolume,
  videoRef
}) => {
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log("event",event)
      switch (event.code) {
        case "Space":
          handlePlayPause();
          break;
        case "ArrowLeft":
          videoRef.current.currentTime -= 5; // Skip back 5 seconds
          break;
        case "ArrowRight":
          videoRef.current.currentTime += 5; ;// Skip forward 5 seconds
          break;
        case "ArrowUp":
          setVolume((prevVolume) => Math.min(prevVolume + 0.1, 1)); // Increase volume by 10%
          break;
        case "ArrowDown":
          setVolume((prevVolume) => Math.max(prevVolume - 0.1, 0)); // Decrease volume by 10%
          break;
        case "M":
          handleMute();
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handlePlayPause, handleMute, setVolume]);
  return (
    <div className="video-controler ">
      <span className="d-flex defaultStyle">
        <span >{formatTime(currentTime)}</span>  / {" "}
        <span  >{formatTime(duration)}</span>
        <CustomSvg className="ms-3" src={previous} onClick={playPreviousVideo} />
        <CustomSvg
          className="mx-3"
          src={isPlaying ? pause : play}
          onClick={handlePlayPause}
        />
        <CustomSvg src={next} onClick={playNextVideo} />
        {isMuted ? (
          <CustomSvg className="ms-5" src={mute} onClick={handleMute} />
        ) : (
          <CustomSvg className="ms-5" src={volumeIcon} onClick={handleMute} />
        )}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </span>

      <span>
        <span className="speed-selector">
          <CustomSvg
            height={30}
            width={30}
            src={setting}
            onClick={() => setPlaybackspeedicon(!playbackspeedicon)}
          />
          {playbackspeedicon && (
            <span className="dropdown">
              <span className="option" onClick={() => handleSpeedChange("0.5")}>
                0.5x
              </span>
              <span className="option" onClick={() => handleSpeedChange("1")}>
                1x
              </span>
              <span className="option" onClick={() => handleSpeedChange("1.5")}>
                1.5x
              </span>
              <span className="option" onClick={() => handleSpeedChange("2")}>
                2x
              </span>
            </span>
          )}
        </span>
        <CustomSvg
          height={32}
          width={32}
          className="mx-3"
          src={miniPlayer}
          onClick={handlePictureInPicture}
        />
        <CustomSvg
          height={20}
          width={20}
          src={fullScreen}
          onClick={handleFullScreen}
        />
      </span>
    </div>
  );
};

export default VideoControls;
