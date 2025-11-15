import { Flex } from '@adobe/react-spectrum';
import { useEffect } from 'react';

export const ProductInfo = () => {
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
          padding: '20px 40px',
          boxSizing: 'border-box'
        }}
      >
        <Flex
          direction="row"
          alignItems="center"
          justifyContent="center"
          wrap
          width="100%"
          maxWidth="1600px"
          UNSAFE_style={{
            gap: '60px'
          }}
        >
        {/* Left Side - Image */}
        <Flex
          direction="column"
          alignItems="flex-start"
          justifyContent="center"
          width="45%"
          UNSAFE_style={{ minWidth: '350px', flex: '0 0 45%' }}
        >
          <div style={{ width: '100%', maxWidth: '600px' }}>
            <img src="/DispenserLeftNoCup.png" width="100%" alt="Servo's Iced Bucket" />
          </div>
        </Flex>

        {/* Right Side - Content */}
        <Flex
          direction="column"
          gap="size-200"
          width="50%"
          UNSAFE_style={{ minWidth: '450px', flex: '1 1 50%' }}
        >
          {/* Title */}
          <Flex direction="column" gap="size-50">
            <h1
              style={{
                margin: '0',
                fontSize: '6rem',
                lineHeight: '1.1',
                fontWeight: 'bold',
                letterSpacing: '2px',
                textAlign: 'left'
              }}
            >
              SERVO'S ICED BUCKET
            </h1>
            <h2
              style={{
                margin: '0',
                fontSize: '3rem',
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
                fontSize: '3rem',
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
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '8px 30px',
                fontSize: '2rem',
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
                fontSize: '2.5rem',
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
                fontSize: '2rem',
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
                fontSize: '2.5rem',
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
                fontSize: '2rem',
                lineHeight: '1.3',
                fontWeight: '300',
                textAlign: 'left'
              }}
            >
              We have solved liquids but why have we not solved for Ice?
            </p>
            <Flex direction="row" gap="size-600" alignItems="flex-start">
              <Flex direction="column" alignItems="flex-start" gap="size-100">
                <div style={{ fontSize: '4rem', fontWeight: 'bold', color: '#22c55e' }}>✓</div>
                <div style={{ fontSize: '1.8rem', fontWeight: '500', textAlign: 'left' }}>
                  Liquid Dispensers
                </div>
              </Flex>
              <Flex direction="column" alignItems="flex-start" gap="size-100">
                <div style={{ fontSize: '4rem', fontWeight: 'bold', color: '#ef4444' }}>✗</div>
                <div style={{ fontSize: '1.8rem', fontWeight: '500', textAlign: 'left' }}>
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
                fontSize: '2.5rem',
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
                fontSize: '2rem',
                lineHeight: '1.4',
                fontWeight: '300',
                textAlign: 'left'
              }}
            >
              Say goodbye to reaching into coolers for ice. Our sanitary dispensing system keeps
              your hands clean and your ice fresh.
            </p>
            <Flex direction="row" gap="size-300" alignItems="center" UNSAFE_style={{ marginTop: '5px' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#ef4444' }}>✗</div>
              <div style={{ fontSize: '1.8rem', fontWeight: '500', textAlign: 'left' }}>
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
          padding: '60px 40px',
          boxSizing: 'border-box'
        }}
      >
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap="size-600"
          width="100%"
          maxWidth="1600px"
        >
          <h2
            style={{
              margin: '0',
              fontSize: '4rem',
              fontWeight: 'bold',
              letterSpacing: '2px',
              textAlign: 'center'
            }}
          >
            PROTOTYPES
          </h2>
          <Flex
            direction="row"
            gap="size-800"
            alignItems="flex-start"
            justifyContent="center"
            wrap
            width="100%"
          >
            <Flex direction="column" alignItems="center" gap="size-300" width="45%" UNSAFE_style={{ minWidth: '300px' }}>
              <img
                src="/Prototype-Candy.jpg"
                alt="Prototype Candy"
                style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }}
              />
              <h3
                style={{
                  margin: '0',
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  textAlign: 'center'
                }}
              >
                3D Printed Prototype With Candy
              </h3>
            </Flex>
            <Flex direction="column" alignItems="center" gap="size-300" width="45%" UNSAFE_style={{ minWidth: '300px' }}>
              <img
                src="/Prototype-Fake-Ice.jpg"
                alt="First Rotomolded Prototype"
                style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }}
              />
              <h3
                style={{
                  margin: '0',
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  textAlign: 'center'
                }}
              >
                First Rotomolded Prototype
              </h3>
            </Flex>
          </Flex>
        </Flex>
      </div>
    </>
  );
};
