'use client';

import { Map, MapCameraChangedEvent } from '@vis.gl/react-google-maps';
import { NEXT_PUBLIC_GOOGLE_MAP_ID } from '@/shared/constant/env';
import { useMapStore } from '../hooks/store';
import useInitialPosition from '../hooks/useInitalPosition';

const MapGround = ({ children }: { children: React.ReactNode }) => {
  const initalPosition = useInitialPosition();
  const setCenter = useMapStore((state) => state.setCenter);
  const setZoom = useMapStore((state) => state.setZoom);
  const setBounds = useMapStore((state) => state.setBounds);
  return (
    <Map
      mapId={NEXT_PUBLIC_GOOGLE_MAP_ID}
      defaultCenter={initalPosition}
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
