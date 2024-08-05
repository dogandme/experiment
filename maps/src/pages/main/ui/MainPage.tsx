'use client';

import { GoogleMapsProvider } from '@/app/maps';
import { GoogleMap, TrackingPins } from '@/features/maps/ui';

const MainPage = () => {
  return (
    <GoogleMapsProvider>
      <div className='h-[100vh]'>
        <GoogleMap>
          <TrackingPins />
        </GoogleMap>
      </div>
    </GoogleMapsProvider>
  );
};

export default MainPage;
