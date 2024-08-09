import { useState } from 'react';
import { useClientEffect } from '@/shared/hooks/devhoney';

import { getCurrentPosition } from '../model/position';

// TODO initalPosition 을 서버에서 받아와서 어떻게 할 수 없나 ? 생각해보자 ..
const initalSettingPosition = { lat: 37.553441, lng: 126.9696769 };

const useInitialPosition = (): LatLngLiteral => {
  const [initalPosition, setInitialPosition] = useState<LatLngLiteral>(
    initalSettingPosition,
  );

  useClientEffect(() => {
    const initalizePosition = async () => {
      const position = await getCurrentPosition();
      if (position !== null) {
        setInitialPosition(position);
      }
    };
    initalizePosition();
  }, []);

  return initalPosition;
};

export default useInitialPosition;
