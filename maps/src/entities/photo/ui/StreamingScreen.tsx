import { forwardRef } from 'react';

type StreamingScreenProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  isCaptured: boolean;
};

const StreamingScreen = forwardRef<HTMLVideoElement, StreamingScreenProps>(
  function StreamingScreen(props, ref) {
    return (
      <video
        {...props}
        ref={ref}
        autoPlay
        playsInline
        style={{
          display: props.isCaptured ? 'none' : 'block',
        }}
      ></video>
    );
  },
);

export default StreamingScreen;
