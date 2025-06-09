'use client';
import React, { useState } from 'react';

const Video = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className=" py-12 sm:py-16 md:py-20 lg:py-24 min-h-[300px] 2xl:h-[400px] bg-black w-full aspect-video relative overflow-hidden shadow-lg">
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
