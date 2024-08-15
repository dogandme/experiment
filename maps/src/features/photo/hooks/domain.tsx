import { useClientEffect } from '@/shared/hooks/devhoney';
import { useState, useRef } from 'react';

/**
 * photoUrl: 캡쳐된 사진의 URL , photoRef의 canvas 엘리먼트의 image를 URL 형식으로 변환한 문자열
 * isCaptured: 사진이 캡쳐되었는지 여부 , 화면에서 캡쳐된 이미지를 렌더링 할지, 스트리밍 되는 화면을 렌더링 할지 결정될 때 사용
 * streamingRef: 비디오 스트리밍 엘리먼트의 ref
 * photoRef: streamingRef.current 에서 캡쳐된 사진을 렌더링할 캔버스 엘리먼트의 ref
 */
export const usePhotoLogic = () => {
  const [photoUrl, setPhotoUrl] = useState<string>('');
  const [isCaptured, setIsCaptured] = useState<boolean>(false);
  const streamingRef = useRef<HTMLVideoElement | null>(null);
  const photoRef = useRef<HTMLCanvasElement | null>(null);

  const handleCapture = () => {
    if (!photoRef.current || !streamingRef.current) {
      return;
    }
    const { current: streamingVideo } = streamingRef;
    const { current: photoCanvas } = photoRef;
    photoCanvas.width = streamingVideo.videoWidth;
    photoCanvas.height = streamingVideo.videoHeight;

    const context = photoCanvas.getContext('2d');
    if (!context) {
      // TODO 2d context 를 얻지 못했을 때 에러를 던지고 에러 핸들링 로직이 필요 할 것 같음
      return;
    }

    context.drawImage(
      streamingVideo,
      0,
      0,
      photoCanvas.width,
      photoCanvas.height,
    );
    const imageToDataURL = photoCanvas.toDataURL('image/png');

    setPhotoUrl(imageToDataURL);
    setIsCaptured(true);
  };

  const handleReCapture = () => {
    setPhotoUrl('');
    setIsCaptured(false);
  };

  useClientEffect(() => {
    const connectDeviceToStream = async () => {
      if (streamingRef.current === null) {
        return;
      }

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        streamingRef.current.srcObject = stream;
      } catch (error) {
        // TODO 사용자가 거절 눌렀을 때의 에러 핸들링 로직이 필요함
        console.error(error);
      }
    };
    connectDeviceToStream();
  }, []);

  return {
    photoUrl,
    isCaptured,
    streamingRef,
    photoRef,
    handleCapture,
    handleReCapture,
  };
};
