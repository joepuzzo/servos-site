import { ActionButton, Flex } from '@adobe/react-spectrum';
import { ServoFace } from '../components/ServoFace';
import useMedia from '../hooks/useMedia';
import ChevronDown from '@spectrum-icons/workflow/ChevronDown';
import Carousel from '../components/Carousel';

export const Home = () => {
  const { isDesktopUp } = useMedia();

  const down = () => {
    document.getElementById('card').scrollIntoView();
  };

  return (
    <>
      <div className="landing-face">
        <ServoFace width={isDesktopUp ? '40%' : '60%'} />
        <h1>Sip Smarter</h1>
        <button className="round-button" onClick={down}>
          <ChevronDown size="XL" />
        </button>
      </div>
      <Flex direction="column" alignItems="center" gap="size-100">
        <div id="card" className="card">
          <Carousel
            const
            images={['RobotConvo.jpg', 'MassRobotics.jpg', 'UsAtMassRobotics.jpg', 'Snowman.jpg']}
          />
        </div>
      </Flex>
    </>
  );
};
