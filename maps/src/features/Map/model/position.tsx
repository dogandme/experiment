import { getEnvironment, isServer } from '@/shared/lib/next';
import { GeolocationOptions } from '../constant';

const successCallback = (
  position: GeolocationPosition,
  resolve: (value: LatLngLiteral) => void,
) => {
  const coords: LatLngLiteral = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };
  resolve(coords);
};

/* TODO 위치 정보 허용에 대해 거부했을 경우의 에러 핸들링이 필요함 */
const errorCallback = (error: any, reject: (reason?: any) => void) => {
  console.error(error);
  reject(error);
};

export const getCurrentPosition = async (): Promise<LatLngLiteral | null> => {
  const global = getEnvironment();

  if (isServer(global)) {
    return null;
  }

  const { geolocation } = global.navigator;
  return new Promise((resolve, reject) => {
    geolocation.getCurrentPosition(
      (position) => successCallback(position, resolve),
      (error) => errorCallback(error, reject),
      GeolocationOptions,
    );
  });
};
