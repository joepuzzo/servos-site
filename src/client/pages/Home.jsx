import { ActionButton, Flex } from '@adobe/react-spectrum';
import { ServoFace } from '../components/ServoFace';
import useMedia from '../hooks/useMedia';
import ChevronDown from '@spectrum-icons/workflow/ChevronDown';
import Carousel from '../components/Carousel';
import { Card } from '../components/Card';
import { useEffect, useRef } from 'react';
import { Tooltip } from '../components/Tooltip/Tooltip';
import { StatusMessage } from '../components/StatusMessage';
import { GLTFViewer } from '../components/GLTFViewer';
// import { YouTubePlayer } from '../components/YoutubePlayer';

export const Home = () => {
  const { isDesktopUp } = useMedia();

  const controlRef = useRef();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const down = () => {
    // Get the target element
    const card = document.getElementById('intro');

    // Get the height of the fixed header
    const headerHeight = document.querySelector('header').offsetHeight; // Replace 'header' with the correct selector for your header

    // Calculate position to scroll to (element's top position - header's height)
    const positionToScrollTo = card.getBoundingClientRect().top - headerHeight;

    // Scroll to the calculated position
    window.scrollTo({
      top: positionToScrollTo,
      behavior: 'smooth' // Optional: for smooth scrolling
    });

    controlRef.current.playVideo();
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
     
      
      <Card id="intro" next="assembly-viewer">
        <p className="big-text">Say goodbye to messy cooler ice with Servo's Iced Bucket. This lightweight, 6-lb capacity dispenser delivers hygienic, touch-free ice with a patented auger system, perfect for tailgates, BBQs, camping, and events.</p>
      </Card>
      
      <Card id="assembly-viewer" next="simple">
        <div className="title">
          <h1>TAKE IT FOR A SPIN</h1>
        </div>
        <GLTFViewer modelPath="/AssemblyV12-Ice.gltf" />
      </Card>

      <Card id="simple" next="practical">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <img src="/FilledDispense2.png" width="60%" />
            </div>
          <div style={{ flex: 1 }}>
            <h4 className="big-text">
              Simple Operation
            </h4>
            <p>
              We wanted to keep things as simple and intuitive as possible. Simply Turn the knob and get cold clean ice!
            </p>
          </div>
        </div>
      </Card>
      <Card id="practical" next="why">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <img src="/DispenserLeftNoCup.png" width="80%" />
            </div>
          <div style={{ flex: 1 }}>
            <h4 className="big-text">
            Portable & Practical

            </h4>
            <p>
            Lightweight with a handle that doubles as a stand, maintaining the ideal dispensing angle.
            </p>
          </div>
        </div>
      </Card>
      <Card id="why">
        <p className="big-text">Why Drink Dirty Cooler Ice When You Can Have Cold Clean Ice</p>
      </Card>
      {/* <Card id="images">
        <div className="title">
        <h1>THE ICED BUCKET</h1>
        </div>
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
      </Card> */}
    </>
  );
};
