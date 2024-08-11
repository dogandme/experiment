import { forwardRef } from 'react';

type CapturedScreenProps = React.CanvasHTMLAttributes<HTMLCanvasElement> & {
  isCaptured: boolean;
};

const CapturedScreen = forwardRef<HTMLCanvasElement, CapturedScreenProps>(
  function StreamingScreen(props, ref) {
    return (
      <canvas
        {...props}
        ref={ref}
        style={{
          display: props.isCaptured ? 'block' : 'none',
        }}
      ></canvas>
    );
  },
);

export default CapturedScreen;
