import { AdvancedMarker } from '@vis.gl/react-google-maps';
import { PinProps } from '../../../entities/Map/ui/types';

const MyHousePin = ({ position, title }: PinProps) => {
  return (
    <AdvancedMarker position={position} title={title}>
      <span style={{ fontSize: '10rem' }}>🏠</span>
    </AdvancedMarker>
  );
};

export default MyHousePin;
