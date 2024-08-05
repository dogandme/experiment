'use client';

import { APIProvider } from '@vis.gl/react-google-maps';

// 전역에 사용되는게 아닌데도 app 이 맞나 ?
const GoogleMapsProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string}>
      {children}
    </APIProvider>
  );
};

export default GoogleMapsProvider;
