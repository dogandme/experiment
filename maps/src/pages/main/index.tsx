'use client';

import GoogleProvider from '@/app/GoogleProvider';
import { GoogleMap } from '@/features/Map/ui';

const MainPage = () => {
  return (
    <GoogleProvider>
      <GoogleMap />
    </GoogleProvider>
  );
};

export default MainPage;
