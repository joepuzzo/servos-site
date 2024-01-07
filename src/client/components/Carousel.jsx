import React, { useState, useEffect, useMemo } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex);
    }, 5000); // Change image every 3 seconds

    return () => clearTimeout(timer);
  }, [currentImageIndex, images.length]);

  //   const displayed = useMemo(() => {
  //     if (currentImageIndex === 0) {
  //       return [images[images.length - 1], images[0], images[1]];
  //     }
  //     if (currentImageIndex === images.length - 1) {
  //       return [images[0], images[1], images[2]];
  //     }
  //     return [
  //       images[currentImageIndex - 1],
  //       images[currentImageIndex],
  //       images[currentImageIndex + 1]
  //     ];
  //   }, [currentImageIndex]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`Slide ${index}`}
          className={index === currentImageIndex ? 'active' : ''}
        />
      ))}
    </div>
  );
};

export default Carousel;
