import { Flex } from '@adobe/react-spectrum';
import Carousel from '../components/Carousel';
import { useEffect } from 'react';

export const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <>
      <Flex direction="column" alignItems="center" gap="size-400">
        <div className="card">
          <h1>OUR MISSION</h1>
          <p>
            At SERVOS, we reimagine culinary artistry by integrating advanced robotics into the
            heart of modern cuisine. Our mission is to seamlessly blending technology and tradition.
            We strive to elevate the dining experience through precision, consistency, and
            innovation, liberating human creativity from the bounds of routine tasks.{' '}
          </p>
        </div>
        <div className="card">
          <Carousel
            const
            images={['RobotConvo.jpg', 'MassRobotics.jpg', 'UsAtMassRobotics.jpg', 'Snowman.jpg']}
          />
        </div>
      </Flex>
    </>
  );
};
