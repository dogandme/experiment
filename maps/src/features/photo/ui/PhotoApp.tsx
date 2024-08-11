'use client';

import PhotoNavBar from '@/widgets/photo/ui';
import StreamingScreen from '@/entities/photo/ui/StreamingScreen';
import Button from '@/shared/ui/Button';
import CapturedScreen from '@/entities/photo/ui/CapturedScreen';

import { usePhotoLogic } from '../hooks/domain';

const wrapperStyle = {
  border: '1px solid white',
  minWidth: '400px',
  minHeight: '600px',
};

const PhotoButtonWrapper = {
  display: 'flex',
  justifyContent: 'center',
  margin: '10px 0',
};

const PhotoApp = () => {
  const {
    photoUrl,
    isCaptured,
    streamingRef,
    photoRef,
    handleCapture,
    handleReCapture,
  } = usePhotoLogic();

  return (
    <div style={wrapperStyle}>
      <PhotoNavBar photoUrl={photoUrl} isCaptured={isCaptured} />
      <div>
        <StreamingScreen ref={streamingRef} isCaptured={isCaptured} />
        <CapturedScreen ref={photoRef} isCaptured={isCaptured} />
      </div>
      <div style={PhotoButtonWrapper}>
        {isCaptured ? (
          <Button onClick={handleReCapture}>다시 촬영</Button>
        ) : (
          <Button onClick={handleCapture}>사진 찍기!</Button>
        )}
      </div>
    </div>
  );
};

export default PhotoApp;
