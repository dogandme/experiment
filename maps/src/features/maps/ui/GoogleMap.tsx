import {
  AdvancedMarker,
  APIProvider,
  Map,
  Marker,
  Pin,
  useMap,
  useMapsLibrary,
} from '@vis.gl/react-google-maps';
import useCurrentPosition from '../hooks/useCurrentPosition';
import { useEffect, useRef, useState } from 'react';
import { Position } from '../hooks/types';

const GoogleMap = ({ children }: { children: React.ReactNode }) => {
  const { currentPosition } = useCurrentPosition();
  const [markerPositions, setMarkerPositions] = useState<Position[]>([]);
  const map = useMap();

  useEffect(() => {
    if (!map) {
      return;
    }

    const handleMapLoaded = () => {
      alert('hi!');
    };

    map.addListener('tilesloaded', handleMapLoaded);
  }, [map]);

  /* marker를 찍는 useEffect */
  useEffect(() => {
    if (!currentPosition) {
      return;
    }
    const newMarkers = Array.from({ length: 20 }).map(() => ({
      lat: currentPosition.lat + (Math.random() - 0.5) * 0.001,
      lng: currentPosition.lng + (Math.random() - 0.5) * 0.001,
    }));
    setMarkerPositions(newMarkers);
  }, [currentPosition]);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string}>
      <Map
        defaultZoom={19}
        center={currentPosition}
        mapId={process.env.NEXT_PUBLIC_GOOGLE_MAP_ID}
      >
        {markerPositions.map((position, index) => (
          <AdvancedMarker key={index} position={position}>
            <span style={{ fontSize: '3rem' }}>⭐</span>
          </AdvancedMarker>
        ))}
        {children}
      </Map>
    </APIProvider>
  );
};

export default GoogleMap;
