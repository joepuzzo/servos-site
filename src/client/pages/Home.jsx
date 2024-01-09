import { ActionButton, Flex } from '@adobe/react-spectrum';
import { ServoFace } from '../components/ServoFace';
import useMedia from '../hooks/useMedia';
import ChevronDown from '@spectrum-icons/workflow/ChevronDown';
import Carousel from '../components/Carousel';
import { Card } from '../components/Card';

export const Home = () => {
  const { isDesktopUp } = useMedia();

  // const down = () => {
  //   document.getElementById('card').scrollIntoView();
  // };

  const down = () => {
    // Get the target element
    const card = document.getElementById('images');

    // Get the height of the fixed header
    const headerHeight = document.querySelector('header').offsetHeight; // Replace 'header' with the correct selector for your header

    // Calculate position to scroll to (element's top position - header's height)
    const positionToScrollTo = card.getBoundingClientRect().top - headerHeight;

    // Scroll to the calculated position
    window.scrollTo({
      top: positionToScrollTo,
      behavior: 'smooth' // Optional: for smooth scrolling
    });
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
      <Card id="images">
        <Carousel
          const
          images={['RobotConvo.jpg', 'MassRobotics.jpg', 'UsAtMassRobotics.jpg', 'Snowman.jpg']}
        />
      </Card>
    </>
  );
};
