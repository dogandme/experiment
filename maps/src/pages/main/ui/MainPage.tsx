'use client';

import { GoogleMapsProvider } from '@/app/maps';
import { GoogleMap } from '@/features/Map/ui';
const MainPage = () => {
  return (
    <GoogleMapsProvider>
      <div className='phone'>
        <GoogleMap />
      </div>
    </GoogleMapsProvider>
  );
};

export default MainPage;
