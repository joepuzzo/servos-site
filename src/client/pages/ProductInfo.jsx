import { Flex } from '@adobe/react-spectrum';
import { useEffect, useState } from 'react';
import * as media from '../utils';

export const ProductInfo = () => {
  const [isTabletUp, setIsTabletUp] = useState(media.isTabletPortraitUp());

  useEffect(() => {
    const handleResize = () => {
      setIsTabletUp(media.isTabletPortraitUp());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const features = [
    'Holds 5 lbs of Ice',
    'Dispenses 98% Ice',
    'Easy to carry',
    'Easy to Refill',
    'Self Serving',
    'Easily Cleanable',
    '1/2 Turn = 1/2 Cup',
    'Off Grid',
    'Sanitary',
    'Keeps Ice Cold'
  ];

  return (
    <>
      <div className="product-info-section">
        <div className="product-info-container">
          {/* Left Side - Image */}
          <Flex
            direction="column"
            alignItems="flex-start"
            justifyContent="center"
            UNSAFE_className="product-info-image-container"
          >
            <div style={{ width: '100%', maxWidth: '600px' }}>
              <img src="/renderings/Ice-Left.jpg" width="100%" alt="Servo's Iced Bucket" />
            </div>
          </Flex>

          {/* Right Side - Content */}
          <Flex
            direction="column"
            gap="size-200"
            UNSAFE_className="product-info-content-container"
          >
            {/* Title */}
            <Flex direction="column" gap="size-50">
              <h1 className="product-info-h1">SERVO'S ICED BUCKET</h1>
              <h2 className="product-info-h2">Future Of Ice Dispensing</h2>
            </Flex>

            {/* Features Grid */}
            <Flex direction="column" gap="size-100">
              <h3 className="product-info-h3-features">FEATURES</h3>
              <div className="product-info-features-grid">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      fontWeight: '400',
                      textAlign: 'left'
                    }}
                  >
                    • {feature}
                  </div>
                ))}
              </div>
            </Flex>

            {/* Market Info */}
            <Flex direction="column" gap="size-50">
              <h3 className="product-info-h3">A LOVE FOR ICE</h3>
              <p className="product-info-p">
                A 2020 survey by OnePoll on behalf of Bosch found that 51% of Americans identified
                themselves as 'ice-obsessed,' consuming up to 116 glasses of ice per month.
              </p>
            </Flex>

            {/* Problem Statement */}
            <Flex direction="column" gap="size-100">
              <h3 className="product-info-h3">LIQUID BUT NO ICE</h3>
              <p className="product-info-p" style={{ marginBottom: '10px', lineHeight: '1.3' }}>
                We have solved liquids but why have we not solved for Ice?
              </p>
              <Flex direction={isTabletUp ? 'row' : 'column'} gap={isTabletUp ? 'size-600' : 'size-300'} alignItems="flex-start">
                <Flex direction="column" alignItems="flex-start" gap="size-100">
                  <div className="product-info-icon" style={{ color: '#22c55e' }}>✓</div>
                  <div className="product-info-icon-label">Liquid Dispensers</div>
                </Flex>
                <Flex direction="column" alignItems="flex-start" gap="size-100">
                  <div className="product-info-icon" style={{ color: '#ef4444' }}>✗</div>
                  <div className="product-info-icon-label">Ice Dispensers</div>
                </Flex>
              </Flex>
            </Flex>

            {/* Sanitary */}
            <Flex direction="column" gap="size-50">
              <h3 className="product-info-h3">NO DIRTY HANDS</h3>
              <p className="product-info-p">
                Say goodbye to reaching into coolers for ice. Our sanitary dispensing system keeps
                your hands clean and your ice fresh.
              </p>
              <Flex direction="row" gap="size-300" alignItems="center" UNSAFE_style={{ marginTop: '5px' }}>
                <div className="product-info-icon-small" style={{ color: '#ef4444' }}>✗</div>
                <div className="product-info-icon-label">From Cooler Ice</div>
              </Flex>
            </Flex>
          </Flex>
        </div>
      </div>

      {/* Second Section - Content Left, Image Right */}
      <div className="product-info-section-no-center">
        <div className="product-info-container" style={{ alignItems: 'flex-start' }}>
          {/* Left Side - Image */}
          <Flex
            direction="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            UNSAFE_className="product-info-image-container"
          >
            <div style={{ width: '100%', maxWidth: '600px' }}>
              <img src="/renderings/Cup-Right.jpg" width="100%" alt="Servo's Iced Bucket with Cup" />
            </div>
          </Flex>

          {/* Right Side - Content */}
          <Flex
            direction="column"
            gap="size-200"
            UNSAFE_className="product-info-content-container"
          >
            {/* Title */}
            <Flex direction="column" gap="size-50">
              <h1 className="product-info-h1-secondary">Self-Serve, Touch-Free Ice</h1>
              <h2 className="product-info-h2-secondary">Fresh, Clean Ice, Anytime, Anywhere!</h2>
            </Flex>

            {/* Description */}
            <Flex direction="column" gap="size-100">
              <p className="product-info-p">
                Say goodbye to messy cooler ice with <em>Servo's Iced Bucket</em>. This lightweight, 5-lb capacity dispenser delivers hygienic, touch-free ice with a patented auger system, perfect for tailgates, BBQs, camping, and events.
              </p>
            </Flex>

            {/* Why Choose Section */}
            <Flex direction="column" gap="size-100">
              <h3 className="product-info-h3" style={{ marginBottom: '10px' }}>Why Choose The Iced Bucket:</h3>
              <Flex direction="column" gap="size-150">
                <div className="product-info-bullet">
                  <strong>Touch-Free Operation:</strong> Manual crank dispenses ice without contact for maximum hygiene.
                </div>
                <div className="product-info-bullet">
                  <strong>Smart Auger System:</strong> Lifts ice to a chute positioned above a 16 oz cup for effortless pouring.
                </div>
                <div className="product-info-bullet">
                  <strong>Portable & Practical:</strong> Lightweight with a handle that doubles as a stand, maintaining the ideal dispensing angle.
                </div>
                <div className="product-info-bullet">
                  <strong>One-of-a-Kind:</strong> The only mobile, touch-free ice dispenser on the market.
                </div>
              </Flex>
            </Flex>

            {/* Product Details */}
            <Flex direction="column" gap="size-100">
              <div className="product-info-detail">
                <strong>Perfect For:</strong> Tailgates, barbecues, camping, parties, and catering.
              </div>
              <div className="product-info-detail">
                <strong>Capacity:</strong> 5 lbs of ice
              </div>
              <div className="product-info-detail">
                <strong>Material:</strong> Durable, lightweight plastic
              </div>
            </Flex>

            {/* Call to Action */}
            <Flex direction="column" gap="size-50">
              <p className="product-info-p">
                Stay Cool, Stay Clean. Elevate your next event with <em>Servo's Iced Bucket</em> for hassle-free, sanitary ice dispensing.
              </p>
              <a
                href="https://patents.google.com/patent/US12259172B1"
                target="_blank"
                rel="noopener noreferrer"
                className="product-info-patent"
              >
                Patent: US12259172B1
              </a>
            </Flex>
          </Flex>
        </div>
      </div>

      {/* Prototypes Section */}
      <div className="product-info-section">
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap="size-400"
          width="100%"
          maxWidth="1600px"
          UNSAFE_style={{ gap: '40px' }}
        >
          <hr style={{ 
            width: '100%', 
            maxWidth: '800px', 
            border: 'none', 
            borderTop: '1px solid #e5e7eb', 
            margin: '40px 0 20px 0' 
          }} />
          <h2 className="product-info-images-title">Images</h2>
          <Flex
            direction={isTabletUp ? 'row' : 'column'}
            gap={isTabletUp ? 'size-800' : 'size-400'}
            alignItems="flex-start"
            justifyContent="center"
            wrap
            width="100%"
          >
            <Flex direction="column" alignItems="center" gap="size-300" width={isTabletUp ? '45%' : '100%'} UNSAFE_style={{ minWidth: isTabletUp ? '300px' : '0' }}>
              <img
                src="/Prototype-Fake-Ice.jpg"
                alt="First Rotomolded Prototype"
                style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }}
              />
              <h3 className="product-info-image-label">First Rotomolded Prototype</h3>
            </Flex>
            <Flex direction="column" alignItems="center" gap="size-300" width={isTabletUp ? '45%' : '100%'} UNSAFE_style={{ minWidth: isTabletUp ? '300px' : '0' }}>
              <img
                src="/Prototype-Candy.jpg"
                alt="Prototype Candy"
                style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }}
              />
              <h3 className="product-info-image-label">3D Printed Prototype With Candy</h3>
            </Flex>
            <Flex direction="column" alignItems="center" gap="size-300" width={isTabletUp ? '45%' : '100%'} UNSAFE_style={{ minWidth: isTabletUp ? '300px' : '0' }}>
              <img
                src="/Side-By-Side-Print-vs-Roto.jpg"
                alt="Side by Side Print vs Rotomolded"
                style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }}
              />
              <h3 className="product-info-image-label">Side by Side: Print vs Rotomolded</h3>
            </Flex>
            <Flex direction="column" alignItems="center" gap="size-300" width={isTabletUp ? '45%' : '100%'} UNSAFE_style={{ minWidth: isTabletUp ? '300px' : '0' }}>
              <img
                src="/Factory.jpg"
                alt="Factory Manufacturing"
                style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }}
              />
              <h3 className="product-info-image-label">Factory Manufacturing</h3>
            </Flex>
          </Flex>
          <br />
          <hr style={{ 
            width: '100%', 
            maxWidth: '800px', 
            border: 'none', 
            borderTop: '1px solid #e5e7eb', 
            margin: '40px 0 0 0' 
          }} />
          
          <h2 className="product-info-images-title">Videos</h2>
          
          {/* YouTube Shorts */}
          <Flex 
            direction={isTabletUp ? 'row' : 'column'} 
            alignItems="center" 
            gap="size-400" 
            width="100%"
            justifyContent="center"
            wrap
            UNSAFE_style={{ marginTop: '60px' }}
          >
            <Flex direction="column" alignItems="center" gap="size-300" width={isTabletUp ? '45%' : '100%'} UNSAFE_style={{ minWidth: isTabletUp ? '300px' : '0' }}>
              <h3 className="product-info-image-label">Product Demonstration</h3>
              <div className="product-info-youtube-container">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/uAvyZDfeVe8"
                  title="YouTube Short"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ borderRadius: '10px' }}
                />
              </div>
            </Flex>
            <Flex direction="column" alignItems="center" gap="size-300" width={isTabletUp ? '45%' : '100%'} UNSAFE_style={{ minWidth: isTabletUp ? '300px' : '0' }}>
              <h3 className="product-info-image-label">How I created It</h3>
              <div className="product-info-youtube-container">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/HEYeVNRq0-o"
                  title="YouTube Short"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ borderRadius: '10px' }}
                />
              </div>
            </Flex>
          </Flex>
        </Flex>
      </div>
    </>
  );
};
