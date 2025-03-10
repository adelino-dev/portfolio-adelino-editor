import React, { useRef, useEffect, useState } from 'react';
import './Project.css';

export const Project = ({ title, description, videoType, videoIds }) => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, []);

  const updateArrows = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      setTimeout(updateArrows, 300);
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      setTimeout(updateArrows, 300);
    }
  };

  return (
    <div>
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
      
      {/* Evita overflow horizontal global */}
      <div className="video-carousel-container">
        {canScrollLeft && <button className="arrow left" onClick={scrollLeft}>←</button>}
        
        <div className="video-carousel" ref={carouselRef} onScroll={updateArrows}>
          {videoIds.map((id, index) => (
            <div key={index} className="video-slide">
              <iframe
                src={videoType === "Instagram"
                  ? `https://www.instagram.com/reel/${id}/embed`
                  : `https://www.youtube.com/embed/${id}`}
                allowFullScreen
                loading="lazy"
                className={`video-iframe video-iframe-${videoType === 'Instagram' ? 'instagram' : 'youtube'}`}
              ></iframe>
            </div>
          ))}
        </div>
        
        {canScrollRight && <button className="arrow right" onClick={scrollRight}>→</button>}
      </div>
    </div>
  );
};