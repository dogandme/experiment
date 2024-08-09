'use client';

import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import useRealTimePositions from '../hooks/useRealTimePosition';

const TrackingPins = () => {
  const { RealTimePositions } = useRealTimePositions();

  return (
    <>
      {
        // ! idx 를 key 로 사용하는 것은 안티패턴이다.
        RealTimePositions.map((position, idx) => (
          <AdvancedMarker key={idx} position={position}>
            <Pin />
          </AdvancedMarker>
        ))
      }
    </>
  );
};

export default TrackingPins;
