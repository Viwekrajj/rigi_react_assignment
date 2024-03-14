import "../style.css";
import React, { useCallback, useEffect, useRef, useState } from "react";
import VideoControls from "./VideoControls";
import VideoProgressBar from "./VideoProgressBar";
import { usePlaylist } from "../hooks/usePlaylist";
const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);
  const { currentVideoIndex, playlist, setCurrentVideoIndex } = usePlaylist();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [playbackspeedicon, setPlaybackspeedicon] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    setCurrentTime(0);
    setIsPlaying(false);
    setIsLoading(false);
    video.pause();
    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleLoadedMetadata = () => setDuration(video.duration);

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [currentVideoIndex]);

  const handlePlayPause = () => {
    setIsPlaying((prev) => {
      if (prev) videoRef.current.pause();
      else videoRef.current.play();
      return !prev;
    });
  };

  const handleSeek = React.useCallback((e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    videoRef.current.currentTime = newTime;
  }, []);

  const handleSpeedChange = (speed) => {
    setPlaybackSpeed(speed);
    videoRef.current.playbackRate = speed;
    setPlaybackspeedicon(!playbackspeedicon);
  };

  const playNextVideo = useCallback(() => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  }, [setCurrentVideoIndex, playlist]);

  const playPreviousVideo = useCallback(() => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? playlist.length - 1 : prevIndex - 1
    );
  }, [setCurrentVideoIndex, playlist]);

  const handleVideoEnded = () => playNextVideo();

  const handleMute = () => {
    setIsMuted((prevMuted) => {
      const newMuted = !prevMuted;
      videoRef.current.muted = newMuted;
      setVolume(newMuted ? 0 : 1); // Set volume to 0 if muted, else set it to 1
      return newMuted;
    });
  };

  const handlePictureInPicture = () => {
    const video = videoRef.current;
    if (document.pictureInPictureEnabled) {
      video.requestPictureInPicture();
    }
  };
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
    setIsMuted(newVolume === 0);
  };

  const handleFullScreen = () => {
    const video = videoRef.current;
    if (video.requestFullscreen) video.requestFullscreen();
    else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
    else if (video.mozRequestFullScreen) video.mozRequestFullScreen();
    else if (video.msRequestFullscreen) video.msRequestFullscreen();
  };

  return (
    <>
      <div className="position-relative w-100">
        {isLoading && (
          <div className="loader">
            <div
              class="spinner-border"
              role="status"
              style={{ width: "3rem", height: "3rem" }}
            />
          </div>
        )}
        <video
          key={currentVideoIndex}
          onClick={handlePlayPause}
          className="video-grid"
          ref={videoRef}
          controls={false}
          autoPlay
          onEnded={handleVideoEnded}
          onWaiting={() => setIsLoading(true)}
          onPlaying={() => setIsLoading(false)}
          onSeeked={() => setIsLoading(false)}
        >
          <source
            src={playlist[currentVideoIndex]?.sources[0]}
            type="video/mp4"
          />
        </video>
        <div className="video-player w-100">
          <VideoProgressBar
            currentTime={currentTime}
            duration={duration}
            handleSeek={handleSeek}
          />
          <VideoControls
            isPlaying={isPlaying}
            handlePlayPause={handlePlayPause}
            playNextVideo={playNextVideo}
            playPreviousVideo={playPreviousVideo}
            handlePictureInPicture={handlePictureInPicture}
            handleMute={handleMute}
            isMuted={isMuted}
            handleFullScreen={handleFullScreen}
            handleVolumeChange={handleVolumeChange}
            volume={volume}
            handleSpeedChange={handleSpeedChange}
            setPlaybackSpeed={setPlaybackSpeed}
            playbackSpeed={playbackSpeed}
            playbackspeedicon={playbackspeedicon}
            setPlaybackspeedicon={setPlaybackspeedicon}
            currentTime={currentTime}
            duration={duration}
            setVolume={setVolume}
            videoRef={videoRef}
          />
        </div>
      </div>
      <p className="video-description">
        {" "}
        {playlist[currentVideoIndex]?.description}
      </p>
    </>
  );
};
export default VideoPlayer;
