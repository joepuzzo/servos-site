import { ActionButton, Flex } from '@adobe/react-spectrum';
import { ServoFace } from '../components/ServoFace';
import useMedia from '../hooks/useMedia';
import ChevronDown from '@spectrum-icons/workflow/ChevronDown';
import Carousel from '../components/Carousel';
import { Card } from '../components/Card';
import { useEffect, useRef } from 'react';
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
    const card = document.getElementById('perfect-pour');

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
      <Card id="perfect-pour" next="bedroom-bot">
        <h1>PERFECT POUR EVERY TIME</h1>
        <img alt="perfect pour" src="cup-levels.png" className="card-image" />
      </Card>
      <Card id="bedroom-bot" next="images">
        <h1>PROGRESS</h1>
        <Flex
          width="100%"
          justifyContent="center"
          alignItems="center"
          wrap
          direction="row"
          gap="size-400"
        >
          <iframe
            height="100%"
            id="player"
            style={{ borderRadius: '10px' }}
            src="https://www.youtube.com/embed/aQg6p615RTU?enablejsapi=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          {/* <YouTubePlayer videoId="aQg6p615RTU" controlRef={controlRef} /> */}
          <iframe
            height="100%"
            style={{ borderRadius: '10px', minWidth: '70%' }}
            src="https://www.youtube.com/embed/7j5LjHlqpBo?si=8qUVm-H-9xLCePX1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Flex>
      </Card>
      <Card id="images" next="robot-viewer">
        <h1>PICTURES</h1>
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
      <Card id="robot-viewer">
        <h1>SOFTWARE</h1>
        <embed
          src="https://robot-viewer-qfmqx.ondigitalocean.app/"
          style={{
            width: '100%',
            height: '70vh',
            marginTop: '2rem',
            borderRadius: '10px',
            maxWidth: '1000px'
          }}
        />
      </Card>
    </>
  );
};
