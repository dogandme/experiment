import { GoogleMap } from '@/features/Map/ui';
import Timer from '@/features/Timer/ui/Timer';

const MapWidget = () => (
  <section
    style={{
      width: '100vw',
      height: '100vh',
    }}
  >
    <GoogleMap />
    <Timer />
  </section>
);

export default MapWidget;
