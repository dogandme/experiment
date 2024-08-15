import Button from '@/shared/ui/Button';

const MediaDownloadButton = ({ onClick }: { onClick: () => void }) => {
  return <Button onClick={onClick}>Download</Button>;
};

export default MediaDownloadButton;
