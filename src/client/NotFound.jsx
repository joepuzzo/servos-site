import React from 'react';
// import NotFoundSVG from '../notfound.svg';
import doge from '/doge.svg';
import useMedia from './hooks/useMedia';
import { Flex } from '@adobe/react-spectrum';

export const NotFound = () => {
  const { isDesktopUp } = useMedia();

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="calc(100vh - 200px)"
    >
      <img src={doge} alt="Not Found" width={isDesktopUp ? '40%' : '60%'} />
    </Flex>
  );
};
