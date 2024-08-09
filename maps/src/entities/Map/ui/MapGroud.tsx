import { Map } from '@vis.gl/react-google-maps';
import { NEXT_PUBLIC_GOOGLE_MAP_ID } from '@/shared/constant/env';

import type { MapGroundProps } from './types';

const MapGround = (props: MapGroundProps) => {
  const { children, ...mapProps } = props;

  return (
    <Map
      mapId={NEXT_PUBLIC_GOOGLE_MAP_ID}
      defaultCenter={{ lat: 37.553441, lng: 126.9696769 }}
      defaultZoom={20}
      style={{ width: '100%', height: '100%', zIndex: 1 }}
      {...mapProps}
    >
      {children}
    </Map>
  );
};

export default MapGround;
