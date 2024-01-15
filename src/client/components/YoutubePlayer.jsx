import React, { useState, useEffect } from 'react';

export const YouTubePlayer = ({ videoId, controlRef }) => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    // This function gets called when the YouTube iFrame API is ready
    window.onYouTubeIframeAPIReady = () => {
      const newPlayer = new window.YT.Player('player', {
        height: '100%',
        width: '350px',
        videoId: videoId
      });
      setPlayer(newPlayer);
      controlRef.current = newPlayer;
    };

    // Load the YouTube iFrame API if it's not already loaded
    // if (!window.YT) {
    //   const tag = document.createElement('script');
    //   tag.src = 'https://www.youtube.com/iframe_api';
    //   const firstScriptTag = document.getElementsByTagName('script')[0];
    //   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    // } else {
    window.onYouTubeIframeAPIReady();
    // }
  }, [videoId]);

  const handlePlayVideo = () => {
    player.playVideo();
  };

  return <div id="player" style={{ borderRadius: '10px' }}></div>;
};
