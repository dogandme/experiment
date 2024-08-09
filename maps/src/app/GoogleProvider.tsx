'use client';

import { APIProvider } from '@vis.gl/react-google-maps';
import { NEXT_PUBLIC_GOOGLE_MAP_API_KEY } from '@/shared/constant/env';

const GoogleProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <APIProvider apiKey={NEXT_PUBLIC_GOOGLE_MAP_API_KEY}>
      {children}
    </APIProvider>
  );
};

export default GoogleProvider;
