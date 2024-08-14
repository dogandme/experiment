'use client';

import { Map, MapCameraChangedEvent } from '@vis.gl/react-google-maps';
import { NEXT_PUBLIC_GOOGLE_MAP_ID } from '@/shared/constant/env';
import { useMapStore } from '../hooks/store';

const MapGround = ({ children }: { children: React.ReactNode }) => {
  const setCenter = useMapStore((state) => state.setCenter);
  const setZoom = useMapStore((state) => state.setZoom);
  const setBounds = useMapStore((state) => state.setBounds);

  return (
    <Map
      mapId={NEXT_PUBLIC_GOOGLE_MAP_ID}
      defaultCenter={{ lat: 37.553441, lng: 126.9696769 }}
      defaultZoom={20}
      onZoomChanged={(camera: MapCameraChangedEvent) => {
        setZoom(camera.detail.zoom);
      }}
      onCameraChanged={(camera: MapCameraChangedEvent) => {
        setCenter(camera.detail.center);
      }}
      onBoundsChanged={(camera: MapCameraChangedEvent) => {
        setBounds(camera.detail.bounds);
      }}
    >
      {children}
    </Map>
  );
};

export default MapGround;
