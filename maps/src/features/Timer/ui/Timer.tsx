'use client;';

import { useEffect, useRef, useState } from 'react';
import Button from '@/shared/ui/Button';

import { formatTime } from '../model/time';

const Timer = () => {
  const [startTime, setStartTime] = useState<number>(0);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [isRunning, setisRunning] = useState<boolean>(false);
  const intervalRef = useRef<number | null>(null);

  const handleStart = () => {
    intervalRef.current = window.setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1000);
    }, 1000);

    setStartTime((prevStartTime) => {
      return startTime === 0 ? new Date().getTime() : prevStartTime + 1000;
    });

    setElapsedTime((prevElapsedTime) => {
      return startTime === 0 ? 0 : prevElapsedTime + 1000;
    });
    setisRunning(true);
  };

  const handlePause = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setisRunning(false);
  };

  const handleSave = () => {
    window.alert(elapsedTime);
    setStartTime(0);
    setElapsedTime(0);
    setisRunning(false);
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <section
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: 'white',
        zIndex: 100,
        color: 'black',
        padding: '2rem',
        fontSize: '2rem',
      }}
    >
      <h1>{formatTime(elapsedTime)}</h1>
      <div>
        {isRunning ? (
          <Button onClick={handlePause}>Pause</Button>
        ) : (
          <Button onClick={handleStart}>Start</Button>
        )}
        <Button onClick={handleSave}>Save</Button>
      </div>
    </section>
  );
};

export default Timer;
