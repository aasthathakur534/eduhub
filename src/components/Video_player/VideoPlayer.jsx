import React, { useEffect, useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/VideoPlayer.mp4'

const VideoPlayer = ({ playState }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (playState) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [playState]);

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`}>
      <video ref={videoRef} src={video} muted controls />
    </div>
  );
}

export default VideoPlayer;
