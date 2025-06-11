'use client';
import React, { useState } from 'react';

const Video = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 w-full aspect-video relative overflow-hidden shadow-lg bg-black">
      {!playVideo ? (
        <>
          <img
            src="video_boy.jpg"
            alt="Video Thumbnail"
            className="w-full h-full object-cover absolute inset-0"
          />
          <button
            onClick={() => setPlayVideo(true)}
            className="absolute inset-0 flex items-center justify-center z-10"
            aria-label="Play video"
          >
            <img
              src="whiteplay.png"
              alt="Play Button"
              className="w-12 sm:w-16 md:w-20 lg:w-24 h-auto"
            />
          </button>
        </>
      ) : (
        <iframe
          className="w-full h-full absolute inset-0"
          src="https://www.youtube.com/embed/r8pDXO6zRUg?autoplay=1&controls=0&modestbranding=1&rel=0&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default Video;