import { APIProvider, Map } from '@vis.gl/react-google-maps';
import useCurrentPosition from '../hooks/useCurrentPosition';

const GoogleMap = ({ children }: { children: React.ReactNode }) => {
  const { currentPosition } = useCurrentPosition();

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string}>
      <Map
        defaultZoom={19}
        center={currentPosition}
        mapId={process.env.NEXT_PUBLIC_GOOGLE_MAP_ID}
      >
        {children}
      </Map>
    </APIProvider>
  );
};

export default GoogleMap;
