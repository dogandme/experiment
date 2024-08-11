import BackForward from '@/shared/ui/BackFoward';

const PhotoNavBarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem',
  border: '1px solid white',
};

const PhotoNavBar = ({
  photoUrl,
  isCaptured,
}: {
  photoUrl: string;
  isCaptured: boolean;
}) => (
  <div style={PhotoNavBarStyle}>
    <BackForward />
    <a
      href={photoUrl}
      download='저장 될 파일 이름.jpg'
      style={{
        display: isCaptured ? 'block' : 'none',
      }}
    >
      Download
    </a>
  </div>
);

export default PhotoNavBar;
