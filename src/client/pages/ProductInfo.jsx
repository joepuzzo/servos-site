import { Flex } from '@adobe/react-spectrum';
import { useEffect, useState } from 'react';
import * as media from '../utils';

export const ProductInfo = () => {
  const [isTabletUp, setIsTabletUp] = useState(media.isTabletPortraitUp());
  const [isDesktopUp, setIsDesktopUp] = useState(media.isDesktopUp());

  useEffect(() => {
    const handleResize = () => {
      setIsTabletUp(media.isTabletPortraitUp());
      setIsDesktopUp(media.isDesktopUp());
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
      <div
        style={{
          minHeight: 'calc(100vh - 75px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isTabletUp ? '20px 40px' : '20px 15px',
          boxSizing: 'border-box'
        }}
      >
        <Flex
          direction={isTabletUp ? 'row' : 'column'}
          alignItems="center"
          justifyContent="center"
          wrap
          width="100%"
          maxWidth="1600px"
          UNSAFE_style={{
            gap: isTabletUp ? '60px' : '30px'
          }}
        >
        {/* Left Side - Image */}
        <Flex
          direction="column"
          alignItems="flex-start"
          justifyContent="center"
          width={isTabletUp ? '45%' : '100%'}
          UNSAFE_style={{ 
            minWidth: isTabletUp ? '350px' : '0',
            flex: isTabletUp ? '0 0 45%' : '1 1 100%'
          }}
        >
          <div style={{ width: '100%', maxWidth: '600px' }}>
            <img src="/DispenserLeftNoCup.png" width="100%" alt="Servo's Iced Bucket" />
          </div>
        </Flex>

        {/* Right Side - Content */}
        <Flex
          direction="column"
          gap="size-200"
          width={isTabletUp ? '50%' : '100%'}
          UNSAFE_style={{ 
            minWidth: isTabletUp ? '450px' : '0',
            flex: isTabletUp ? '1 1 50%' : '1 1 100%'
          }}
        >
          {/* Title */}
          <Flex direction="column" gap="size-50">
            <h1
              style={{
                margin: '0',
                fontSize: isDesktopUp ? '6rem' : isTabletUp ? '4rem' : '3rem',
                lineHeight: '1.1',
                fontWeight: 'bold',
                letterSpacing: isDesktopUp ? '2px' : '1px',
                textAlign: 'left'
              }}
            >
              SERVO'S ICED BUCKET
            </h1>
            <h2
              style={{
                margin: '0',
                fontSize: isDesktopUp ? '3rem' : isTabletUp ? '2rem' : '1.5rem',
                fontWeight: '600',
                letterSpacing: '1px',
                opacity: 0.9,
                textAlign: 'left'
              }}
            >
              Future Of Ice Dispensing
            </h2>
          </Flex>

          {/* Features Grid */}
          <Flex direction="column" gap="size-100">
            <h3
              style={{
                margin: '0 0 10px 0',
                fontSize: isDesktopUp ? '3rem' : isTabletUp ? '2.2rem' : '1.8rem',
                fontWeight: 'bold',
                letterSpacing: '1px',
                textAlign: 'left'
              }}
            >
              FEATURES
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isTabletUp ? 'repeat(2, 1fr)' : '1fr',
                gap: isTabletUp ? '8px 30px' : '8px 0',
                fontSize: isDesktopUp ? '2rem' : isTabletUp ? '1.5rem' : '1.2rem',
                lineHeight: '1.4',
                textAlign: 'left'
              }}
            >
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
            <h3
              style={{
                margin: '0',
                fontSize: isDesktopUp ? '2.5rem' : isTabletUp ? '2rem' : '1.5rem',
                fontWeight: 'bold',
                letterSpacing: '1px',
                textAlign: 'left'
              }}
            >
              A LOVE FOR ICE
            </h3>
            <p
              style={{
                margin: '0',
                fontSize: isDesktopUp ? '2rem' : isTabletUp ? '1.4rem' : '1.1rem',
                lineHeight: '1.4',
                fontWeight: '300',
                textAlign: 'left'
              }}
            >
              A 2020 survey by OnePoll on behalf of Bosch found that 51% of Americans identified
              themselves as 'ice-obsessed,' consuming up to 116 glasses of ice per month.
            </p>
          </Flex>

          {/* Problem Statement */}
          <Flex direction="column" gap="size-100">
            <h3
              style={{
                margin: '0',
                fontSize: isDesktopUp ? '2.5rem' : isTabletUp ? '2rem' : '1.5rem',
                fontWeight: 'bold',
                letterSpacing: '1px',
                textAlign: 'left'
              }}
            >
              LIQUID BUT NO ICE
            </h3>
            <p
              style={{
                margin: '0 0 10px 0',
                fontSize: isDesktopUp ? '2rem' : isTabletUp ? '1.4rem' : '1.1rem',
                lineHeight: '1.3',
                fontWeight: '300',
                textAlign: 'left'
              }}
            >
              We have solved liquids but why have we not solved for Ice?
            </p>
            <Flex direction={isTabletUp ? 'row' : 'column'} gap={isTabletUp ? 'size-600' : 'size-300'} alignItems="flex-start">
              <Flex direction="column" alignItems="flex-start" gap="size-100">
                <div style={{ fontSize: isDesktopUp ? '4rem' : isTabletUp ? '3rem' : '2.5rem', fontWeight: 'bold', color: '#22c55e' }}>✓</div>
                <div style={{ fontSize: isDesktopUp ? '1.8rem' : isTabletUp ? '1.4rem' : '1.1rem', fontWeight: '500', textAlign: 'left' }}>
                  Liquid Dispensers
                </div>
              </Flex>
              <Flex direction="column" alignItems="flex-start" gap="size-100">
                <div style={{ fontSize: isDesktopUp ? '4rem' : isTabletUp ? '3rem' : '2.5rem', fontWeight: 'bold', color: '#ef4444' }}>✗</div>
                <div style={{ fontSize: isDesktopUp ? '1.8rem' : isTabletUp ? '1.4rem' : '1.1rem', fontWeight: '500', textAlign: 'left' }}>
                  Ice Dispensers
                </div>
              </Flex>
            </Flex>
          </Flex>

          {/* Sanitary */}
          <Flex direction="column" gap="size-50">
            <h3
              style={{
                margin: '0',
                fontSize: isDesktopUp ? '2.5rem' : isTabletUp ? '2rem' : '1.5rem',
                fontWeight: 'bold',
                letterSpacing: '1px',
                textAlign: 'left'
              }}
            >
              NO DIRTY HANDS
            </h3>
            <p
              style={{
                margin: '0',
                fontSize: isDesktopUp ? '2rem' : isTabletUp ? '1.4rem' : '1.1rem',
                lineHeight: '1.4',
                fontWeight: '300',
                textAlign: 'left'
              }}
            >
              Say goodbye to reaching into coolers for ice. Our sanitary dispensing system keeps
              your hands clean and your ice fresh.
            </p>
            <Flex direction="row" gap="size-300" alignItems="center" UNSAFE_style={{ marginTop: '5px' }}>
              <div style={{ fontSize: isDesktopUp ? '3rem' : isTabletUp ? '2.5rem' : '2rem', fontWeight: 'bold', color: '#ef4444' }}>✗</div>
              <div style={{ fontSize: isDesktopUp ? '1.8rem' : isTabletUp ? '1.4rem' : '1.1rem', fontWeight: '500', textAlign: 'left' }}>
                From Cooler Ice
              </div>
            </Flex>
          </Flex>
        </Flex>
        </Flex>
      </div>

      {/* Prototypes Section */}
      <div
        style={{
          minHeight: 'calc(100vh - 75px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isTabletUp ? '60px 40px' : '40px 15px',
          boxSizing: 'border-box'
        }}
      >
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap={isTabletUp ? 'size-600' : 'size-400'}
          width="100%"
          maxWidth="1600px"
        >
          <h2
            style={{
              margin: '0',
              fontSize: isDesktopUp ? '4rem' : isTabletUp ? '3rem' : '2rem',
              fontWeight: 'bold',
              letterSpacing: isDesktopUp ? '2px' : '1px',
              textAlign: 'center'
            }}
          >
            Images
          </h2>
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
              <h3
                style={{
                  margin: '0',
                  fontSize: isDesktopUp ? '2.5rem' : isTabletUp ? '2rem' : '1.3rem',
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  textAlign: 'center'
                }}
              >
                First Rotomolded Prototype
              </h3>
            </Flex>
            <Flex direction="column" alignItems="center" gap="size-300" width={isTabletUp ? '45%' : '100%'} UNSAFE_style={{ minWidth: isTabletUp ? '300px' : '0' }}>
              <img
                src="/Prototype-Candy.jpg"
                alt="Prototype Candy"
                style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }}
              />
              <h3
                style={{
                  margin: '0',
                  fontSize: isDesktopUp ? '2.5rem' : isTabletUp ? '2rem' : '1.3rem',
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  textAlign: 'center'
                }}
              >
                3D Printed Prototype With Candy
              </h3>
            </Flex>
            <Flex direction="column" alignItems="center" gap="size-300" width={isTabletUp ? '45%' : '100%'} UNSAFE_style={{ minWidth: isTabletUp ? '300px' : '0' }}>
              <img
                src="/Side-By-Side-Print-vs-Roto.jpg"
                alt="Side by Side Print vs Rotomolded"
                style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }}
              />
              <h3
                style={{
                  margin: '0',
                  fontSize: isDesktopUp ? '2.5rem' : isTabletUp ? '2rem' : '1.3rem',
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  textAlign: 'center'
                }}
              >
                Side by Side: Print vs Rotomolded
              </h3>
            </Flex>
            <Flex direction="column" alignItems="center" gap="size-300" width={isTabletUp ? '45%' : '100%'} UNSAFE_style={{ minWidth: isTabletUp ? '300px' : '0' }}>
              <img
                src="/Factory.jpg"
                alt="Factory Manufacturing"
                style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }}
              />
              <h3
                style={{
                  margin: '0',
                  fontSize: isDesktopUp ? '2.5rem' : isTabletUp ? '2rem' : '1.3rem',
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  textAlign: 'center'
                }}
              >
                Factory Manufacturing
              </h3>
            </Flex>
          </Flex>
          
          {/* YouTube Short */}
          <Flex direction="column" alignItems="center" gap="size-300" width="100%">
            <div
              style={{
                width: '100%',
                maxWidth: isDesktopUp ? '600px' : isTabletUp ? '500px' : '100%',
                aspectRatio: '9/16',
                borderRadius: '10px',
                overflow: 'hidden'
              }}
            >
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
        </Flex>
      </div>
    </>
  );
};
