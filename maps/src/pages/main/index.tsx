'use client';

import GoogleProvider from '@/app/GoogleProvider';
import { MapWidget } from '@/widgets/Map/ui';

const MainPage = () => {
  return (
    <GoogleProvider>
      <MapWidget />
    </GoogleProvider>
  );
};

export default MainPage;
