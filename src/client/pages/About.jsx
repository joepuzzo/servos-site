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
          <h1>THE TEAM</h1>
          <Flex direction="row" alignItems="center" justifyContent="center" gap="size-400">
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              gap="size-200"
              width="40%"
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
            >
              <h2>Matt Mayer</h2>
              <img src="/matt.png" width="100%"></img>
            </Flex>
          </Flex>
        </div>
        {/* <div className="card">
          <h1>THE TEAM</h1>
          <img src="/team.png" width="80%"></img>
        </div> */}
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
