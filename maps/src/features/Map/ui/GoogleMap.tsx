'use client';

import { MapGround } from '@/entities/Map/ui';
import FootStamp from '@/entities/Map/ui/FootStamp';
import MyHousePin from '@/entities/Map/ui/MyHousePin';
import useInitialPosition from '../hooks/useInitalPosition';
import { MarkerWithInfoWindow } from '@/shared/ui/WittInfoWindow';
// import useRecordedPosition from '../hooks/useRecordedPosition';

const useRecordedPosition = () => {
  const currentLocation = { lat: 37.6635392, lng: 127.0382592 };
  const recordedPosition = Array.from({ length: 10 }, (_, index) => ({
    lat: currentLocation.lat + Math.random() * 0.001,
    lng: currentLocation.lng + Math.random() * 0.001,
  }));

  return recordedPosition;
};

const useNearStores = () => {
  const currentLocation = { lat: 37.6635392, lng: 127.0382592 };
  const nearStores = Array.from({ length: 10 }, (_, index) => ({
    position: {
      lat: currentLocation.lat + Math.random() * 0.001,
      lng: currentLocation.lng + Math.random() * 0.001,
    },
    body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae laboriosam aliquid soluta nesciunt culpa molestias asperiores error',
  }));

  return nearStores;
};

const Content = ({ str }: { str: string }) => {
  return <div style={{ color: 'black' }}>{str}</div>;
};

/* 서버에서 데이터를 받아온 셈 치자 */

const GoogleMap = () => {
  const initalPosition = useInitialPosition();
  const recordedPosition = useRecordedPosition();
  const nearStores = useNearStores();

  return (
    <MapGround defaultCenter={initalPosition}>
      <MyHousePin position={initalPosition} />
      {recordedPosition &&
        recordedPosition.map((position, index) => (
          <FootStamp key={index} position={position} />
        ))}
      {nearStores &&
        nearStores.map((info, index) => (
          <MarkerWithInfoWindow
            position={info.position}
            key={index}
            InsideComponent={<Content str={info.body} />}
          />
        ))}
    </MapGround>
  );
};

export default GoogleMap;
