import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentDC, setCurrentDC] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    // DC logo animation - slower timing
    const dcInterval = setInterval(() => {
      setCurrentDC(prev => prev + 1);
    }, 1200);

    // Complete loading after 4 seconds
    const completeTimeout = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onLoadingComplete();
      }, 500);
    }, 4000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(dcInterval);
      clearTimeout(completeTimeout);
    };
  }, [onLoadingComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="loading-screen">
      {/* Loading Bar */}
      <div className="loading-bar-container">
        <div 
          className="loading-bar" 
          style={{ width: `${loadingProgress}%` }}
        ></div>
      </div>

      {/* Fixed DC Tile with Moving Text */}
      <div className="dc-tile-container">
        <div className="dc-tile">
          <div className="dc-text-container">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`dc-text ${index === currentDC % 5 ? 'active' : ''}`}
                style={{
                  transform: `translateY(${(index - (currentDC % 5)) * 100}px)`
                }}
              >
                DC
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
