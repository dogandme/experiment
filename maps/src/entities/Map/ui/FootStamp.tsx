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

export default FootStamp;
