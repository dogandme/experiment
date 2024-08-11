import Link from 'next/link';

const linkStyle = {
  backgroundColor: 'grey',
  padding: '1rem',
  borderRadius: '0.5rem',
};

const wrapperStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Page = () => {
  return (
    <div style={wrapperStyle}>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          padding: '1rem',
          border: '1px solid white',
        }}
      >
        <Link href='photo/record?type=camera' style={linkStyle}>
          Take a Camera
        </Link>
        <Link href='photo/record?type=video' style={linkStyle}>
          Take a Video
        </Link>
      </div>
    </div>
  );
};

export default Page;
