import { ActionButton, Flex } from '@adobe/react-spectrum';
import { ServoFace } from '../components/ServoFace';
import useMedia from '../hooks/useMedia';
import ChevronDown from '@spectrum-icons/workflow/ChevronDown';
import Carousel from '../components/Carousel';
import { Card } from '../components/Card';
import { useEffect, useRef } from 'react';
import { Tooltip } from '../components/Tooltip/Tooltip';
import { StatusMessage } from '../components/StatusMessage';
// import { YouTubePlayer } from '../components/YoutubePlayer';

const INFO = {
  PERFECT_POUR: {
    TITLE: 'Perfect Pour',
    TEXT: 'We utilize advanced robotics force sensing in order to accuratley pour the same amount of liquid each time!'
  },
  PROGRESS: {
    TITLE: 'Progress',
    TEXT: 'We have successfully integrated with the Square Point of Sale (POS) system, enabling us to take orders seamlessly either through Square or our custom user interface.'
  },
  UPDATES: {
    TITLE: 'Updates',
    TEXT: 'Recently we updated our system to work on both sides of the table, where the taps live on the left and normal dispensing lives on the right.'
  },
  HIGHLIGHTS: {
    TITLE: 'Highlights',
    TEXT: 'A few highlights featuring our display at Mass Robotics in Boston. Note how we previously used a static gripper but have since upgraded to use the flexiv grav gripper.'
  }
};

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
        <div className="title">
          <h1>PERFECT POUR EVERY TIME</h1>
          <Tooltip title={INFO.PERFECT_POUR.TITLE} hint="Click These Icons For Details">
            {INFO.PERFECT_POUR.TEXT}
          </Tooltip>
        </div>
        <StatusMessage title={INFO.PERFECT_POUR.TITLE}>{INFO.PERFECT_POUR.TEXT}</StatusMessage>
        <img alt="perfect pour" src="cup-levels.jpg" className="card-image" />
      </Card>
      <Card id="bedroom-bot" next="latest-update">
        <div className="title">
          <h1>PROGRESS</h1>
          <Tooltip title={INFO.PROGRESS.TITLE}>{INFO.PROGRESS.TEXT}</Tooltip>
        </div>
        <StatusMessage title={INFO.PROGRESS.TITLE}>{INFO.PROGRESS.TEXT}</StatusMessage>
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
      <Card id="latest-update" next="images">
        <div className="title">
          <h1>LATEST UPDATES</h1>
          <Tooltip title={INFO.UPDATES.TITLE}>{INFO.UPDATES.TEXT}</Tooltip>
        </div>
        <StatusMessage title={INFO.UPDATES.TITLE}>{INFO.UPDATES.TEXT}</StatusMessage>
        <Flex
          width="100%"
          justifyContent="center"
          alignItems="center"
          wrap
          direction="row"
          gap="size-400"
        >
          {/* <YouTubePlayer videoId="aQg6p615RTU" controlRef={controlRef} /> */}
          <iframe
            height="100%"
            style={{ borderRadius: '10px', minWidth: '70%' }}
            src="https://www.youtube.com/embed/o1-UVvS9Ero?si=v3v6JDJ_Bcg_lvI-"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Flex>
      </Card>
      <Card id="images" next="robot-viewer">
        <div className="title">
          <h1>HIGHLIGHTS</h1>
          <Tooltip title={INFO.HIGHLIGHTS.TITLE}>{INFO.HIGHLIGHTS.TEXT}</Tooltip>
        </div>
        <StatusMessage title={INFO.HIGHLIGHTS.TITLE}>{INFO.HIGHLIGHTS.TEXT}</StatusMessage>
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
            minWidth: '70%',
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
