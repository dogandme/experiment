'use client';

import { useClientEffect } from '@/shared/hooks/devhoney';
import { useState, useRef } from 'react';

const LiveScreen = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);

  const handleCapture = () => {
    if (!videoRef.current || !canvasRef.current) {
      return;
    }

    const $canvas = canvasRef.current;
    const $video = videoRef.current;

    const context = $canvas.getContext('2d');
    if (!context) {
      return;
    }

    $canvas.width = $video.videoWidth;
    $canvas.height = $video.videoHeight;

    context.drawImage($video, 0, 0, $canvas.width, $canvas.height);
    const imageToDataUrl = $canvas.toDataURL('image/png');
    setPhoto(imageToDataUrl);
  };

  useClientEffect(() => {
    const connectCamera = async () => {
      if (!videoRef.current || !canvasRef.current) {
        return;
      }

      // navigator.mediaDevices.getUserMedia 는 브라우저에서 사용자의 카메라나 마이크에 접근할 수 있게 해주는 API
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });

      // videoRef.current.srcObject = stream; 을 통해 video 태그에 카메라 스트림을 연결
      videoRef.current.srcObject = stream;
    };

    connectCamera();
  }, []);

  return (
    <section>
      <video ref={videoRef} autoPlay playsInline style={{ width: '100%' }} />
      <button
        onClick={handleCapture}
        style={{
          backgroundColor: 'gray',
          padding: '1rem',
        }}
      >
        Capture Photo
      </button>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      {photo && (
        <div>
          <h1>캡쳐된 이미지</h1>
          <img src={photo} alt='Captured' />
        </div>
      )}
    </section>
  );
};

export default LiveScreen;
