import { AdvancedMarker } from '@vis.gl/react-google-maps';
import { PinProps } from '../../../entities/Map/ui/types';
const FootStamp = ({ position, title }: PinProps) => {
  return (
    <AdvancedMarker position={position} title={title}>
      <span style={{ fontSize: '5rem' }}>🐶</span>
    </AdvancedMarker>
  );
};

interface Coords {
  lat: number;
  lng: number;
}

const GoogleMap = () => {
  const { zoom } = useZoom();
  const { mapCenter: Coords } = useMapCenter();

  return (
    <Map>
      <MapContext.Provider value={mapCenter}>
        <ConditionalRendering
          condition={zoom >= 10}
          on={<Cluster />}
          off={<Marker />}
        />
      </MapContext.Provider>
    </Map>
  );
};

export default FootStamp;
