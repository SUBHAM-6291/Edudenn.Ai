/*'use client';

import { useState, useEffect } from 'react';

const Preloader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 flex items-center justify-center bg-black z-50 transition-opacity duration-500 ${
          isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {isLoading && (
          <img
            src="/eduden.png"
            alt="Loading..."
            className="h-[80px] w-auto object-contain"
            onLoad={() => console.log('Image loaded')}
            onError={() => console.error('Image failed to load')}
          />
        )}
      </div>

      <div
        className={`transition-opacity duration-500 ${
          isLoading ? 'opacity-0 hidden' : 'opacity-100 block'
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default Preloader;*/