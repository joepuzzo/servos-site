import { Flex } from '@adobe/react-spectrum';
import Carousel from '../components/Carousel';
import { useEffect } from 'react';
import { Card } from '../components/Card';

export const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <>
      <Card next="team">
        <div>
          <h1>OUR MISSION</h1>
          <p style={{ fontSize: '50px' }}>Let Humans Do Human Things</p>
        </div>
      </Card>
      <Card id="team" >
        <Flex direction="column" alignItems="center" justifyContent="center">
          <h1>THE TEAM</h1>
          <Flex direction="row" alignItems="center" justifyContent="center" gap="size-400" wrap>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              gap="size-200"
              width="40%"
              UNSAFE_style={{ minWidth: '300px' }}
            >
              <h2>Joe Puzzo</h2>
              <img src="/me.png" width="100%"></img>
            </Flex>
            {/* <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              gap="size-200"
              width="40%"
              UNSAFE_style={{ minWidth: '300px' }}
            >
              <h2>Matt Mayer</h2>
              <img src="/matt.png" width="100%"></img>
            </Flex> */}
          </Flex>
        </Flex>
      </Card>
      {/* <Card id="about-images" next="robotjs">
        <h1>Some Photos</h1>
        <Carousel
          const
          images={[
            'RobotConvo.jpg',
            'MassRobotics.jpg',
            'UsAtMassRobotics.jpg',
            'Snowman.jpg',
            'cup-levels.jpg'
          ]}
        />
      </Card>
      <Card id="robotjs">
        <h1>Youtube Channel</h1>
        <div style={{ height: '70vh', width: '90%' }}>
          <iframe
            width="100%"
            height="100%"
            style={{ borderRadius: '10px' }}
            src="https://www.youtube.com/embed/7j5LjHlqpBo?si=8qUVm-H-9xLCePX1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </Card> */}
    </>
  );
};
