import { useEffect, useState } from 'react';
import type { Position } from './types';

const useCurrentPosition = (): {
  currentPosition: Position | null;
  setCurrentPosition: React.Dispatch<React.SetStateAction<Position | null>>;
} => {
  const [currentPosition, setCurrentPosition] = useState<Position | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const successCallback = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      setCurrentPosition({ lat: latitude, lng: longitude });
    };

    const errorCallback = () => {};

    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(
      successCallback,
      errorCallback,
      options,
    );
  }, []);

  return { currentPosition, setCurrentPosition };
};

export default useCurrentPosition;
