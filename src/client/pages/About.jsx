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
        <h1>OUR MISSION</h1>
        <p>
          At SERVOS, we reimagine culinary artistry by integrating advanced robotics into the heart
          of modern cuisine. Our mission is to seamlessly blending technology and tradition. We
          strive to elevate the dining experience through precision, consistency, and innovation,
          liberating human creativity from the bounds of routine tasks.{' '}
        </p>
      </Card>
      <Card id="team" next="about-images">
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
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            gap="size-200"
            width="40%"
            UNSAFE_style={{ minWidth: '300px' }}
          >
            <h2>Matt Mayer</h2>
            <img src="/matt.png" width="100%"></img>
          </Flex>
        </Flex>
      </Card>
      <Card id="about-images">
        <Carousel
          const
          images={['RobotConvo.jpg', 'MassRobotics.jpg', 'UsAtMassRobotics.jpg', 'Snowman.jpg']}
        />
      </Card>
    </>
  );
};
