import { Flex } from '@adobe/react-spectrum';
import { ServoFace } from '../components/ServoFace';
import useMedia from '../hooks/useMedia';

export const Home = () => {
  const { isDesktopUp } = useMedia();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 100px)',
        width: '100vw'
      }}
    >
      <ServoFace width={isDesktopUp ? '40%' : '70%'} />
    </div>
  );
};
