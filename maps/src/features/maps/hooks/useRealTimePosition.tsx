'use client';

import { useState, useEffect } from 'react';
import { RealTimeDelay } from '../constant';

import type { Position } from './types';

const useRealTimePositions = () => {
  const [RealTimePositions, setRealTimePositions] = useState<Position[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const successCallback = (position: GeolocationPosition) => {
      const { latitude: lat, longitude: lng } = position.coords;
      setRealTimePositions((prevPositions) => {
        if (prevPositions.length === 0) {
          return [{ lat, lng }];
        }
        return [...prevPositions, { lat, lng }];
      });
    };

    const errorCallback = () => {};
    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    };

    const timerId = setInterval(() => {
      navigator.geolocation.getCurrentPosition(
        successCallback,
        errorCallback,
        options,
      );
    }, RealTimeDelay);

    return () => {
      clearInterval(timerId);
    };
  });

  return {
    RealTimePositions,
    setRealTimePositions,
  };
};

export default useRealTimePositions;
