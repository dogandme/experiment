import { MapProps } from '@vis.gl/react-google-maps';

export interface PinProps {
  position: LatLngLiteral;
  title?: string;
}

export interface MapGroundProps extends MapProps {
  children: React.ReactNode;
}
