'use client';

import MapGround from './MapGround';
import FootStamp from '@/entities/Map/ui/FootStamp';
import MyHousePin from '@/entities/Map/ui/MyHousePin';
import useInitialPosition from '../hooks/useInitalPosition';
// import useRecordedPosition from '../hooks/useRecordedPosition';

const useRecordedPosition = () => {
  const currentLocation = { lat: 37.6635392, lng: 127.0382592 };
  const recordedPosition = Array.from({ length: 10 }, (_, index) => ({
    lat: currentLocation.lat + Math.random() * 0.01 * (index % 2 ? 1 : -1),
    lng: currentLocation.lng + Math.random() * 0.01 * (index % 2 ? 1 : -1),
  }));

  return recordedPosition;
};

/* 서버에서 데이터를 받아온 셈 치자 */

const GoogleMap = () => {
  const initalPosition = useInitialPosition();
  // recoredPosition은 서버에서 받아온 데이터라고 가정, 1000개의 마커
  const recordedPosition = useRecordedPosition();

  return (
    <MapGround>
      <MyHousePin position={initalPosition} />
      {recordedPosition &&
        recordedPosition.map((position, index) => (
          <FootStamp key={index} position={position} />
        ))}
    </MapGround>
  );
};

export default GoogleMap;
