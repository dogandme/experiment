import { useClientEffect } from '@/shared/hooks/devhoney';
import { useState } from 'react';

import { DELAY } from '../constant';
import { getCurrentPosition } from '../model/position';

const useRecordedPosition = () => {
  const [recordedPosition, setRecoredPosition] = useState<LatLngLiteral[]>([]);

  useClientEffect(() => {
    const intervalId = setInterval(async () => {
      const coords = await getCurrentPosition();
      if (coords === null) {
        return;
      }

      // ! 난수 조금만 더해주기
      const _coords = {
        lat: coords.lat + Math.random() * 0.001,
        lng: coords.lng + Math.random() * 0.001,
      };

      setRecoredPosition((prev) => [...prev, _coords]);
    }, DELAY);

    return () => clearInterval(intervalId);
  }, []);

  return { recordedPosition, setRecoredPosition };
};

export default useRecordedPosition;
