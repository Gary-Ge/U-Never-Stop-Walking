import React from "react";

const Video: React.FC = () => {
  return (
    <div className="vdo-container">
        <video autoPlay loop muted plays-inline className="back-video">
            <source src="video.mp4" type="video/webm" />
        </video>
        <div className="content">
            <h1>U</h1>
            <h2>NEVER</h2>
            <h3>STOP WALKING</h3>
            <a href="#">PLAY FOR FREE</a>
        </div>
    </div>
  )
}

export default Video
