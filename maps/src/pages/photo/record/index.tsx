import { PhotoApp } from '@/features/photo/ui';
import PhotoHeader from '@/widgets/photo/ui';

interface recordSearchParams {
  type: 'video' | 'camera' | unknown;
}

const wrapperStyle = {
  minWidth: '400px',
  minHeight: '600px',
  border: '1px solid white',
};

const Page = ({ searchParams }: { searchParams: recordSearchParams }) => {
  const recordType = searchParams.type;

  if (recordType === 'video') {
    return <div style={wrapperStyle}>video</div>;
  }

  if (recordType === 'camera') {
    return <PhotoApp />;
  }

  return <div>엥 ?</div>;
};

export default Page;
