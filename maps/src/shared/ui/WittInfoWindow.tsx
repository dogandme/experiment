import { useState } from 'react';
import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps';

// 이 컴포넌트는 shared 에 있는게 맞을까 ?
export const MarkerWithInfoWindow = ({
  position,
  InsideComponent,
}: {
  position: LatLngLiteral;
  InsideComponent: JSX.Element;
}) => {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infoWindowShown, setInfoWindowShown] = useState(false);

  const handleMarkerClick = () => setInfoWindowShown(!infoWindowShown);
  const handleClose = () => setInfoWindowShown(false);

  return (
    <>
      <AdvancedMarker
        position={position}
        ref={markerRef}
        onClick={handleMarkerClick}
      >
        <span style={{ fontSize: '5rem' }}>🩻</span>
      </AdvancedMarker>
      {infoWindowShown && (
        <InfoWindow anchor={marker} onCloseClick={handleClose}>
          {InsideComponent}
        </InfoWindow>
      )}
    </>
  );
};
