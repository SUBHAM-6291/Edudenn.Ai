'use client';
import React, { useState } from 'react';

const Video = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="w-full aspect-video relative overflow-hidden shadow-lg">
      {!playVideo ? (
        <>
          <img
            src="video_boy.jpg"
            alt="Video Thumbnail"
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => setPlayVideo(true)}
            className="absolute inset-0 flex items-center justify-center"
          >
            <img
              src="whiteplay.png"
              alt="Play Button"
              className="w-20 h-20"
            />
          </button>
        </>
      ) : (
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/r8pDXO6zRUg?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Video;