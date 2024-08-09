import { LiveScreen } from '@/features/Phone/ui';

const Phone = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        minWidth: '400px',
        minHeight: '600px',
        border: '1px solid white',
      }}
    >
      <LiveScreen />
    </div>
  );
};

export default Phone;
